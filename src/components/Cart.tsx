import React from "react";
import Button from "./Button";

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
          <h4 className='font-bold '>CART ( 2 )</h4>
          <p className='cursor-pointer text-black/40 underline underline-offset-8 hover:text-orange transition-all'>
            Remove all
          </p>
        </div>
        <div>items</div>
        <div role='cartTotal' className='w-full flex justify-between mb-4'>
          <h4 className='text-black/40'>TOTAL</h4>
          <p className='font-bold text-lg'>$ 5,396</p>
        </div>
        <Button buttonType='primary'>
          checkout
        </Button>
      </div>
      <div
        className='w-full absolute top-0 left-0 h-[92vh] bg-zinc-900/40'
        onClick={toggleCart}></div>
    </div>
  );
};

export default Cart;
