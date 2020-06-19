import os
from flask_script import Manager
from flask_migrate import Migrate, MigrateCommand

from web.app import create_app, db, UserModel, RoomModel

env_name = os.getenv('FLASK_ENV')
app = create_app(env_name)

migrate = Migrate(app, db)

manager = Manager(app)

manager.add_command('db', MigrateCommand)

# define the command for creating db
@manager.command
def create_db():
	db.drop_all()
	db.create_all()
	db.session.commit()

# define the command for inserting sample data for test.
@manager.command
def seed_db():
	db.session.add(UserModel({'name':'John Doe'}))
	db.session.add(UserModel({'name':'Katin Dong'}))
	db.session.add(UserModel({'name':'Steven Hanna'}))
	db.session.add(UserModel({'name':'Chestan Ravi'}))
	db.session.add(UserModel({'name':'Mark Evans'}))
	db.session.add(UserModel({'name':'Rachel Zimmer'}))
	db.session.add(UserModel({'name':'Peter Lount'}))

	db.session.add(RoomModel({'name':'Room1'}))
	db.session.add(RoomModel({'name':'Room2'}))
	db.session.add(RoomModel({'name':'Room3'}))
	db.session.add(RoomModel({'name':'Room4'}))
	db.session.add(RoomModel({'name':'Room5'}))

	db.session.commit()

if __name__ == '__main__':
	#run app
	manager.run()