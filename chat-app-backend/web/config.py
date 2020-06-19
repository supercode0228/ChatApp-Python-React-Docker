import os

class Development(object):

	DEBUG = True
	TESTING = False
	SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL', 'sqlite://')
	SQLALCHEMY_TRACK_MODIFICATIONS = False

class Production(object):

	DEBUG = False
	TESTING = False
	SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URL')

app_config = {
	'development': Development,
	'production': Production
}