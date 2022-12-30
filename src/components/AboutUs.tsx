import { CategoryNavigation } from ".";

const AboutUs = () => {
  return (
    <>
      <CategoryNavigation />
      <section className='flex flex-col gap-8 md:flex-row-reverse text-center lg:text-left my-24 container'>
        <img
          src='/src/assets/shared/mobile/image-best-gear.jpg'
          alt='best-gear'
          className='rounded-lg sm:hidden'
        />
        <img
          src='/src/assets/shared/tablet/image-best-gear.jpg'
          alt='best-gear'
          className='rounded-lg hidden sm:block md:hidden'
        />
        <img
          src='/src/assets/shared/desktop/image-best-gear.jpg'
          alt='best-gear'
          className='rounded-lg hidden w-1/2 md:block'
        />
        <div className='flex flex-col justify-center md:w-2/5 lg:mr-auto'>
          <h2 className='text-4xl mb-8 uppercase'>
            Bringing you the <span className='text-orange'> best </span> audio
            gear
          </h2>
          <p className='text-black/50'>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
