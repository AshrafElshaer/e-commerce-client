import { Button } from ".";
const Header = () => {
  return (
    <div className='w-full bg-[#121212] lg:bg-hero-desktop lg:bg-center mb-6'>
      <div className='container px-0'>
        <header className='text-white text-center lg:text-left py-44 h-[729px] bg-hero-mobile bg-no-repeat bg-100% bg-center md:bg-hero-tablet lg:bg-none'>
          <div className='flex flex-col gap-10 w-96 mx-auto lg:mx-0 px-4'>
            <span className='text-gray/40 tracking-[1rem] text-sm  '>
              NEW PRODUCT
            </span>
            <h1 className=' text-4xl md:text-5xl '>XX99 Mark II HeadphoneS</h1>
            <p className='text-gray/70'>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button className='w-44 lg:mx-0'>SEE PRODUCT</Button>
          </div>
          <div role='backgroundImg'></div>
        </header>
      </div>
    </div>
  );
};

export default Header;
