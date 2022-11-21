import { FC } from "react";
import Button from "./Button";
import CartItem from "./CartItem";

type TCartProps = {
  toggleCart: () => void;
};

const Cart: FC<TCartProps> = ({ toggleCart }) => {
  return (
    <div className='absolute w-full top-[3.75rem] left-0 px-4'>
      <div
        role='cart'
        className='max-w-sm bg-white z-10 relative top-6 ml-auto text-black p-6 rounded  xl:right-20'>
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
      <div
        className='w-full absolute top-0 left-0 h-[92vh] bg-zinc-900/40'
        onClick={toggleCart}></div>
    </div>
  );
};

export default Cart;
