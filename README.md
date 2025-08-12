# 🎟️ Eventify

Live Demo: Eventify on Vercel
Backend API: Eventify JSON Server

A modern event ticketing platform for concerts, comedy shows, and sports events.
Built with React (frontend) & JSON Server (backend), supporting full CRUD, authentication, cart and interest management, booking, and session handling.

## ✨ Features

🎭 Event Categories – Browse Concerts, Comedy, Sports & more
🔍 Advanced Filtering – Filter by type
🛒 Cart Management – Add, update, and remove tickets from cart
⭐ Wishlist (Interested) – Save events you love
📅 Bookings – View and manage your bookings
🔑 User Login / Logout – Simple session system
⚡ Full CRUD API – For Events, Users, Carts, Interested, Bookings, Sessions
🎨 Responsive UI – Built with modern React, Bootstrap & Swiper

## 🛠️ Tech Stack

### Frontend

⚛️ React 19+
🛠️ Axios for API calls
🔀 React Router
🗂️ Context API & Hooks
🎨 Bootstrap 5, Swiper.js

### Backend

📦 JSON Server for RESTful API
🗄️ db.json as database
🔍 Query filters, search, sorting

## 🚀 Getting Started (Local Development)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/yourusername/Eventify.git
cd Eventify
```

### 2️⃣ Install dependencies

```bash
npm install
```

### ▶️ Start JSON Server (Backend)

```bash
npm start
```

Your backend API will be available at:
http://localhost:3000
All CRUD operations (GET/POST/PATCH/DELETE) will update db.json.

### ▶️ Start React Frontend

```bash
npm run dev
```

Your frontend will run on:
http://localhost:5173

### 📁 Project Structure

bash
Eventify/
├── public/ # Static assets
├── src/ # React components, pages, hooks, contexts
├── server.js (optional) # If using Express instead of JSON Server
├── package.json
└── README.md

### 🔗 Main API Endpoints

Resource Methods Example Usage
/events GET, POST, PATCH, PUT, DELETE /events?type=concert
/users GET, POST, PATCH, PUT, DELETE /users?email=test@gmail.com
/interested GET, POST, PATCH, PUT, DELETE /interested?userId=1
/carts GET, POST, PATCH, PUT, DELETE /carts?userId=1
/bookings GET, POST, PATCH, PUT, DELETE /bookings?userId=1
/sessions GET, POST, DELETE /sessions?userId=1
