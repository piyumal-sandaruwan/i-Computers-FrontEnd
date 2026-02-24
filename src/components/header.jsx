import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-16 bg-accent text-white flex items-center px-4">
     
      <img 
        src="/logo.png" 
        className="h-full w-auto object-contain" 
        alt="iComputers Logo" 
      />  
      
      <div className="w-full h-full flex  justify-center items-center gap-[30px]">
        <Link title="Home" to="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <Link title="Products" to="/products" className="hover:text-gray-300 transition-colors">Products</Link>
        <Link title="Contact" to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
        <Link title="About" to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
      </div>
      
      {/* Spacer to balance the logo on the left if needed */}
      <div className="w-[100px]  md:block"> 
          <Link to="/cart" className="right-4 top-1/2 translate y-12 text-white text-2xl">
          <BiShoppingBag/>
          </Link>
          
      </div>
    </header>
  );
}