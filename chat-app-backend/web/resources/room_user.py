from flask import request
from flask_restful import fields, Resource
from ..models.room_user import RoomUserModel, RoomUserSchema
from .util import custom_response

room_user_schema = RoomUserSchema()

class AllRoomUsers(Resource):

	def post(self):

		status_msg, status_code, result = '', 200, {}
		try:
			req_data = request.get_json()
			data = room_user_schema.load(req_data)
			room_user = RoomUserModel(data)
			room_user.save()
			result = room_user_schema.dump(room_user)
			status_code = 200
			status_msg = 'GetRoomUserSuccess'

		except Exception as e:
			status_code = 500
			status_msg = 'GetRoomUserError'
		
		finally:
			return custom_response(result, status_code, status_msg)
		
class RoomUsers(Resource):

	def get(self, room_id):
		status_msg, status_code, result = '', 200, []

		try:
			room_users = RoomUserModel.get_room_users(room_id)
			result = room_user_schema.dump(room_users, many=True)
			status_code = 200
			status_msg = 'GetRoomUsersSuccess'

		except Exception as e:
			status_code = 500
			status_msg = 'GetRoomUsersError'
			print(format(str(e)))
		
		finally:
			return custom_response(result, status_code, status_msg)