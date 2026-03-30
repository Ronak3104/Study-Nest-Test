from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib import colors
from reportlab.lib.units import inch
from PIL import Image as PILImage
import os

def draw_certificate(pdf_path, student_name, course_name, duration, issue_date, certificate_id):
    c = canvas.Canvas(pdf_path, pagesize=A4)
    width, height = A4

    # Background
    c.setFillColor(colors.HexColor("#0f172a"))
    c.rect(0, 0, width, height, fill=1)

    # Border
    c.setStrokeColor(colors.HexColor("#6366f1"))
    c.setLineWidth(12)
    c.rect(50, 50, width - 100, height - 100)

    # Logo
    logo_path = "app/assets/logo.png"
    if os.path.exists(logo_path):
        logo = PILImage.open(logo_path)
        logo_width = 1.8 * inch
        c.drawInlineImage(logo, (width / 2) - (logo_width / 2), height - 2.8 * inch, width=logo_width, height=logo_width)

    # Title
    c.setFont("PlayfairDisplay-Bold", 42)
    c.setFillColor(colors.white)
    c.drawCentredString(width / 2, height - 3.8 * inch, "CERTIFICATE OF COMPLETION")

    # Subtitle
    c.setFont("Inter-Regular", 18)
    c.setFillColor(colors.HexColor("#a855f7"))
    c.drawCentredString(width / 2, height - 4.6 * inch, "StudyNest – Smart Learning, Simplified")

    # Student Name
    c.setFont("PlayfairDisplay-Bold", 36)
    c.setFillColor(colors.white)
    c.drawCentredString(width / 2, height - 6.2 * inch, student_name)

    # Completed course
    c.setFont("Inter-Regular", 20)
    c.drawCentredString(width / 2, height - 7.4 * inch, "has successfully completed")
    c.setFont("PlayfairDisplay-Bold", 28)
    c.setFillColor(colors.HexColor("#10b981"))
    c.drawCentredString(width / 2, height - 8.2 * inch, course_name)

    # Details
    c.setFont("Inter-Regular", 16)
    c.setFillColor(colors.white)
    c.drawCentredString(width / 2, height - 9.6 * inch,
                        f"on {issue_date} • Duration: {duration}")

    # Signature area
    sig_path = "app/assets/signature.png"
    if os.path.exists(sig_path):
        sig = PILImage.open(sig_path)
        c.drawInlineImage(sig, width - 3.8 * inch, 2.2 * inch, width=2.2 * inch, height=0.9 * inch)

    c.setFont("Inter-SemiBold", 14)
    c.drawString(width - 3.8 * inch, 2 * inch, "Pranjali Patil")
    c.drawString(width - 3.8 * inch, 1.7 * inch, "Project Guide")

    # Certificate ID
    c.setFont("Inter-Regular", 12)
    c.drawString(1.5 * inch, 1.2 * inch, f"Certificate ID: {certificate_id}")

    c.save()