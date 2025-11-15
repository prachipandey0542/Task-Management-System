# Task Management System (TMS)
A simple and efficient Task Management System built using React (Front-End) and Node.js + Sequelize + MySQL (Back-End).
This project allows users to register, login, create tasks, update tasks, and delete tasks through a clean and user-friendly interface.

# Features:-
User Authentication : Register and Login using secure credentials.
Add Tasks : Add Title, Message, and Date through a simple form.
View Tasks : All tasks are displayed in a clean task list.
Update Tasks : Edit any existing task and save changes.
Delete Tasks : Remove tasks instantly with one click.
Responsive UI : developed using React.

# Tech Stack:-
Frontend:-
React.js
Axios
React Router
CSS / Bootstrap

Backend:-
Node.js
Express.js
Sequelize ORM
MySQL Database

# How to Use the Project
Follow these steps to run and operate the project:

1. Register a New User
Open the project in your browser.
Go to the Register page.
Enter Name, Email, Password
Click Register

2. Login
Go to the Login page.
Enter Email & Password
Click Login

3. Add a New Task
After logging in:
Enter Task Title
Enter Message
Select/Add Date
Click Save Task

4. View Tasks
All saved tasks appear in a list format.
You can also update and uelete your tasks anytime using Update & Delete button.

# Project Setup (Developer Guide)
Frontend Setup
cd frontend
npm install
npm start

Backend Setup
cd backend
npm install
npm start

Make sure you have MySQL running and update your database credentials inside:
/backend/config/db.js    (or config.json)
