from flask_socketio import SocketIO, emit

socketio = SocketIO()

@socketio.on('connected')
def on_connect():
	print('user connected')

@socketio.on('chat_send')
def on_chat_send(data):
	emit('chat_received', data, broadcast=True)