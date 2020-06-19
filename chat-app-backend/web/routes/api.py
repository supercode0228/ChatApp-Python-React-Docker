from flask_restful import Api
from flask import Blueprint
from ..resources import *

api_bp = Blueprint('api', __name__)
api = Api(api_bp)

api.add_resource(Rooms, '/rooms')
api.add_resource(AllRoomUsers, '/room_users')
api.add_resource(RoomUsers, '/room_users/<room_id>')
