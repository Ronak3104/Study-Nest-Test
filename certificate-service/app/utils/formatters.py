from datetime import datetime


def format_student_name(name: str) -> str:
    if not name:
        return "STUDENT NAME"
    return " ".join(word.capitalize() for word in name.strip().split())


def format_course_title(title: str) -> str:
    if not title:
        return "COURSE TITLE"
    return title.strip()


def format_completion_date(date_str: str = None) -> str:
    if not date_str:
        return datetime.now().strftime("%d %B %Y")

    try:
        parsed = datetime.fromisoformat(date_str.replace("Z", ""))
        return parsed.strftime("%d %B %Y")
    except Exception:
        return datetime.now().strftime("%d %B %Y")