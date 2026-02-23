import { useState ,useEffect } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom"
import Loader from "../components/loader";
import axios from "axios";
import ImageSlider from "../components/imageSlider";


export default function ProductOverview(){
    const params=useParams(); //read the parameters comes with link
    const [product,setProduct]=useState(null);
    const [status,setStatus] = useState("loading");
    useEffect(()=>{
        if(status=="loading"){
            axios.get(import.meta.env.VITE_BACKEND_URL + "/products/" + params.productId).then(
                (response)=>{
                    setProduct(response.data);
                    setStatus("success");
                }
            ).catch(
                ()=>{
                    toast.error("Product Not Found")
                    setStatus("error");
                    
                }
            )

        }
    },[])
    return(
        <>
        {
            status=="loading" && <Loader/>
        }

        {
            status=="error" && <h1 className="text-center mt-10 text-2xl">Error Loading Product</h1>
        }

        {
            status=="success" &&
            <div className="w-full h-[calc(100vh-100px)] flex ">
                    <div className="w-1/2 h-full flex justify-center items-center">
                        <ImageSlider images={product.images}/>
                    </div>

                    <div className="w-1/2 h-full p-10 flex flex-col gap-6">
                            <h1 className="text-4xl font-semibold">{product.name}</h1>
                    </div>

            </div>
        }
        </>

    )
}
