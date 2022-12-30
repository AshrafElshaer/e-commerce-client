import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { Button, CartItem } from ".";
import {
  removeCartItems,
  selectCart,
  selectCartCount,
  selectCartTotal,
} from "../features/cartSlice";
import { formatPrice } from "../lib/formating";

type TCartProps = {
  toggleCart: () => void;
};

const Cart = ({ toggleCart }: TCartProps) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCart);
  const cartCount = useAppSelector(selectCartCount);
  const cartTotal = useAppSelector(selectCartTotal);

  const removeCart = () => {
    dispatch(removeCartItems());
  };

  return (
    <>
      <div className='container relative'>
        <div
          role='cart'
          className='w-96 bg-white absolute ml-auto top-4 right-4 text-black p-6 rounded z-30  '>
          <div role='cartHeader' className='w-full flex justify-between'>
            <h4 className='font-bold '>CART ( {cartCount} )</h4>
            <p
              className='cursor-pointer text-black/40 underline underline-offset-8 hover:text-orange transition-all'
              onClick={removeCart}>
              Remove all
            </p>
          </div>
          <div className='mb-6 h-64 overflow-y-scroll scrollbar-hide'>
            {cartItems.map((item) => (
              <CartItem key={item._id} item={item} />
            ))}
          </div>
          <div role='cartTotal' className='w-full flex justify-between mb-4'>
            <h4 className='text-black/40'>TOTAL</h4>
            <p className='font-bold text-lg'>{formatPrice(cartTotal)}</p>
          </div>
          <Link to='checkout'>
            <Button
              className='w-full'
              buttonType='primary'
              onClick={toggleCart}>
              checkout
            </Button>
          </Link>
        </div>
      </div>
      <div
        className='w-full absolute top-0 left-0 h-screen bg-zinc-900/40 z-10 '
        onClick={toggleCart}></div>
    </>
  );
};

export default Cart;
