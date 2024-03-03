import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount(cart.reduce((acc, curr) => acc+curr.price, 0));
  }, [cart])

  return (
    <div className='w-[1200px] flex mx-auto'>
      {
        cart.length > 0 ? 
        (<div className="w-[1200px] flex mt-[70px] justify-evenly">

          <div>
            {
              cart.map((item,index) => {
                return <CartItem key={item.id} item={item} itemIndex={index}/>
              })
            }
          </div>
          
          <div className="flex flex-col justify-between items-start">
            <div>
              <div className="text-[15px] font-extrabold text-green-700 uppercase">Your Cart</div>
              <div className="text-[35px] font-extrabold text-green-800 uppercase">Summary</div>
              <p className="text-[20px] font-semibold mt-4">
                <span>Total Items: {cart.length}</span>
              </p>
            </div>
            <div className="mb-[100px]">
              <p className="text-[20px] font-semibold">
                <span className="font-semibold opacity-75">Total Amount: </span>${totalAmount}
              </p>
              <button className="text-lg text-white bg-green-700 mt-5 px-10 py-5 rounded-md">
                CheckOut Now
              </button>
            </div>
          </div>

        </div>) : 
        (<div className="w-[80vw] h-[80vh] flex flex-col justify-center items-center">
          <h1 className="font-extrabold text-xl mb-5">
            Cart is Empty
          </h1>
          <Link to={"/"}>
            <button className="text-xl text-white bg-green-700 px-8 py-5 rounded-md">
              Shop Now
            </button>
          </Link>
        </div>)
      }
    </div>
  );
};

export default Cart;
