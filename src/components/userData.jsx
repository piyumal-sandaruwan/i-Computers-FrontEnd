import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function UserData() {
    const [user, setUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false); // Add this state

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            axios.get(import.meta.env.VITE_BACKEND_URL + "/users/", {
                headers: { Authorization: `Bearer ${token}` },
            }).then((response) => {
                const userData = Array.isArray(response.data) ? response.data[0] : response.data;
                setUser(userData);
            }).catch(() => setUser(null));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login";
    };

    return (
        <div className="flex items-center gap-4 relative">
            {user ? (
                /* Clickable Profile Trigger */
                <div 
                    className="cursor-pointer flex items-center gap-2" 
                    onClick={() => setIsOpen(!isOpen)} // Toggle on click
                >
                    <img 
                        src={user.image || "/default.png"} 
                        referrerPolicy="no-referrer"
                        alt="Profile" 
                        className="w-10 h-10 rounded-full object-cover border-2 border-white/20"
                    />
                    <span className="text-white font-medium">{user.firstName}</span>

                    {/* Dropdown Menu - Controlled by isOpen state */}
                    <div className={`absolute top-full right-0 mt-2 w-48 bg-white text-accent rounded-xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 z-50 ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                        <Link to="/orders" className="block px-4 py-3 hover:bg-gray-100 transition-colors">My Orders</Link>
                        <button 
                            onClick={handleLogout}
                            className="block w-full text-left px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-colors"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                /* Stylish Login/Register Buttons (remains same) */
                <div className="flex items-center gap-3">
                    <Link to="/login" className="px-5 py-2 text-sm font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-accent transition-all duration-300">Login</Link>
                    <Link to="/register" className="px-5 py-2 text-sm font-semibold bg-accent text-primary rounded-full hover:scale-105 transition-all duration-300">Register</Link>
                </div>
            )}
        </div>
    );
}