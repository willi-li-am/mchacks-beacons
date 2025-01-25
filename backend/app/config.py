# app/config.py

import os
from dotenv import load_dotenv

load_dotenv()  # take environment variables from .env

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "default_secret_key")
    # Add more config vars as needed, for example:
    # SQLALCHEMY_DATABASE_URI = os.getenv("DATABASE_URI", "sqlite:///mydb.db")
