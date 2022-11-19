import React from "react";

type TCartProps = {
  toggleCart: () => void;
};

const Cart = ({ toggleCart }: TCartProps) => {
  return (
    <div className='absolute w-full top-[3.75rem] left-0 px-4'>
      <div
        role='cart'
        className='max-w-sm bg-white z-10 relative top-6 ml-auto text-black p-4 rounded'>
        <div role='cartHeader' className='w-full flex justify-between'>
          <h3>CART ( 2 )</h3>
          <p className='cursor-pointer text-black/40 underline'>Remove all</p>
        </div>
        <div>items</div>
        <div role='cartHeader' className='w-full flex justify-between'>
          <h3 className='text-black/40'>TOTAL</h3>
          <p className='font-bold text-lg'>$ 5,396</p>
        </div>
        <button>Checkout</button>
      </div>
      <div
        className='w-full absolute top-0 left-0 h-[92vh] bg-zinc-900/40'
        onClick={toggleCart}></div>
    </div>
  );
};

export default Cart;
