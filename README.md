# MEN Stack User Management System

A simple user management system built with MongoDB, Express.js, and Node.js (MEN Stack) that demonstrates basic CRUD operations.

## Features

- **Create**: Register new users with name, number, gender, date, and text information
- **Read**: View all registered users
- **Update**: Modify existing user information
- **Delete**: Remove users from the system

## Routes

- `/register` - Register new users
- `/get_users` - View all users
- `/update` - Update user information
- `/delete` - Delete users

## Project Structure

```
MEN/
├── config/
│   └── db.js           # MongoDB connection configuration
├── models/
│   └── user.js         # User model schema
├── public/
│   ├── style.css       # Stylesheet
│   └── style.js        # Client-side JavaScript
├── views/
│   ├── index.ejs       # Main page
│   ├── register.ejs    # User registration form
│   ├── update.ejs      # User update form
│   └── delete.ejs      # User deletion form
└── app.js              # Main application file
```

## Prerequisites

- Node.js
- MongoDB
- npm or yarn

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Make sure MongoDB is running on your system
4. Start the application:
   ```bash
   npm start
   ```
   or for development:
   ```bash
   npx nodemon app.js
   ```

## API Endpoints

- `POST /register` - Register a new user
- `GET /get_users` - Get all users
- `POST /update_user` - Update user information
- `POST /delete_user` - Delete a user

## Technologies Used

- MongoDB - Database
- Express.js - Web framework
- Node.js - Runtime environment
- EJS - Template engine
- Morgan - HTTP request logger

## Environment Variables

The application uses the following environment variables:
- `PORT` - Server port (default: 3000)
- MongoDB connection uses default local connection: 'mongodb://localhost:27017/men'
