# ✦ Lumière Jewels

> _Timeless pieces, crafted with light and grace._

A full-stack luxury jewellery ecommerce web application built with the MERN stack. Lumière Jewels features a elegant customer-facing storefront, a powerful admin panel, and a complete order management system — designed and developed as a flagship portfolio project.

---

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Hosting-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Live Demo
> 🔗 [lumiere-jewels-store.vercel.app](https://lumiere-jewels-store.vercel.app)
> 🔗 [Admin Panel](https://lumiere-jewels-admin.vercel.app) _(coming soon)_

---

## 📸 Screenshots

> _Screenshots coming soon — storefront, admin panel, product pages, order tracking._

---

## 🌟 Features

### Customer Storefront

- 🏠 Elegant homepage with animated gold sparkle background, hero banner, and themed collection sections (Flora, Luna, Pearl & Sea)
- 💍 Full product catalogue with filtering by category, material, and price
- 🔍 Live search with instant results
- 🛒 Cart with quantity management and persistent storage
- 💳 Checkout with Cash on Delivery payment method
- 📦 Order placement with full address collection
- 📬 Order tracking with a visual step-by-step progress stepper (Order Placed → Packing → Shipped → Out for Delivery → Delivered)
- 👤 User authentication (register/login/logout)
- 🌸 Profile page with personalised welcome message
- 🏅 Bestseller badges on featured products

### Admin Panel

- ➕ Add products with up to 4 images, category, material, color, price, and bestseller toggle
- 📋 List and manage all products with collection tagging
- 📦 View and manage all customer orders
- 🔄 Update order status in real-time with colour-coded status badges
- 🗑️ Delete orders

### Design & UX

- Cormorant Garamond luxury serif typography
- Cream (`#FDF8F0`) and gold (`#C9A84C`) brand palette
- Animated twinkling gold sparkle star background
- Fully responsive across mobile, tablet, and desktop
- Smooth hover transitions and micro-interactions

---

## 🛠️ Tech Stack

| Layer          | Technology                   |
| -------------- | ---------------------------- |
| Frontend       | React 18, Vite, Tailwind CSS |
| Backend        | Node.js, Express.js          |
| Database       | MongoDB Atlas                |
| Image Hosting  | Cloudinary                   |
| Authentication | JWT (JSON Web Tokens)        |
| HTTP Client    | Axios                        |
| Notifications  | React Toastify               |
| Routing        | React Router v6              |

---

## 📁 Project Structure

```
lumiere-jewels/
├── frontend/          # Customer-facing React app (port 5173)
│   ├── src/
│   │   ├── pages/     # Home, Collection, Product, Cart, Orders, Profile, About, Contact
│   │   ├── components/# NavBar, Footer, ProductItem, SearchBar, Title, etc.
│   │   ├── context/   # ShopContext (global state)
│   │   └── assets/    # Images, icons
├── admin/             # Admin panel React app (port 5175)
│   ├── src/
│   │   ├── pages/     # Add, List, Orders
│   │   └── components/# Navbar, Sidebar, Login
└── backend/           # Express API server (port 4000)
    ├── controllers/   # productController, orderController, userController, cartController
    ├── models/        # productModel, orderModel, userModel
    ├── routes/        # productRoute, orderRoute, userRoute, cartRoute
    └── middleware/    # auth, adminAuth
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Cloudinary account

### 1. Clone the repository

```bash
git clone https://github.com/roza70/lumiere-jewels.git
cd lumiere-jewels
```

### 2. Backend setup

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:

```env
MONGODB_URI=your_mongodb_atlas_connection_string
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret
JWT_SECRET=your_jwt_secret
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
```

```bash
npm run server
```

### 3. Frontend setup

```bash
cd frontend
npm install
```

Create a `.env` file in `/frontend`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
npm run dev
```

### 4. Admin panel setup

```bash
cd admin
npm install
```

Create a `.env` file in `/admin`:

```env
VITE_BACKEND_URL=http://localhost:4000
```

```bash
npm run dev
```

---

## 🌐 Deployment

| Service       | Purpose                |
| ------------- | ---------------------- |
| Vercel        | Frontend + Admin panel |
| Render        | Backend API            |
| MongoDB Atlas | Database               |
| Cloudinary    | Image storage          |

---

## 👩‍💻 Author

**Tahsin Akter Roza**
Final-year Software Engineering Student, IUBAT

[![GitHub](https://img.shields.io/badge/GitHub-roza70-181717?style=flat&logo=github)](https://github.com/roza70)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/your-linkedin)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ✦ and elegance by Roza
</p>
/readME file added
