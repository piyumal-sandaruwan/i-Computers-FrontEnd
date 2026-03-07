import Header from "../components/header";
import { Routes, Route } from "react-router-dom";
import ProductPage from "./productPage";
import ProductOverview from "./productOverview";
import CartPage from "./cartPage";
import CheckOutPage from "./checkOutPage";
import OrdersPage from "./ordersPage";

export default function HomePage(props){
    return(
        <>
                <div className="w-full h-full overflow -y-scroll">
                    <Header />
                    <div className="w-full min-h-[calc(100%-100px)]">
                        <Routes>
                            <Route path="/" element={<h1>Home Page</h1>} />
                            <Route path="/products" element={<ProductPage/>} />
                            <Route path="/contact" element={<h1>Contact Us</h1>} />
                            <Route path="/about" element={<h1>About Us</h1>} />
                            <Route path="/overview/:productId" element={<ProductOverview/>} />
                            <Route path="/cart" element ={<CartPage/>}/>
                            <Route path="/checkout" element={<CheckOutPage />}/>
                            <Route path="/orders" element={<OrdersPage/>}/>                           
                            <Route path="/*" element={<h1>Page Not Found</h1>} />
                        </Routes>
                    </div>
            
        </div>
        </>
    )
}

