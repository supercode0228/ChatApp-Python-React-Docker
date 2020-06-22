from flask_socketio import SocketIO

socketio = SocketIO()

@socketio.on('connected')
def on_connect():
	print('user connected')