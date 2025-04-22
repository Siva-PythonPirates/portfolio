# Portfolio Backend API

This is a simple Express.js backend API for storing contact form submissions from the portfolio website.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with the following variables:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Running the Server

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

## API Endpoints

### POST /api/messages
Submit a new contact form message.

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to work with you!"
}
```

Response:
```json
{
  "success": true,
  "message": "Message sent successfully",
  "data": {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'd like to work with you!",
    "createdAt": "2023-04-22T12:00:00.000Z",
    "_id": "60f1a2b3c4d5e6f7g8h9i0j1"
  }
}
```

### GET /api/messages
Get all messages (for admin purposes).

Response:
```json
[
  {
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I'd like to work with you!",
    "createdAt": "2023-04-22T12:00:00.000Z",
    "_id": "60f1a2b3c4d5e6f7g8h9i0j1"
  },
  ...
]
``` 