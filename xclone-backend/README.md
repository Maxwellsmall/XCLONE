# X CLONE

XClone is a full-stack social media web application designed to replicate the core functionality, user interface, and real-time interaction model of X (formerly Twitter).

# INSTALLATION

```python
cd xclone-backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
source venv/Script/activate

# Install project requirements
pip install -r requirements.txt

# Migrate to sqlite on local
python manage.py migrate

# Start development server
python manage.py runserver

```

# DOCUMENTETION

The API documentation uses open ai swagger-ui

```python
# Swagger UI
127.0.0.1:8000/api/schema/swagger-ui
```

```python 
# Redoc UI
127.0.0.1:8000/api/schema/redoc
```

## Available Endpoints