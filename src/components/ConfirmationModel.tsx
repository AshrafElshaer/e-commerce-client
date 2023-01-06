import { createPortal } from "react-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TCartItemState } from "../features/cartSlice";
import { formatPrice } from "../lib/formating";
import Button from "./Button";
import CartItem from "./CartItem";
type Props = {
  closeModel: () => void;
  cartItems: TCartItemState[];
  grandTotal: string;
};

const ConfirmationModel = ({ closeModel, cartItems, grandTotal }: Props) => {
  return createPortal(
    <div className='absolute w-full h-full grid place-items-center top-0 left-0 p-4'>
      <div className='bg-white rounded-lg z-10 p-4  min-w-96 sm:w-[30rem] md:w-[34rem]  flex flex-col gap-6'>
        <AiFillCheckCircle className='text-orange text-5xl sm:text-7xl' />
        <h3 className='text-2xl'>THANK YOU FOR YOUR ORDER</h3>
        <p className='text-black/70'>
          You will receive an email confirmation shortly.
        </p>

        <div className='bg-gray rounded-lg flex'>
          <div className='flex-[2]'>
            <div className='flex justify-start items-center gap-2 my-6 p-4 border-b-2'>
              <img
                src={cartItems[0].image}
                alt={cartItems[0].name}
                className='w-16 rounded-md'
              />
              <div>
                <h4 className=' font-bold'>{cartItems[0].name}</h4>
                <p className='text-black/40 text-sm sm:text-lg'>
                  {formatPrice(cartItems[0].price)}
                </p>
              </div>
              <span className='ml-auto text-black/50'>
                X {cartItems[0].quantity}
              </span>
            </div>
            <p className='text-center mb-4 text-black/50'>
              {
                cartItems.length > 1 ? ` and ${cartItems.length - 1} other item(s)` : null
              }
              
            </p>
          </div>
          <div className='bg-black p-4 rounded-r-lg flex-1 grid place-content-center sm:text-lg'>
            <h3 className='text-gray/60 mb-4 '>GRAND TOTAL</h3>
            <p className='text-white font-bold '>{grandTotal}</p>
          </div>
        </div>
        <Link to='/'>
          <Button onClick={closeModel} className='w-full'>
            back to home
          </Button>
        </Link>
      </div>
      <div
        onClick={closeModel}
        className='absolute w-full h-full top-0 left-0 bg-zinc-900/40'></div>
    </div>,
    document.getElementById("model-root")!
  );
};

export default ConfirmationModel;
