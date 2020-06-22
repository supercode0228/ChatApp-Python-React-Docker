from flask import Flask
from flask_cors import CORS
from flask_restful import Resource
from flask_socketio import SocketIO

from .config import app_config
from .models.db_model import db
from .models import *

from .routes.api import api, api_bp
from .socketio import *

def create_app(env_name):

	# app initialization
	app = Flask(__name__)
	CORS(app)
	app.config.from_object(app_config[env_name])
	app.register_blueprint(api_bp, url_prefix='/api')

	db.init_app(app)

	api.init_app(app)

	socketio.init_app(app, cors_allowed_origins="*")
	
	return app