
# Bookstore Website

This repository contains the code for a fully functional bookstore website built using React, Node.js, Express, MongoDB, and Vite. The website includes features like user authentication, authorization and a book carousel slider with course course section which is accessible to authorized user only.

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)



## Technologies Used

- **Frontend**:
  - React
  - Vite
  - React Router
  - Tailwind CSS
  - Axios

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Mongoose
  - bcryptjs
 
## Features

- **User Authentication**: Secure login and registration using JWT.
- **User Authorization**: Role-based access control for different user actions.
- **Book Carousel Slider**: Attractive slider to showcase featured books.
- **Responsive Design**: Fully responsive design for mobile, tablet, and desktop.

## Installation

### Prerequisites

- Node.js (v14.x or later)
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/Ketan-Chaudhary/BookStore.git
cd bookstore
```

### Install Dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
cd /bookstore
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following environment variables:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

## Usage

### Start the Backend Server

```bash
cd backend
npm start
```

### Start the Frontend Server

```bash
cd frontend
cd bookstore
npm run dev
```

The frontend will be served at `http://localhost:3000` and the backend at `http://localhost:5000`.



## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and write tests for new features.

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a pull request

