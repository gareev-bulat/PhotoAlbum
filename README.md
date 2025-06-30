# PhotoAlbum

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)]()

A digital pinboard application for uploading, managing, and browsing family photos. Built with React, Vite, Node.js, and Supabase.

---

## 📋 Table of Contents

* [Features](#features)
* [Tech Stack](#tech-stack)
* [Prerequisites](#prerequisites)
* [Installation](#installation)
* [Configuration](#configuration)
* [Running the Application](#running-the-application)
* [API Endpoints](#api-endpoints)
* [Project Structure](#project-structure)

---

## ✨ Features

* Responsive grid of photo cards with a smooth "swing" hover animation
* Toggleable edit mode for inline photo management
* Floating navbar with Add & Edit buttons
* Photo upload form with title and date metadata
* Supabase integration for secure file storage and metadata management
* Clean UI using React, Vite, Ant Design icons, and custom CSS animations

---

## 🛠 Tech Stack

| Frontend                                                                                                                      | Backend                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| ![React](https://img.shields.io/badge/React-61DAFB?logo=react\&logoColor=white) React 18                                      | ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white) Node.js     |
| ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white) Vite                                             | ![Express](https://img.shields.io/badge/Express-000000?logo=express\&logoColor=white) Express     |
| ![React Router DOM](https://img.shields.io/badge/React_Router_DOM-CA4245?logo=react-router\&logoColor=white) React Router DOM | ![Multer](https://img.shields.io/badge/Multer-CC6699?logo=multer\&logoColor=white) Multer         |
| ![Axios](https://img.shields.io/badge/Axios-671D92?logo=axios\&logoColor=white) Axios                                         | ![CORS](https://img.shields.io/badge/CORS-4EAA25?logo=mozilla\&logoColor=white) CORS              |
| ![Ant Design Icons](https://img.shields.io/badge/Ant_Design-0170FE?logo=ant-design\&logoColor=white) Ant Design Icons         | ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?logo=supabase\&logoColor=white) Supabase |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3\&logoColor=white) CSS3                                             |                                                                                                   |

---

## 🔌 Prerequisites

* Node.js v16+ and npm
* A Supabase project (Account & API credentials)

---

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/PhotoAlbum.git
   cd PhotoAlbum
   ```

2. **Install backend dependencies**

   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**

   ```bash
   cd ../frontend
   npm install
   ```

---

## ⚙️ Configuration

1. Copy and rename `.env.example` to `.env` in both `backend/` and (if needed) `frontend/` directories.
2. Set the following environment variables:

   ```env
   # Supabase settings
   SUPABASE_URL=https://<your-project>.supabase.co
   SUPABASE_KEY=<your-anon-or-service-role-key>

   # Backend server port
   PORT=8080
   ```

---

## ▶️ Running the Application

1. **Start the backend**:

   ```bash
   cd backend
   npm run dev
   ```

   The API will run at `http://localhost:8080`.

2. **Start the frontend**:

   ```bash
   cd ../frontend
   npm run dev
   ```

   Open `http://localhost:3000` (or the port shown by Vite).

---

## 📡 API Endpoints

| Method | Endpoint          | Description                              |
| ------ | ----------------- | ---------------------------------------- |
| GET    | `/api/photosinfo` | Fetch all photo metadata                 |
| POST   | `/api/photos`     | Upload a new photo (multipart/form-data) |

---

## 📂 Project Structure

```
PhotoAlbum/
├── backend/
│   ├── server.js           # Express server & API routes
│   ├── supabase-client.ts  # Supabase initialization
│   ├── package.json        # Backend scripts & deps
│   └── .env                # Environment variables
│
├── frontend/
│   ├── public/             # Static assets (pin.png, favicon)
│   ├── src/
│   │   ├── main.jsx        # App entrypoint
│   │   ├── App.jsx         # Router & layout
│   │   ├── index.css       # Global styles
│   │   ├── components/     # Reusable UI components
│   │   │   └── PinCard.jsx # Photo card component
│   │   └── screens/        # Page components
│   │       ├── home.jsx    # Pinboard view
│   │       └── SubmitForm.jsx # Upload form
│   └── package.json        # Frontend scripts & deps
│
├── .gitignore
└── README.md               # Project documentation
```
