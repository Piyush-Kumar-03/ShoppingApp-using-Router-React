import React from 'react';
import toast from "react-hot-toast";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();
  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed");
  }
  return (
    <div>
      <div className='flex border-b-2 border-slate-400 mb-10 gap-10 pb-7 max-w-[480px]'>

        <div className="h-[180px] w-[210px]">
          <img src={item.image} className="h-full w-full"/>
        </div>

        <div className='flex flex-col gap-4'>
          <h1 className="text-gray-700 font-semibold text-lg mt-1">
            {item.title}
          </h1>
          <h1 className="text-gray-400 font-normal text-sm text-left ">
            {item.description.split(" ").slice(0,15).join(" ")+"..."}
          </h1>

          <div className='flex justify-between pr-5'>
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div onClick={removeFromCart} className='cursor-pointer bg-red-300 flex items-center justify-center
          rounded-full font-semibold py-3 px-3 text-[15px]'>
            <MdDeleteForever className='text-red-700'/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CartItem;
