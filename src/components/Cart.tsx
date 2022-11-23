import { FC } from "react";
import { Button, CartItem } from "../components";

type TCartProps = {
  toggleCart: () => void;
};

const Cart: FC<TCartProps> = ({ toggleCart }) => {
  return (
    <>
      <div className='container relative'>
        <div
          role='cart'
          className='w-96 bg-white z-10 absolute ml-auto top-4 right-4 text-black p-6 rounded  '>
          <div role='cartHeader' className='w-full flex justify-between'>
            <h4 className='font-bold '>CART ( 2 )</h4>
            <p className='cursor-pointer text-black/40 underline underline-offset-8 hover:text-orange transition-all'>
              Remove all
            </p>
          </div>
          <div className='mb-6 h-64 overflow-y-scroll scrollbar-hide'>
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />
          </div>
          <div role='cartTotal' className='w-full flex justify-between mb-4'>
            <h4 className='text-black/40'>TOTAL</h4>
            <p className='font-bold text-lg'>$ 5,396</p>
          </div>
          <Button buttonType='primary'>checkout</Button>
        </div>
      </div>
      <div
        className='w-full absolute top-0 left-0 h-[100vh] bg-zinc-900/40 z-0'
        onClick={toggleCart}></div>
    </>
  );
};

export default Cart;
