# ✦ Lumière Jewels

> _Timeless pieces, crafted with light and grace._

A full-stack luxury jewellery ecommerce web application built with the MERN stack. Lumière Jewels features a elegant customer-facing storefront, a powerful admin panel, and a complete order management system — designed and developed as a flagship portfolio project.

NOTE:This is a portfolio/demo e-commerce project created for educational purposes. Product images belong to their respective owners and are used as placeholders.

---

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Hosting-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Build_Tool-646CFF?style=for-the-badge&logo=vite&logoColor=white)

---

## ✨ Live Demo

> 🔗 [Customer Store](https://lumiere-jewels-store.vercel.app)
> ⚙️ [Admin Panel](https://lumiere-jewels-wcmr.vercel.app)


---

## 📸 Screenshots

1.🏠 Homepage — hero + sparkle stars
<img width="1869" height="800" alt="image" src="https://github.com/user-attachments/assets/c67e8b7c-77db-499e-8da7-4ac8edd517b4" />

2.💍 Collection page — jewelry grid
<img width="1835" height="816" alt="image" src="https://github.com/user-attachments/assets/da7c9c82-4576-446d-8884-c78aed8d03b4" />

3.🛍️ Product page — with Select Color
<img width="1793" height="821" alt="image" src="https://github.com/user-attachments/assets/eb00327a-d575-4951-9a5a-2686e11ec53b" />

4.🛒 Cart page
<img width="1807" height="764" alt="image" src="https://github.com/user-attachments/assets/e5faab0e-3bcf-4836-862e-025560490998" />

5.📦 My Orders — tracking stepper
<img width="1817" height="793" alt="image" src="https://github.com/user-attachments/assets/fa798bfa-1403-46fd-bd67-fc2e06c54954" />

6.🌸 Profile page — "Hello, Rosa"
<img width="1774" height="767" alt="image" src="https://github.com/user-attachments/assets/619c08c5-95f6-49cb-8fea-2dba4b04c543" />

7.ℹ️ About page
<img width="1916" height="819" alt="image" src="https://github.com/user-attachments/assets/7476c8a9-6132-40ae-84ee-c4890b71dfee" />

8.📞 Contact page
<img width="1894" height="768" alt="image" src="https://github.com/user-attachments/assets/997accbd-8f40-4a5e-8e8c-34ace62acc6e" />


**Admin panel**
9. ⚙️ Add Items page
<img width="1836" height="810" alt="image" src="https://github.com/user-attachments/assets/563f227e-66c9-4e66-b5f5-82496d187f37" />

10. 📋 List Items page
<img width="1813" height="819" alt="image" src="https://github.com/user-attachments/assets/533c4aec-8909-4911-ba22-5bccee69af55" />

11. 📦 Orders page
    <img width="1877" height="644" alt="image" src="https://github.com/user-attachments/assets/6af4933d-0304-49a5-817f-c0a900b06d1e" />





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



### 3. Frontend setup

```bash
cd frontend
npm install
```



### 4. Admin panel setup

```bash
cd admin
npm install
```


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
Final-year CSE Student, IUBAT

[![GitHub](https://img.shields.io/badge/GitHub-roza70-181717?style=flat&logo=github)](https://github.com/roza70)


---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ✦ and elegance by Roza
</p>

