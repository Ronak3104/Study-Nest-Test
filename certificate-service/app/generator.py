from fastapi import FastAPI, HTTPException
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from dotenv import load_dotenv
import os
import asyncio

from .certificate_drawer import draw_certificate
from .utils.file_utils import cleanup_temp
from cloudinary import uploader, config as cloudinary_config

load_dotenv()

# Cloudinary setup
cloudinary_config(
    cloud_name=os.getenv("CLOUDINARY_CLOUD_NAME"),
    api_key=os.getenv("CLOUDINARY_API_KEY"),
    api_secret=os.getenv("CLOUDINARY_API_SECRET"),
)

app = FastAPI(title="StudyNest Certificate Service")


class CertificatePayload(BaseModel):
    studentName: str
    courseName: str
    duration: str = "8 weeks"
    issueDate: str
    certificateId: str


@app.post("/generate-certificate")
async def generate_certificate(payload: CertificatePayload):
    try:
        output_dir = "app/output/certificates"
        os.makedirs(output_dir, exist_ok=True)
        pdf_path = f"{output_dir}/{payload.certificateId}.pdf"

        # Generate PDF
        draw_certificate(
            pdf_path=pdf_path,
            student_name=payload.studentName,
            course_name=payload.courseName,
            duration=payload.duration,
            issue_date=payload.issueDate,
            certificate_id=payload.certificateId,
        )

        # Upload to Cloudinary
        result = uploader.upload(
            pdf_path,
            folder="studynest/certificates",
            resource_type="raw",
            public_id=payload.certificateId,
            overwrite=True,
        )

        cleanup_temp(pdf_path)

        return JSONResponse({
            "success": True,
            "url": result["secure_url"],
            "certificateId": payload.certificateId
        })

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)