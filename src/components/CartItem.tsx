
const CartItem = () => {
  return (
    <div className='flex justify-start items-center gap-6 my-6'>
      <img
        src='src/assets/cart/image-xx59-headphones.jpg'
        alt=''
        className='w-16 rounded-md'
      />
      <div>
        <h4 className='text-xl font-bold'>name</h4>
        <p className='text-black/40'>$ price</p>
      </div>
      <div className='flex justify-center items-center px-4 py-2 bg-gray rounded gap-6 ml-auto'>
        <button className='text-black/40 hover:text-orange'>-</button>
        {/* cart count */}
        3
        <button className='text-black/40 hover:text-orange'>+</button>
      </div>
    </div>
  );
};

export default CartItem;
