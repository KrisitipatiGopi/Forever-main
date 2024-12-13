import React from 'react'
import { useSelector } from 'react-redux';

const CartTotal = () => {
    const totalPrice = useSelector((store) => store.cart.price);
    console.log(totalPrice);
    
    return (
        <div className='flex justify-end mt-8 px-4'>
            <div className='w-full sm:w-1/3 p-4 border border-gray-300 rounded-lg shadow-lg bg-white'>
                <h1 className='text-xl font-semibold text-gray-800 mb-4'>Cart Totals</h1>
                <div className='flex justify-between items-center mb-2'>
                    <p className='text-gray-700'>Subtotal:</p>
                    <p className='text-gray-900 font-semibold'>${totalPrice}</p>
                </div>
                <div className='flex justify-between items-center mb-2'>
                    <p className='text-gray-700'>Shipping Fee:</p>
                    <p className='text-gray-900 font-semibold'>$10</p>
                </div>
                <hr className='my-4 border-t border-gray-300' />
                <div className='flex justify-between items-center'>
                    <p className='text-lg font-bold text-gray-800'>Total:</p>
                    <p className='text-lg font-bold text-gray-900'>${totalPrice + 10}</p>
                </div>
            </div>
        </div>
    )
}

export default CartTotal;
