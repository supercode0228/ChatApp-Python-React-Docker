Flask + React + Socket.IO + Postgresql Chat Room Challenge
A simple chat application that features a Flask back-end, React front-end, and Socket.io.

## Easy Start:
Verify that you have docker installed.

## Development

All commands should be run under the project root directory.

### `1. docker-compose build`

 Will build the docker container for backend and frontend and postgresql.

### `2. docker-compose up`

 Will run the project in docker environment.

### `3. docker-compose exec backend python manage.py create_db`

 Will create the database named accessbell-chat.

### `4. docker-compose exec backend python manage.py db init`

 Will initialize the created DB and generate the migrations.

### `5. docker-compose exec backend python manage.py db migrate`

 Will generate the tables based on defined schemas(users, rooms, messages, room_users).

### `6. docker-compose exec backend python manage.py db upgrade`

 Will upgrade the changed database.

### `7. docker-compose exec backend python manage.py seed_db`

## Start the React development server:

 This will startup a React development server at http://localhost:3000.
 Visit http://localhost:3000 in your browser to view the application.

## Start the Flask development server:

 This will startup a Flask development server at http://localhost:5000.

## Sample User Data.
	1 | John Doe      | johndoe@test.com      |
  2 | Katin Dong    | katindong@test.com    |
  3 | Steven Hanna  | stevenhanna@test.com  |
  4 | Chestan Ravi  | chestanravi@test.com  |
  5 | Mark Evans    | markevans@test.com    |
  6 | Rachel Zimmer | rachelzimmer@test.com |
  7 | Peter Lount   | peterlount@test.com   |

## Demo Video Link
https://www.dropbox.com/s/227cir0ju5gprhc/ChatApp-Video.mov?dl=0

## Demo Document
https://www.dropbox.com/s/oqfz8b6o2qtww8i/Chat%20Room%20Docment.pdf?dl=0

## Attributions
 This project was developed by William Lee, from Accessbell challenge @ Challenge 