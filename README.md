# calendar-backend
## Instructions
- Create your database and create tables from `sql` folder.
- Update your .env file.
- Download Rest client (vs-code extention) or use postman
- open `REST/user/createUser.http`
- send request (you should get back the email address and the token)
- copy token and go to `populate.db.js` and scroll down until you find the axios operation and paste the token after `Bearer` with a space.
- run npm run populate.db.js
- run npm start
- congrats your server is now running on port 5000
