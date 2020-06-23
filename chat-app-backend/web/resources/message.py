from flask import request
from flask_restful import fields, Resource
from ..models.message import MessageModel, MessageSchema
from .util import custom_response
from flask_socketio import emit
from ..socketio import socketio

message_schema = MessageSchema()

class Message(Resource):

	def post(self):

		status_msg, status_code, result = '', 200, {}
		try:
			req_data = request.get_json()
			room_id = req_data['room_id']
			print(room_id)
			data = message_schema.load(req_data)
			message = MessageModel(data)
			message.save()
			result = message_schema.dump(message)
			status_code = 200
			status_msg = 'GetMessageSuccess'
		except Exception as e:
			status_code = 500
			status_msg = 'GetMessageError'
			print(format(str(e)))
		
		finally:
			return custom_response(result, status_code, status_msg)
		
class Messages(Resource):

	def get(self, room_id):
		status_msg, status_code, result = '', 200, []

		try:
			messages = MessageModel.get_messages(room_id)
			result = message_schema.dump(messages, many=True)
			status_code = 200
			status_msg = 'GetMessgesSuccess'

		except Exception as e:
			status_code = 500
			status_msg = 'GetMessagesError'
			print(format(str(e)))
		
		finally:
			return custom_response(result, status_code, status_msg)