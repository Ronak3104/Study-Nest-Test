import os
from reportlab.lib.pagesizes import landscape, A4
from reportlab.lib.colors import HexColor, white, black
from reportlab.pdfgen import canvas
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfbase import pdfmetrics
from reportlab.lib.utils import ImageReader


BASE_DIR = os.path.dirname(os.path.abspath(__file__))
FONTS_DIR = os.path.join(BASE_DIR, "fonts")
ASSETS_DIR = os.path.join(BASE_DIR, "assets")


def register_fonts():
    try:
        playfair_path = os.path.join(FONTS_DIR, "PlayfairDisplay-Bold.ttf")
        inter_regular_path = os.path.join(FONTS_DIR, "Inter-Regular.ttf")
        inter_semibold_path = os.path.join(FONTS_DIR, "Inter-SemiBold.ttf")

        if os.path.exists(playfair_path):
            pdfmetrics.registerFont(TTFont("PlayfairDisplayBold", playfair_path))
        if os.path.exists(inter_regular_path):
            pdfmetrics.registerFont(TTFont("InterRegular", inter_regular_path))
        if os.path.exists(inter_semibold_path):
            pdfmetrics.registerFont(TTFont("InterSemiBold", inter_semibold_path))
    except Exception:
        pass


def get_font(name: str, fallback: str) -> str:
    registered = pdfmetrics.getRegisteredFontNames()
    return name if name in registered else fallback


def draw_border(c, width, height):
    c.setStrokeColor(HexColor("#4f46e5"))
    c.setLineWidth(5)
    c.roundRect(20, 20, width - 40, height - 40, 20, stroke=1, fill=0)

    c.setStrokeColor(HexColor("#c7d2fe"))
    c.setLineWidth(2)
    c.roundRect(35, 35, width - 70, height - 70, 16, stroke=1, fill=0)


def draw_header(c, width, height, institution, logo_path=None):
    heading_font = get_font("InterSemiBold", "Helvetica-Bold")
    title_font = get_font("PlayfairDisplayBold", "Times-Bold")

    if logo_path and os.path.exists(logo_path):
        c.drawImage(ImageReader(logo_path), 60, height - 120, width=60, height=60, mask='auto')

    c.setFillColor(HexColor("#4338ca"))
    c.setFont(heading_font, 20)
    c.drawCentredString(width / 2, height - 70, institution)

    c.setFillColor(HexColor("#0f172a"))
    c.setFont(title_font, 32)
    c.drawCentredString(width / 2, height - 120, "Certificate of Completion")


def draw_body(c, width, height, student_name, course_title, completion_date):
    title_font = get_font("PlayfairDisplayBold", "Times-Bold")
    body_font = get_font("InterRegular", "Helvetica")
    bold_font = get_font("InterSemiBold", "Helvetica-Bold")

    c.setFillColor(HexColor("#475569"))
    c.setFont(body_font, 16)
    c.drawCentredString(width / 2, height - 180, "This is proudly presented to")

    c.setFillColor(HexColor("#111827"))
    c.setFont(title_font, 30)
    c.drawCentredString(width / 2, height - 235, student_name)

    c.setStrokeColor(HexColor("#818cf8"))
    c.setLineWidth(1.5)
    c.line(width / 2 - 220, height - 245, width / 2 + 220, height - 245)

    c.setFillColor(HexColor("#475569"))
    c.setFont(body_font, 15)
    c.drawCentredString(
        width / 2,
        height - 290,
        "for successfully completing the course"
    )

    c.setFillColor(HexColor("#4f46e5"))
    c.setFont(bold_font, 22)
    c.drawCentredString(width / 2, height - 335, course_title)

    c.setFillColor(HexColor("#475569"))
    c.setFont(body_font, 14)
    c.drawCentredString(
        width / 2,
        height - 385,
        f"Completed on {completion_date}"
    )


def draw_footer(c, width, certificate_number, signature_path=None):
    body_font = get_font("InterRegular", "Helvetica")
    bold_font = get_font("InterSemiBold", "Helvetica-Bold")

    # left footer - certificate number
    c.setFillColor(HexColor("#334155"))
    c.setFont(body_font, 12)
    c.drawString(70, 70, f"Certificate ID: {certificate_number}")

    # right footer - signature line
    if signature_path and os.path.exists(signature_path):
        c.drawImage(ImageReader(signature_path), width - 220, 70, width=120, height=40, mask='auto')

    c.setStrokeColor(HexColor("#94a3b8"))
    c.line(width - 240, 65, width - 70, 65)

    c.setFont(bold_font, 12)
    c.drawCentredString(width - 155, 50, "Authorized Signature")


def draw_seal(c, width, height):
    c.setStrokeColor(HexColor("#6366f1"))
    c.setFillColor(HexColor("#eef2ff"))
    c.circle(width - 110, height - 145, 35, stroke=1, fill=1)

    c.setFillColor(HexColor("#4338ca"))
    c.setFont("Helvetica-Bold", 10)
    c.drawCentredString(width - 110, height - 140, "STUDY")
    c.drawCentredString(width - 110, height - 152, "NEST")


def generate_certificate_pdf(
    output_path: str,
    student_name: str,
    course_title: str,
    completion_date: str,
    certificate_number: str,
    institution: str = "StudyNest Learning Platform"
):
    register_fonts()

    width, height = landscape(A4)
    c = canvas.Canvas(output_path, pagesize=(width, height))

    logo_path = os.path.join(ASSETS_DIR, "logo.png")
    signature_path = os.path.join(ASSETS_DIR, "signature.png")

    # background
    c.setFillColor(white)
    c.rect(0, 0, width, height, stroke=0, fill=1)

    draw_border(c, width, height)
    draw_header(c, width, height, institution, logo_path=logo_path)
    draw_body(c, width, height, student_name, course_title, completion_date)
    draw_footer(c, width, certificate_number, signature_path=signature_path)
    draw_seal(c, width, height)

    c.save()
    return output_path