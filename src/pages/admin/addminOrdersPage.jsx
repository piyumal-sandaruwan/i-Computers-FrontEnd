import axios from "axios";
import { useEffect, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
import Loader from "../../components/loader";


export default function AdminOrdersPage(props) {

  const [orders, setOrders] = useState([]);
  const[loaded,setLoaded]=useState(false);

  useEffect(() => {
    if(!loaded){
    const token=localStorage.getItem("token");
    axios.get(import.meta.env.VITE_BACKEND_URL + "/orders",{
      headers: {
            Authorization: `Bearer ${token}`, 
          },
    })
      .then((response) => {
        setOrders(response.data);
        console.log(response.data);
        setLoaded(true);
      });
    }
  }, [loaded]);

  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center p-10">

      {/* Rounded Card Container */}
      <div className="w-full max-w-7xl bg-white shadow-2xl rounded-2xl overflow-hidden relative">

        {/* Header */}
        <div className="px-8 py-6 bg-accent text-primary">
          <h1 className="text-2xl font-bold tracking-wide">
            Order Management
          </h1>
        </div>

        {/* Table Wrapper (Important for rounded corners) */}
        <div className="overflow-x-auto">

          {loaded?<table className="w-full text-sm text-left border-collapse">

            {/* Table Head */}
            <thead className="bg-gray-100 text-accent uppercase text-xs tracking-wider">
              <tr>
                <th className="px-5 py-4">Order ID</th>
                <th className="px-5 py-4">Customer Email </th>
                <th className="px-5 py-4">Customer Name</th>
                <th className="px-5 py-4">Date</th>
                <th className="px-5 py-4">Status</th>
                <th className="px-5 py-4">Total Amount</th>
                <th className="px-5 py-4">Actions</th>
                
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {orders.map((order, index) => {
                return (
                  <tr
                    key={index}
                    className="border-b hover:bg-gray-50 transition duration-200"
                  >

                    <td className="px-5 py-4 font-semibold text-accent">
                      {order.orderId}
                    </td>

                    <td className="px-5 py-4 font-semibold text-accent">
                      {order.email}
                    </td>

                    <td className="px-5 py-4 font-semibold text-accent">
                      {order.name}
                    </td>

                    <td className="px-5 py-4 font-semibold text-accent">
                    {new Date(order.date).toLocaleDateString()}
                    </td>

                    <td className="px-5 py-4 font-semibold text-accent">
                    {order.status}
                    </td>

                    <td className="px-5 py-4 font-semibold text-accent">
                      LKR. {order.totalAmount.toFixed(2)}
                    </td>

                    {/* Action Column */}
                    <td className="px-5 py-4 font-semibold text-accent">                    
                    
                    {/* <div className="flex gap-3 justify-center">
                      <Link to="/admin/update-product" className="px-5 py-2 text-s rounded-lg cursor-pointer bg-blue-100 text-blue-600 hover:bg-blue-200 transition " 
                      state={item}> 
                        Edit
                      </Link>
                      <ProductDeleteButton productId={item.productId} reload={()=>{setLoaded(false)}}/>

                    </div> */}
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>:<Loader/>}
        </div>

      </div>

    </div>
  );
}










// import React, { useState } from 'react';
// import './adminProductPage.css';

// const AdminProductPage = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         price: '',
//         description: '',
//         category: '',
//         stock: '',
//         image: '',
//     });

//     const [products, setProducts] = useState([]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setProducts(prev => [...prev, { ...formData, id: Date.now() }]);
//         setFormData({
//             name: '',
//             price: '',
//             description: '',
//             category: '',
//             stock: '',
//             image: '',
//         });
//     };

//     const handleDelete = (id) => {
//         setProducts(prev => prev.filter(product => product.id !== id));
//     };

//     return (
//         <div className="admin-product-container">
//             <h1>Admin Product Management</h1>

//             <form onSubmit={handleSubmit} className="product-form">
//                 <input
//                     type="text"
//                     name="name"
//                     placeholder="Product Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 <input
//                     type="number"
//                     name="price"
//                     placeholder="Price"
//                     value={formData.price}
//                     onChange={handleChange}
//                     required
//                 />
//                 <textarea
//                     name="description"
//                     placeholder="Description"
//                     value={formData.description}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="category"
//                     placeholder="Category"
//                     value={formData.category}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="number"
//                     name="stock"
//                     placeholder="Stock Quantity"
//                     value={formData.stock}
//                     onChange={handleChange}
//                 />
//                 <input
//                     type="text"
//                     name="image"
//                     placeholder="Image URL"
//                     value={formData.image}
//                     onChange={handleChange}
//                 />
//                 <button type="submit">Add Product</button>
//             </form>

//             <div className="products-list">
//                 {products.map(product => (
//                     <div key={product.id} className="product-item">
//                         <h3>{product.name}</h3>
//                         <p>Price: ${product.price}</p>
//                         <p>Stock: {product.stock}</p>
//                         <button onClick={() => handleDelete(product.id)}>Delete</button>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default AdminProductPage;