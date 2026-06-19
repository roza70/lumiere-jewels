import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Login from "./pages/Login";
import PlaceOrder from "./pages/PlaceOrder";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ShopContextProvider from "./context/ShopContext";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
    // redeploy-timestamp: 2026-06-19T06:52:59Z

    return (
        <ShopContextProvider>
            <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] bg-cream min-h-screen relative'>
                <div className='sparkle-stars'>
                    {[...Array(25)].map((_, i) => (
                        <span key={i} className='star' style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            fontSize: `${Math.random() * 10 + 8}px`
                        }}>✦</span>
                    ))}
                </div>
                <ToastContainer />
                <NavBar />
                <SearchBar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/collection' element={<Collection />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/product/:ProductId' element={<Product />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/place-order' element={<PlaceOrder />} />
                    <Route path='/orders' element={<Orders />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>
                <Footer />
            </div>
        </ShopContextProvider>
    )
}

export default App
