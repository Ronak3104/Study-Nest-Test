import os

def cleanup_temp(file_path):
    """Remove temporary PDF after upload"""
    try:
        if os.path.exists(file_path):
            os.remove(file_path)
    except Exception:
        pass