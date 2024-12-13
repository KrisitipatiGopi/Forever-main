
import { useDispatch, useSelector } from "react-redux";
import { assets } from "../Utils/assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
import { addItems, decreaseQuantity, removeItem } from "../Utils/cartSLice";
import CartTotal from "./CartTotal";



const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const goForShopping = () => {
    navigate("/collection")
  }

  const handleRemoveItem = (each) => {
    dispatch(removeItem(each))
  }

  const handleIncreaseItem = (each) => {
    dispatch(addItems(each))
  }

  const handleDecreaseItem = (each) => {
    dispatch(decreaseQuantity(each))
  }

  if(cartItems.length === 0) return(
  <div className="flex flex-col justify-center items-center h-[60vh]">
    <div className="flex flex-col justify-center items-center gap-3">
      <p className="text-xl">No Items in your cart Add items to cart?</p>
      <button className="bg-black text-white p-2 rounded" onClick={goForShopping}>Shop Items</button>
    </div>
  </div>)

  return (
    <div className="mt-10 mr-10">
      <div className="flex flex-col gap-5">
        {cartItems.map((each, index) => (
          <div key={index} className="bg-white p-4 rounded-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
              <div className="flex sm:w-1/2 items-center">
                <img
                  src={each.image[0]}
                  alt={each.name}
                  className="w-20 object-cover rounded-md"
                />
                <div className="flex flex-col gap-2 ml-4">
                  <p className="text-lg font-semibold text-gray-800">{each.name}</p>
                  <div className="flex items-center gap-2">
                    <p className="text-xl font-semibold text-gray-600">${each.price}</p>
                    <p className="border border-black p-2 w-10 text-center ml-6 text-sm">{each.selectedSize}</p>
                  </div>
                </div>
              </div>
              <div className="flex sm:w-auto w-200px p-2 gap-3 bg-black text-white rounded-md mt-4 sm:mt-0">
                <button className="text-lg" onClick={()=> handleDecreaseItem(each)}>-</button>
                <p className="text-lg">{each.quantity}</p>
                <button className="text-lg" onClick={()=> handleIncreaseItem(each)}>+</button>
              </div>
              <img
                src={assets.bin_icon}
                alt="delete"
                className="w-5 h-5 cursor-pointer hover:text-red-600 transition mt-4 sm:mt-0"
                onClick={()=>handleRemoveItem(each)}
              />
            </div>
            <hr className="mt-2 border-t border-gray-300" />
          </div>
        ))}
      </div>
      <CartTotal />
    </div>
  );
};

export default Cart;
