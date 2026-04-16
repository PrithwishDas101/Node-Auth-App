# Backend API

A robust Node.js and Express-based backend following the **MVC (Model-View-Controller)** architectural pattern.

## 📁 Project Structure

```text
backend/src
├── config/       # Database connection and environment configurations
├── controllers/  # Logic for processing requests and returning responses
├── middleware/   # Custom middleware (auth, error handling, etc.)
├── models/       # Database schemas and models
├── routes/       # API endpoint definitions
├── app.js        # Express app initialization
└── index.js      # Server entry point
```

## 🚀 Getting Started

### Prerequisites
* **Node.js** (v14+ recommended)
* **npm** or **yarn**
* A running instance of your database (e.g., MongoDB)

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd backend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
DATABASE_URL=your_database_connection_string
JWT_SECRET=your_secret_key
```

### Running the Server
* **Development mode (with nodemon):**
  ```bash
  npm run dev
  ```
* **Production mode:**
  ```bash
  npm start
  ```

## 🛠 Features & API Endpoints

The current build includes full **CRUD (Create, Read, Update, Delete)** operations, specifically configured for **Posts** management.

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/posts` | Fetch all posts |
| `POST` | `/api/posts` | Create a new post |
| `GET` | `/api/posts/:id` | Fetch a single post by ID |
| `PUT` | `/api/posts/:id` | Update an existing post |
| `DELETE` | `/api/posts/:id` | Remove a post |

## 🛡 Middleware
* **Custom Middleware:** Located in `src/middleware/`, currently handling logic for post creation and request validation.

## 📜 License
This project is licensed under the MIT License.
