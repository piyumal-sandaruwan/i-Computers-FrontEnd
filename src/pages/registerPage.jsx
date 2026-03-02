import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

export default function RegisterPage(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const navigate = useNavigate();

    async function handleRegister() {
        if (!firstName || !lastName || !email || !password) {
            toast.error("Please fill in all fields.");
            return;
        }

        if (password !== confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }
        
        try {
            await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/", { 
                firstName,
                lastName,
                email,
                password 
            });
            
            toast.success("Registration successful! Please login.");
            navigate("/login"); 
        } catch (err) {
            toast.error("Registration failed. Please check your details.");
        }
    }
        
    return (
        <div className="w-full h-screen bg-[url('background.jpg')] bg-cover bg-center bg-no-repeat flex overflow-hidden">
            {/* Left side brand info */}
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-10">
                <img src="logo (1).png" className="w-[200px] h-auto object-contain mb-6" alt="Logo" />
                <h1 className="font-bold text-white text-4xl text-center max-w-md">
                    Your one-stop shop for all your computer needs
                </h1>
                <h1 className="font-bold text-blue-300 text-xl text-center mt-4">
                    Grow your digital world, Join us today
                </h1>
            </div>

            {/* Right side form */}
            <div className="w-1/2 h-full flex justify-center items-center p-4">
                <div className="w-full max-w-[500px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl flex flex-col p-8 text-white">
                    <h2 className="text-3xl font-semibold mb-1">Register</h2>
                    <p className="text-white/70 mb-6 text-sm">Create an account to get started.</p>

                    <div className="flex flex-col gap-4">
                        {/* Grid for Names */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium">First Name</label>
                                <input 
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text" 
                                    placeholder="First Name" 
                                    className="w-full h-11 px-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-all text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium">Last Name</label>
                                <input 
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text" 
                                    placeholder="Last Name" 
                                    className="w-full h-11 px-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-all text-sm"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium">Email Address</label>
                            <input 
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full h-11 px-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-all text-sm"
                            />
                        </div>

                        {/* Grid for Passwords */}
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium">Password</label>
                                <input
                                    onChange={(e) => setPassword(e.target.value)} 
                                    type="password" 
                                    placeholder="••••••••" 
                                    className="w-full h-11 px-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-all text-sm"
                                />
                            </div>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs font-medium">Confirm</label>
                                <input
                                    onChange={(e) => setConfirmPassword(e.target.value)} 
                                    type="password" 
                                    placeholder="••••••••" 
                                    className="w-full h-11 px-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-all text-sm"
                                />
                            </div>
                        </div>

                        <button onClick={handleRegister} 
                            className="w-full h-12 bg-accent hover:bg-white hover:text-accent border border-accent text-white font-bold rounded-xl mt-4 transition-all duration-300 shadow-lg">
                            Register
                        </button>
                        
                        <p className="text-center text-xs text-white/60">
                            Already have an account? <Link to={"/login"} className="text-white font-bold cursor-pointer hover:underline">Login</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}