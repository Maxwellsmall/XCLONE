from django.core.mail import send_mail
from django.template.loader import render_to_string
from django.conf import settings

def send_notification_email(recipient_email, subject, title, body, preview_text=None, action_url=None, action_label="View on X Clone"):
    """Sends dynamic transactional emails using the generic template."""
    context = {
        "title": title,
        "body": body,
        "preview_text": preview_text,
        "action_url": action_url,
        "action_label": action_label,
    }

    html_message = render_to_string("emails/notification.html", context)
    plain_message = render_to_string("emails/notification.txt", context)

    send_mail(
        subject=subject,
        message=plain_message,
        from_email=settings.DEFAULT_FROM_EMAIL,
        recipient_list=[recipient_email],
        html_message=html_message,
        fail_silently=True,
    )