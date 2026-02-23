import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full h-16 bg-accent text-white flex items-center px-4">
      {/* Adjusted logo height to fit the h-16 header */}
      <img 
        src="/logo.png" 
        className="h-full w-auto object-contain" 
        alt="iComputers Logo" 
      />  
      
      <nav className="w-full h-full flex justify-center items-center gap-[30px]">
        <Link title="Home" to="/" className="hover:text-gray-300 transition-colors">Home</Link>
        <Link title="Products" to="/products" className="hover:text-gray-300 transition-colors">Products</Link>
        <Link title="Contact" to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
        <Link title="About" to="/about" className="hover:text-gray-300 transition-colors">About Us</Link>
      </nav>
      
      {/* Spacer to balance the logo on the left if needed */}
      <div className="w-[100px] hidden md:block"></div>
    </header>
  );
}