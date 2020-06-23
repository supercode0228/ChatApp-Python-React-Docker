from marshmallow import fields, Schema
from .db_model import db
from .user import UserSchema

import datetime

class MessageModel(db.Model):

	#table name
	__tablename__ = 'messages'

	id = db.Column(db.Integer, primary_key=True, nullable=False)
	content = db.Column(db.Text, nullable=False)
	sender_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
	room_id = db.Column(db.Integer, db.ForeignKey('rooms.id'), nullable=False)
	created_at = db.Column(db.DateTime)
	updated_at = db.Column(db.DateTime)
	sender = db.relationship(
		'UserModel',
		backref=db.backref('messages', cascade='all, delete-orphan', lazy='dynamic')
	)

	# class constructor
	def __init__(self, data):
		
		self.content = data.get('content')
		self.sender_id = data.get('sender_id')
		self.room_id = data.get('room_id')
		self.created_at = datetime.datetime.utcnow()
		self.updated_at = datetime.datetime.utcnow()
	
	@staticmethod
	def get_messages(room_id):
		return MessageModel.query.filter_by(room_id=room_id).all()

	def save(self):
		db.session.add(self)
		db.session.commit()

# add this class
class MessageSchema(Schema):

	id = fields.Int(dump_only=True)
	room_id = fields.Int(required=True)
	sender_id = fields.Int(required=True)
	content = fields.Str(required=True)
	created_at = fields.DateTime(dump_only=True)
	updated_at = fields.DateTime(dump_only=True)
	sender = fields.Nested(UserSchema)