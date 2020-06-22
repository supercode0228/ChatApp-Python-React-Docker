from marshmallow import fields, Schema
from .db_model import db
from .user import UserSchema

import datetime

class RoomUserModel(db.Model):

	#table name
	__tablename__ = 'room_users'

	id = db.Column(db.Integer, primary_key=True, nullable=False)
	room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'), nullable=False)
	user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
	user_name = db.Column(db.String(128), nullable=False)
	user = db.relationship(
		'UserModel',
		backref=db.backref('room_users', cascade='all, delete-orphan', lazy='dynamic')
	)
	created_at = db.Column(db.DateTime)
	updated_at = db.Column(db.DateTime)

	# class constructor
	def __init__(self, data):

		self.room_id = data.get('room_id')
		self.user_id = data.get('user_id')
		self.user_name = data.get('user_name')
		self.created_at = datetime.datetime.utcnow()
		self.updated_at = datetime.datetime.utcnow()
	
	@staticmethod
	def get_room_users(room_id):
		return RoomUserModel.query.filter_by(room_id=room_id).all()
	
	def save(self):
		db.session.add(self)
		db.session.commit()

	def delete(self):
		db.session.delete(self)
		db.session.commit()

# add this class
class RoomUserSchema(Schema):

	id = fields.Int(dump_only=True)
	room_id = fields.Int(required=True)
	user_id = fields.Int(required=True)
	user_name = fields.Str(required=True)
	created_at = fields.DateTime(dump_only=True)
	updated_at = fields.DateTime(dump_only=True)
	user = fields.Nested(UserSchema)
