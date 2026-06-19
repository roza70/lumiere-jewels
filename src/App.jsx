import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Collection from "./pages/collection";
import About from "./pages/about";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Login from "./pages/login";
import PlaceOrder from "./pages/placeOrder";
import Orders from "./pages/Orders";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import ShopContextProvider from "./context/ShopContext";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
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
