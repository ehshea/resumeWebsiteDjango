"""
WSGI config for cms project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/3.0/howto/deployment/wsgi/
"""

import sys
import os
import os.path

sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), 'cms')))
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'cms.settings')
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
