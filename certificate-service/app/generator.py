import os
from flask import Flask, request, jsonify, send_from_directory
from dotenv import load_dotenv
import cloudinary
import cloudinary.uploader

from certificate_drawer import generate_certificate_pdf
from utils.formatters import (
    format_student_name,
    format_course_title,
    format_completion_date
)
from utils.file_utils import (
    ensure_directories,
    generate_filename,
    get_certificate_output_path,
    CERTIFICATES_DIR
)

load_dotenv()

app = Flask(__name__)

PORT = int(os.getenv("PORT", 8000))
DEBUG = os.getenv("DEBUG", "True").lower() == "true"
UPLOAD_TO_CLOUDINARY = os.getenv("UPLOAD_TO_CLOUDINARY", "False").lower() == "true"
BASE_URL = os.getenv("BASE_URL", f"http://localhost:{PORT}")

cloudinary.config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET")
)

ensure_directories()


@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({
        "success": True,
        "message": "Certificate service is running"
    }), 200


@app.route("/files/<filename>", methods=["GET"])
def serve_certificate_file(filename):
    return send_from_directory(CERTIFICATES_DIR, filename)


@app.route("/generate", methods=["POST"])
def generate_certificate():
    try:
        data = request.get_json()

        student_name = format_student_name(data.get("studentName"))
        course_title = format_course_title(data.get("courseTitle"))
        completion_date = format_completion_date(data.get("completionDate"))
        certificate_number = data.get("certificateNumber", "SN-UNKNOWN")
        institution = data.get("institution", "StudyNest Learning Platform")

        filename = generate_filename(prefix="certificate", extension="pdf")
        output_path = get_certificate_output_path(filename)

        generate_certificate_pdf(
            output_path=output_path,
            student_name=student_name,
            course_title=course_title,
            completion_date=completion_date,
            certificate_number=certificate_number,
            institution=institution
        )

        file_url = f"{BASE_URL}/files/{filename}"
        cloudinary_url = None

        if UPLOAD_TO_CLOUDINARY:
            upload_result = cloudinary.uploader.upload(
                output_path,
                resource_type="raw",
                folder="studynest/certificates",
                public_id=filename.replace(".pdf", "")
            )
            cloudinary_url = upload_result.get("secure_url")

        return jsonify({
            "success": True,
            "message": "Certificate generated successfully",
            "filename": filename,
            "localPath": output_path,
            "url": cloudinary_url if cloudinary_url else file_url
        }), 200

    except Exception as error:
        return jsonify({
            "success": False,
            "message": "Failed to generate certificate",
            "error": str(error)
        }), 500


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=PORT, debug=DEBUG)