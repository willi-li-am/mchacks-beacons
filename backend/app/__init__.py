# app/__init__.py

from flask import Flask
from flask_cors import CORS
from .config import Config

def create_app():
    """Application factory function."""
    app = Flask(__name__)
    
    # Load config from object
    app.config.from_object(Config)
    
    # Enable CORS if needed
    CORS(app)
    
    # Register routes from routes.py
    from .routes import main_blueprint
    app.register_blueprint(main_blueprint)
    
    return app
