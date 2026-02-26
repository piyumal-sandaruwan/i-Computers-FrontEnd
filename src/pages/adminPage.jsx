import { HiOutlineUsers } from "react-icons/hi";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { LuClipboardList, LuUsers } from "react-icons/lu";
import { MdOutlineRateReview } from "react-icons/md";
import { Routes, Route, Link } from "react-router-dom"; 
import AdminProductsPage from "./admin/adminProductsPage.jsx";
import AdminAddProductsPage from "./admin/adminAddProductPage.jsx";
import AdminUpdateProduct from "./admin/adminUpdateProduct.jsx";
import AdminOrdersPage from "./admin/adminOrdersPage.jsx";

export default function AdminPage(props) {
  return (
    <div className="w-full pl-[20px] pt-[10px] h-full max-h-full flex bg-accent">
      {/* Sidebar */}
      <div className="w-[200px] pl-[10px] max-h-full h-full bg-accent rounded-2xl">
        {/* Header */}
        <div className="w-full h-[100px] flex items-center text-white font-bold">
          <img src="/logo.png" className="h-full" alt="logo" />
          <h1 className="text-2xl">Admin</h1>
        </div>

        {/* Menu */}
        <div className="w-full h-[400px] flex flex-col justify-start gap-4 text-white font-bold">
          <Link to="/admin" className="w-full flex items-center h-[50px] gap-[10px]"><LuClipboardList />Orders</Link>
          <Link to="/admin/products" className="w-full flex items-center h-[50px] gap-[10px]"><LiaBoxOpenSolid />Products</Link>
          <Link to="/admin/users" className="w-full flex items-center h-[50px] gap-[10px]"><HiOutlineUsers />Users</Link>
          <Link to="/admin/reviews" className="w-full flex items-center h-[50px] gap-[10px]"><MdOutlineRateReview />Reviews</Link>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-[calc(100%-200px)] max-h-full overflow-y-scroll h-full rounded-2xl border-[10px] border-accent bg-primary scrollbar-thumb-blue-600">
        
        
        <Routes>

          <Route path="/" element={<AdminOrdersPage/>} />
          <Route path="/products" element={<AdminProductsPage />} />
          <Route path="/add-product" element={<AdminAddProductsPage />}/>
          <Route path="/update-product" element={<AdminUpdateProduct/>}/>
          <Route path="/users" element={<h1>Users</h1>} />
          <Route path="/reviews" element={<h1>Reviews</h1>} />
        </Routes>

      </div>
    </div>
  );
}