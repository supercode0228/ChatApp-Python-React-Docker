from flask_socketio import SocketIO

socketio = SocketIO()

@socketio.on('connected')
def on_connect():
	print('user connected')

@socketio.on('send_message')
def on_chat_received(data):
	print('message received')