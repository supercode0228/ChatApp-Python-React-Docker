from flask import request
from flask_restful import fields, Resource
from ..models.room_user import RoomUserModel, RoomUserSchema
from ..models.user import UserModel, UserSchema
from .util import custom_response

room_user_schema = RoomUserSchema()
user_schema = UserSchema()

class AllRoomUsers(Resource):

	def post(self):

		status_msg, status_code, result = '', 200, {}
		try:
			req_data = request.get_json()

			user = user_schema.dump(UserModel.get_user_by_email(req_data['email']))
			user_id = user['id']

			if user_id :
				room_id = req_data['room_id']
				room_user = RoomUserModel.get_room_by_id(user_id, room_id)
				if room_user :
					result = room_user_schema.dump(room_user)
					status_code = 200
					status_msg = 'GetRoomUserSuccess'
				else :
					user_name = req_data['user_name']
					params = {
						'user_id': user_id,
						'room_id': room_id,
						'user_name': user_name
					}
					data = room_user_schema.load(params)
					room_user = RoomUserModel(data)
					room_user.save()
					result = room_user_schema.dump(room_user)
					status_code = 200
					status_msg = 'GetRoomUserSuccess'
			else :
				status_code = 500
				status_msg = 'GetUserNotExist'
		except Exception as e:
			status_code = 500
			status_msg = 'GetRoomUserError'
			print(format(str(e)))
		
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