import { useState } from "react";

export default function ImageSlider(props){
    const images = props.images;
    const [activeIndex,setActiveIndex]=useState(0)
    return(
        <div className="w-full  flex flex-col items-center">
            <img src={images[activeIndex]}  className="w-[80%] h-[500px] object-contain"/>
            <div className="w-full h-[100px] justify-center items-center gap-4 flex flex-row">
                {
                    images.map(
                        (image,index)=>{
                            return(
                            <img src={images[index]} className={"w-[90px] h-[90px] rounded-lg object-cover "+ ((activeIndex==index)?"border-2 border-black":"")} onClick={
                               ()=>{ setActiveIndex(index)
                                }
                            }/>
                            )

                        }
                    )
                }
            </div>
        </div>
    )
}