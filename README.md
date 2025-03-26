# 🏡 PropertyPulse - Advanced Next.js Real Estate Platform

## 📌 Project Overview
Welcome to **PropertyPulse**, a powerful and scalable real estate management system built with **Next.js, MongoDB, and Tailwind CSS**. Designed for real-world property listings, this project delivers features like **Google authentication, property management, internal messaging, bookmarking, and more**. Ideal for developers aiming to create a feature-rich real estate platform.

---

### 📸 Project Screenshot 
![Screenshot (50)](https://github.com/user-attachments/assets/d23970fc-0e15-4f22-9e38-d0544f61ba7b)
![Screenshot (51)](https://github.com/user-attachments/assets/c3a099f3-4663-40f1-9dd5-2ab45102dd01)
![Screenshot (52)](https://github.com/user-attachments/assets/95569c5e-41d8-405b-9c19-99d79fd391b1)
![Screenshot (56)](https://github.com/user-attachments/assets/48843117-dac0-4d8c-b509-3e83a5e87a23)

---

## 🌟 Key Features

- 🔐 **Authentication & Authorization** (Google Sign-In, NextAuth)
- 🏠 **Property Listing CRUD** (Create, Update, Delete Properties)
- 📸 **Multiple Property Image Upload** (Cloudinary Integration)
- 🔍 **Property Search & Filtering**
- 📬 **Internal Messaging System with Unread Notifications**
- 💾 **Property Bookmarking & Saved Listings**
- 🌍 **Property Sharing to Social Media**
- 📊 **User Profile with Personal Listings**
- ⚡ **Toast Notifications & Loading Spinners**
- 📷 **Photoswipe Image Gallery**
- 🎨 **Responsive UI (Tailwind CSS)**
- 🚧 **Custom 404 Page**

## 🚀 Tools & Technologies

This project leverages modern web technologies for high performance and scalability:

- **Next.js** – Server-side rendering & API routes
- **MongoDB & Mongoose** – NoSQL database for property listings
- **NextAuth.js** – Secure authentication with Google OAuth
- **Cloudinary** – Image hosting and processing
- **Tailwind CSS** – Beautiful, responsive UI styling
- **React Icons** – Custom icons for UI enhancement
- **React Spinners** – Elegant loading indicators
- **React Toastify** – User-friendly toast notifications
- **React Share** – Social media sharing integration

---

## 📁 Set Up Environment Variables

Rename `env.example` to `.env` and configure the following:

```env
MONGODB_URI=your-mongodb-connection-string
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXTAUTH_SECRET=your-nextauth-secret
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret
```

Generate a secure NextAuth secret using:
```sh
openssl rand -base64 32
```

---

## 💻 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **MongoDB Atlas** (Create a cluster at [MongoDB](https://www.mongodb.com))
- **Cloudinary** (Sign up at [Cloudinary](https://cloudinary.com))
- **Google Cloud Console** (Create OAuth credentials at [Google Cloud](https://console.cloud.google.com))

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/pshreya747/propertypulse.git
   cd propertypulse
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## 🌍 Deploying PropertyPulse

### 1️⃣ Add Environment Variables
Add the `.env` variables to your hosting platform (e.g., **Vercel**, **Railway**, or **Heroku**).

### 2️⃣ Deploy
Deploy your app using your preferred method to make it live.

---


