from datetime import datetime

def format_issue_date(date_str=None):
    if date_str:
        return date_str
    return datetime.now().strftime("%d %B %Y")