import { useAppDispatch } from "../app/hooks";
import {
  incrementQuantity,
  TCartItemState,
  decrementQuantity,
} from "../features/cart/cartSlice";
import { formatPrice } from "../lib/formating";

const CartItem = ({ item }: { item: TCartItemState }) => {
  const dispatch = useAppDispatch();
  const { name, image, price, quantity, _id } = item;

  const addQuantity = () => {
    dispatch(incrementQuantity(_id));
  };
  const removeQuantity = () => {
    dispatch(decrementQuantity(_id));
  };
  return (
    <div className='flex justify-start items-center gap-6 my-6'>
      <img src={image} alt={name} className='w-16 rounded-md' />
      <div>
        <h4 className='text-xl font-bold'>{name}</h4>
        <p className='text-black/40'>$ {formatPrice(price)}</p>
      </div>
      <div className='flex justify-center items-center px-4 py-2 bg-gray rounded gap-6 ml-auto'>
        <button
          className='text-black/40 hover:text-orange'
          onClick={removeQuantity}>
          -
        </button>
        {quantity}
        <button
          className='text-black/40 hover:text-orange'
          onClick={addQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
