from marshmallow import fields, Schema
from .db_model import db
import datetime

class UserModel(db.Model):

	#table name
	__tablename__ = 'users'

	id = db.Column(db.Integer, primary_key=True, nullable=False)
	name = db.Column(db.String(128), nullable=False)
	email = db.Column(db.String(128), nullable=False)
	created_at = db.Column(db.DateTime)
	updated_at = db.Column(db.DateTime)

	# class constructor
	def __init__(self, data):
		
		self.name = data.get('name')
		self.email = data.get('email')
		self.created_at = datetime.datetime.utcnow()
		self.updated_at = datetime.datetime.utcnow()
	
	@staticmethod
	def get_user_by_email(email):
		return UserModel.query.filter_by(email=email).first()

# add this class
class UserSchema(Schema):

	id = fields.Int(dump_only=True)
	name = fields.Str(required=True)
	email = fields.Str(required=True)
	created_at = fields.DateTime(dump_only=True)
	updated_at = fields.DateTime(dump_only=True)