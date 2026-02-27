import { BiShoppingBag } from "react-icons/bi";
import { LuListCollapse } from "react-icons/lu";
// import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const[sideBarOpen,setSideBarOpen]=useState(false)

  return (
    <header className="w-full h-[100px] bg-accent text-white flex items-center px-4 relative">
      {/* 1. Left Side: Menu Icon & Logo */}
      <div className="flex items-center z-10">
        <LuListCollapse 
          className="text-2xl lg:hidden mr-3 cursor-pointer" 
          onClick={() => setSideBarOpen(true)} 
        />
        <img 
          src="/logo.png" 
          className="h-[60px] w-auto object-contain" 
          alt="iComputers Logo" 
        />
      </div>

      
      
      <div className="hidden lg:flex absolute inset-0 items-center justify-center pointer-events-none">
        <nav className="flex gap-[30px] pointer-events-auto">
          <Link title="Home" to="/" className="hover:text-gray-300 transition-colors">Home</Link>
          <Link title="Products" to="/products" className="hover:text-gray-300 transition-colors">Products</Link>
          <Link title="Contact" to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
          <Link title="About" to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
        </nav>
      </div>

      {/*  Right Side: Shopping Bag */}
      <div className="ml-auto z-10">
        <Link to="/cart" className="text-primary text-3xl hover:scale-110 transition-transform block">
          <BiShoppingBag />
        </Link>
      </div>

     {   
      sideBarOpen&& 
      <div className="fixed w-[100vw] h-screen top-0 left-0 bg-black/50 z-20 transition-all lg:hidden duration-300">
            <div className="  w-[250px] h-screen flex-col relative     ">
              <div className="absolute left-[-250px] bg-white transform-flat translate-x-[250px]  transition-transform duration-300 w-full h-full flex flex-col">
                  <div className="w-full h-[100px] bg-accent text-white flex items-center px-4">
                          <img 
            src="/logo.png" 
            className="h-full w-auto object-contain" 
            alt="iComputers Logo" 
          />  
          <LuListCollapse  className="text-2xl  my-auto ml-[85px]  lg:hidden rotate-180" onClick={
            ()=>{setSideBarOpen(false)}}/>

                  </div>
                  {/* Sidebar Links */}
            <div className="flex flex-col text-accent text-lg mt-8 px-6 gap-6">
              
              <Link
                to="/"
                className="hover:text-secondary transition duration-200"
                onClick={() => setSideBarOpen(false)}
              >
                Home
              </Link>

              <Link
                to="/products"
                className="hover:text-secondary transition duration-200"
                onClick={() => setSideBarOpen(false)}
              >
                Products
              </Link>

              <Link
                to="/contact"
                className="hover:text-secondary transition duration-200"
                onClick={() => setSideBarOpen(false)}
              >
                Contact Us
              </Link>

              <Link
                to="/about"
                className="hover:text-secondary transition duration-200"
                onClick={() => setSideBarOpen(false)}
              >
                About Us
              </Link>

              <Link
                to="/cart"
                className="hover:text-secondary transition duration-200"
                onClick={() => setSideBarOpen(false)}
              >
                Cart
              </Link>

            </div>
              </div>
            </div>
          </div>
      }

      
      {/* Spacer to balance the logo on the left if needed */}
      {/* <div className="w-[100px]  md:block"> 
          <Link to="/cart" className="right-4 top-1/2 translate y-12 text-white text-2xl">
          <BiShoppingBag/>
          </Link>
          
      </div> */}
    </header>
  );
}