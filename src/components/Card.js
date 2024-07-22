import { useState } from "react";
function Card({id , image , info, price , name , btnHandler}){
    const [readMore, setReadMore] = useState(false);
    const discription =  readMore? info : `${info.substring(0,200)}...`;
    function readMoreHandler(){
        setReadMore(!readMore);
    }

    return (
        <div className="w-[400px] h-[max-content] m-[1rem] flex flex-col p-[1rem] rounded-xl items-center shadow-custom">
            <img src = {image} className="w-[380px] aspect-square object-cover"></img>
            <div className="mx-[5px] my-[20px]">
                <div className="font-bold font-poppins">
                    <h4 className="text-[#1faa59] text-xl">₹ {price}</h4>
                    <h4 className="text-[1.5rem]">{name}</h4>
                </div>
                <div className="font-poppins">
                    {discription}
                    <span className="text-[#12b0e8] cursor-pointer" onClick={readMoreHandler}>
                        {readMore? 'Show Less': 'Read More'}
                    </span>
                </div>
            </div>
            <button className="font-bold font-poppins text-[] mt-[18px] cursor-pointer py-[10px] px-[80px] border-[#b4161b] border-[1px] border-[solid] rounded-xl bg-[#b4161b21] hover:bg-red-600 hover:text-white transition-all duration-200" onClick={()=>btnHandler(id)}>
                Not Intrested
            </button>
        </div>
    )
}
export default Card;