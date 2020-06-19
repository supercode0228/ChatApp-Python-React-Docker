from .db_model import db
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

	# class constructor
	def __init__(self, data):
		
		self.name = data.get('name')
		self.sender_id = data.get('sender_id')
		self.room_id = data.get('room_id')
		self.created_at = datetime.datetime.utcnow()
		self.updated_at = datetime.datetime.utcnow()