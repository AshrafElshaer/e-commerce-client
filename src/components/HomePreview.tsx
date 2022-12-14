import { Link } from "react-router-dom";
import Button from "./Button";

const HomePreview = () => {
  return (
    <section role='show case' className='flex flex-col gap-4 my-12'>
      <div className='bg-orange flex flex-col items-center gap-32 text-center p-16 rounded-md  sm:flex-row sm:justify-around sm:text-left overflow-hidden lg:py-24'>
        <div
          className='relative before:content-[""] before:w-[250%] before:-translate-x-1/2 before:-translate-y-1/2  before:aspect-square before:border before:border-white/50 before:absolute before:top-[50%] before:left-[50%] before:rounded-full  before:z-0
            
            after:content-[""] after:w-[200%] after:-translate-x-1/2 after:-translate-y-1/2  after:aspect-square after:border  after:border-white/50 after:absolute after:top-[50%] after:left-[50%] after:rounded-full after:z-0
            '>
          <img
            src='https://nookeauq.sirv.com/Images/image-speaker-zx9.png'
            alt='speaker-zx9'
            className='w-48 sm:scale-[1.65] relative top-10  z-10'
          />
        </div>
        <div className='w-60 text-white'>
          <h2 className=' text-4xl mb-6'>ZX9 SPEAKER</h2>
          <p className='mb-6 text-sm text-white/70'>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link to='/speakers/63741abf0490cb9b435c6a10'>
            <Button className='sm:mx-0' buttonType='black'>
              See Product
            </Button>
          </Link>
        </div>
      </div>
      <div className='w-full h-80 rounded-md overflow-hidden relative flex flex-row-reverse text-center'>
        <img
          src='https://nookeauq.sirv.com/Images/image-speaker-zx7.jpg'
          alt='speaker-zx7'
          className='w-full sm:hidden relative right-0'
        />
        <img
          src='https://nookeauq.sirv.com/Images/tablet-image-speaker-zx7.jpg'
          alt='speaker-zx7'
          className='w-full hidden sm:block lg:hidden relative right-0'
        />
        <img
          src='https://nookeauq.sirv.com/Images/dektop-image-speaker-zx7.jpg'
          alt='speaker-zx7'
          className='w-full hidden lg:block relative right-0'
        />

        <div className='w-60 h-20 mr-auto absolute top-1/2 left-1/3 sm:left-1/4 -translate-x-1/2 -translate-y-1/2 '>
          <h2 className='text-2xl sm:text-3xl mb-4 font-bold'>ZX7 SPEAKER</h2>
          <Link to='/speakers/63741abf0490cb9b435c6a17'>
            <Button buttonType='outline'>See Product</Button>
          </Link>
        </div>
      </div>
      <div className='flex flex-col gap-4 sm:flex-row sm:h-80'>
        <img
          src='https://nookeauq.sirv.com/Images/image-earphones-yx1.jpg'
          alt='earphones-yx1'
          className='flex-1 w-full rounded-lg'
        />
        <div className='flex-1 grid place-content-center bg-gray py-24 rounded-lg'>
          <h2 className='text-2xl sm:text-3xl mb-4 font-bold'>YX1 EARPHONES</h2>
          <Link to='/earphones/63741abf0490cb9b435c69f5'>
            <Button buttonType='outline'>See Product</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePreview;
