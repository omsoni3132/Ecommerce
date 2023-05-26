import React from "react";
import Product from "./components/product/Product";
import { Route, Routes, BrowserRouter } from "react-router-dom";


import Header from "./components/header/Header";
import Home from "./components/home/Home";

import Fragrances from "./components/category/Category/Fragrances";
import Skincare from "./components/category/Category/Skincare";
import SmartPhones from "./components/category/Category/SmartPhones";
import Laptops from "./components/category/Category/Laptops";
import Cart from "./components/Purchase/Cart";
import About from "./components/product/About";
import Contact from "./components/product/Contact";
import CheckOut from "./components/Purchase/CheckOut";
import Login from "./components/login/Login";
import Register from "./components/login/Register";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Show from "./components/showproduct/Show";
// import Laptops from "./components/category/Category/Laptops";

// import "./components/showproduct/Show.css"


function App() {
  return (
    <>

      <UserAuthContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Header" element={<Header />} />
             <Route path="/product" element={<ProtectedRoute><Product /> </ProtectedRoute>} />
          
            <Route path="/Laptops" element={<Laptops /> } />
            <Route path="/Fragrances" element={<Fragrances /> } />
            <Route path="/Skincare" element={<Skincare /> } />
            <Route path="/SmartPhones" element={<SmartPhones /> } />

            <Route path="/Cart" element={<Cart />} />
            <Route path="/About" element={<About /> } />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/CheckOut/:id" element={<CheckOut />} />
            <Route path="/CheckOut" element={<CheckOut />} />
            <Route path="/Show/:id" element={<Show />} />
            <Route path="/Login" element={<Login /> }/>
            <Route path="/Register" element={<Register />} />
          </Routes>
        </BrowserRouter>
      </UserAuthContextProvider>


    </>
  )
}

export default App;