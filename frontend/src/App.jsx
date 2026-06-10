import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Collections from "./pages/collection";
import About from "./pages/about";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Product from "./pages/product";
import Login from "./pages/login";
import PlaceOrder from "./pages/placeOrder";
import Orders from "./pages/Orders";
import NavBar from "./components/NavBar";

const App = () => {
    return (
        <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/collections' element={<Collections />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/product/:ProductId' element={<Product />} />
                <Route path='/login' element={<Login />} />
                <Route path='/place-order' element={<PlaceOrder />} />
                <Route path='/orders' element={<Orders />} />
            </Routes>
        </div>
    )
}
export default App