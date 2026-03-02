import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import toast from "react-hot-toast";  

export default function LoginPage(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); // Initialize navigate

    async function handleLogin() {
        console.log("Login clicked")
        console.log("Email:", email)
        console.log("Password:", password)
        
        try{
        const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login",{ 
            email: email,
            password: password 

        });
        console.log(res)

        localStorage.setItem("token",res.data.token);
        // const token = localStorage.getItem("token");

        if (res.data.role ==="admin"){
            navigate("/admin")
        }else{
            navigate("/") 
        }
        toast.success("Login successful!");
        } catch (err) {
            
            console.log("Error during login:");
            console.log(err);
            toast.error("Login failed. Please check your credentials and try again.");
            return; // Exit the function if login fails
        }
   
   
    }
        
    return (
        <div className="w-full h-screen bg-[url('background.jpg')] bg-cover bg-center bg-no-repeat flex">
            {/* ... rest of your UI remains the same ... */}
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-10">
                <img src="logo (1).png" className="w-[200px] h-auto object-contain " alt="Logo" />
                <h1 className=" font-bold text-white text-4xl text-center ">
                    Your one-stop shop for all your computer needs
                </h1>
                <h1 className=" font-bold text-blue-300 text-xl text-center ">
                    Grow your digital world, Join us today
                </h1>
            </div>

            <div className="w-1/2 h-full flex justify-center items-center">
                <div className="w-[450px] h-[550px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl flex flex-col p-10 text-white">
                    <h2 className="text-4xl font-bold mb-2">Login</h2>
                    <p className="text-white/70 mb-8">Welcome back! Please enter your details.</p>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Email Address</label>
                            <input 
                                onChange={(e) => setEmail(e.target.value)}
                                type="email" 
                                placeholder="Enter your email" 
                                className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-accent transition-all"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-medium">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)} 
                                type="password" 
                                placeholder="••••••••" 
                                className="w-full h-12 px-4 rounded-xl bg-white/10 border border-white/20 focus:outline-none focus:border-accent transition-all"
                            />
                            <p className="text-white not-italic w-full text-right">
                                Forget your password? <Link to="/forget-password" name="forget-password" className="text-accent font-bold hover:underline italic text-sm">Click here</Link>
                            </p>
                        </div>

                        <button onClick={handleLogin} 
                            className="w-full h-12 bg-accent hover:text-accent hover:bg-transparent border border-accent text-white font-bold rounded-xl mt-4 transition-colors">
                            Login
                        </button>
                        
                        <p className="text-center text-sm text-white/60">
                            Don't have an account? <Link to={"/register"} className="text-white font-bold cursor-pointer hover:underline">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}