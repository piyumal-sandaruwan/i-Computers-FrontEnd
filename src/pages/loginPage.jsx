import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../components/loader";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import { GrGoogle } from "react-icons/gr";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    
    const googleLogin = useGoogleLogin({
        onSuccess:(response)=>{
            setIsLoading(true)
            axios.post(import.meta.env.VITE_BACKEND_URL+"/users/google-login",{
                token:response.access_token
            }).then((res)=>{
                localStorage.setItem("token",res.data.token);
                if(res.data.role=="admin"){
                    navigate("/admin")
                }else{
                    navigate("/")
                }
                toast.success("Login Successfull")
                
                 
                
            }).catch((err)=>{
                console.log(err)
                toast.error("Google Login Failed");
            }).finally(() => {
            setIsLoading(false); // Move setIsLoading(false) inside finally
                });
            
            
              

        },
        onError:()=>{toast.error("Google Login Failed ")},
        onNonOAuthError:()=>{toast.error("Google Login Failed")}
    })

    async function handleLogin() {
        // Simple client-side validation
        if (email.trim() === "" || password.trim() === "") {
            toast.error("Please enter both email and password.");
            return;
        }

        setIsLoading(true);
        try {
            const res = await axios.post(import.meta.env.VITE_BACKEND_URL + "/users/login", {
                email: email.trim(),
                password: password.trim()
            });

            // Store token and handle success
            localStorage.setItem("token", res.data.token);
            toast.success("Login successful!");

            // Navigate based on user role
            if (res.data.role == "admin") {
                navigate("/admin");
            } else {
                navigate("/");
            }
        } catch (err) {
            toast.error("Login failed. Please check your credentials.");
            console.error("Error during login:", err);
        } finally {
            // Ensures loader is dismissed regardless of outcome
            setIsLoading(false);
        }
    }

    return (
        <div className="w-full h-screen bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat flex">
            {/* Left Side Branding */}
            <div className="w-1/2 h-full flex flex-col justify-center items-center p-10">
                <img src="logo (1).png" className="w-[200px] h-auto object-contain" alt="Logo" />
                <h1 className="font-bold text-white text-4xl text-center">
                    Your one-stop shop for all your computer needs
                </h1>
                <h1 className="font-bold text-blue-300 text-xl text-center">
                    Grow your digital world, Join us today
                </h1>
            </div>

            {/* Right Side Login Form */}
            <div className="w-1/2 h-full flex justify-center items-center p-4">
                <div className="w-full max-w-[500px] backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl rounded-3xl flex flex-col p-8 text-white">
                    <h2 className="text-3xl font-semibold mb-1">Login</h2>
                    <p className="text-white/70 mb-6 text-sm">Welcome back! Please enter your details.</p>

                    <div className="flex flex-col gap-4">
                        {/* Email Input */}
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium">Email Address</label>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full h-11 px-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-all text-sm"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col gap-1">
                            <label className="text-xs font-medium">Password</label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="••••••••"
                                className="w-full h-11 px-4 rounded-xl bg-white/20 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-accent transition-all text-sm"
                            />
                            <div className="text-right">
                                <Link to="/forgot-password" className="text-accent hover:underline text-xs font-medium">
                                    Forgot password?
                                </Link>
                            </div>
                        </div>

                        {/* Login Button */}
                        <button
                            onClick={handleLogin}
                            disabled={isLoading}
                            className={`w-full h-12 bg-accent hover:bg-white hover:text-accent border border-accent text-white font-bold rounded-xl mt-4 transition-all duration-300 shadow-lg ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
                        >
                            {isLoading ? "Logging in..." : "Login"}
                        </button>
                        
                        <button
                            onClick={googleLogin}
                            disabled={isLoading}
                            className="w-full h-12 bg-accent hover:bg-transparent hover:text-accent border border-accent text-white font-bold rounded-xl mt-1 transition-all duration-300 shadow-lg"
                        >
                         Login With <GrGoogle className="inline ml-2 mb-1"/>
                        </button>

                        <p className="text-center text-xs text-red/600">
                            Don't have an account? <Link to={"/register"} className="text-accent font-bold cursor-pointer hover:underline">Sign up</Link>
                        </p>
                    </div>
                </div>
            </div>

            {/* Global Loader */}
            {isLoading && <Loader />}
        </div> 
    );
}