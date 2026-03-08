import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Home(){

    const slogans = [
        "Powering Your Digital Future",
        "High Performance Computers for Everyone",
        "Upgrade Your Tech with i-Computers",
        "Reliable Technology. Trusted Service."
    ];

    const [index,setIndex] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setIndex((prev)=>(prev+1)%slogans.length);
        },3000);

        return ()=> clearInterval(interval);

    },[]);

    return(
        <div className="w-full">

            {/* HERO SECTION */}

            <div
                className="w-full h-[80vh] bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage:"url('/home.jpg')" }}
            >

                <div className="w-full h-full bg-black/60 flex flex-col items-center justify-center text-center px-6">

                    <h1 className="text-white text-4xl md:text-6xl font-bold mb-6">
                        i-Computers
                    </h1>

                    <p className="text-green-400 text-xl md:text-2xl font-semibold transition-all duration-500 animate-pulse">
                        {slogans[index]}
                    </p>

                    <div className="flex gap-4 mt-8 flex-wrap justify-center">

                        <Link
                        to="/products"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition"
                        >
                            Shop Now
                        </Link>

                        <Link
                        to="/about"
                        className="border border-white text-white hover:bg-white hover:text-black px-6 py-3 rounded-lg transition"
                        >
                            Learn More
                        </Link>

                    </div>

                </div>

            </div>


            {/* FEATURES SECTION */}

            <div className="py-16 px-6 bg-gray-100">

                <h2 className="text-3xl font-bold text-center mb-12">
                    Why Choose i-Computers
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">
                            Latest Technology
                        </h3>

                        <p className="text-gray-600">
                            Discover the newest laptops, desktops and accessories
                            designed for performance and reliability.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">
                            Affordable Prices
                        </h3>

                        <p className="text-gray-600">
                            Get premium quality computer hardware at competitive
                            prices with exclusive deals.
                        </p>
                    </div>

                    <div className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition">
                        <h3 className="text-xl font-semibold mb-3">
                            Trusted Support
                        </h3>

                        <p className="text-gray-600">
                            Professional customer support and reliable service
                            whenever you need assistance.
                        </p>
                    </div>

                </div>

            </div>


            {/* CALL TO ACTION */}

            <div className="bg-black text-white py-16 text-center px-6">

                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Build Your Perfect Setup
                </h2>

                <p className="text-gray-300 mb-8">
                    Browse our collection of powerful computers, accessories and
                    technology designed for work, gaming and creativity.
                </p>

                <Link
                to="/products"
                className="bg-green-500 hover:bg-green-600 px-8 py-3 rounded-lg font-semibold transition"
                >
                    Explore Products
                </Link>

            </div>

        </div>
    );
}