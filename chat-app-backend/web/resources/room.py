from flask_restful import Resource
from ..models.room import RoomModel, RoomSchema
from .util import custom_response

room_schema = RoomSchema()

class Rooms(Resource):

	def get(self):
		status_msg, status_code, result = '', 200, []

		try:
			rooms = RoomModel.get_all_rooms()
			result = room_schema.dump(rooms, many=True)
			status_code = 200
			status_msg = 'GetRoomsSuccess'

		except Exception as e:
			status_code = 500
			status_msg = 'GetRoomsError'
		
		finally:
			return custom_response(result, status_code, status_msg)