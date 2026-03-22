import os
import uuid


BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUTPUT_DIR = os.path.join(BASE_DIR, "output")
CERTIFICATES_DIR = os.path.join(OUTPUT_DIR, "certificates")
TEMP_DIR = os.path.join(OUTPUT_DIR, "temp")


def ensure_directories():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(CERTIFICATES_DIR, exist_ok=True)
    os.makedirs(TEMP_DIR, exist_ok=True)


def generate_filename(prefix: str = "certificate", extension: str = "pdf") -> str:
    unique_id = uuid.uuid4().hex[:10]
    return f"{prefix}_{unique_id}.{extension}"


def get_certificate_output_path(filename: str) -> str:
    ensure_directories()
    return os.path.join(CERTIFICATES_DIR, filename)