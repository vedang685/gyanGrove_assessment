import { CarouselSize } from '@/components/RecommendedCard';
import UpcomingEvents from '@/components/UpcomingCards';
import Image from 'next/image';
import React from 'react';

function Page() {
  return (
    <>
      <div className="relative w-full h-[80vh]">
        <div className="">
          <Image 
            src="/Front_screen.svg" 
            fill 
            priority
            alt="Your Image" 
            style={{objectFit: 'cover'}}
          />
        </div>
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 flex items-center justify-center">
          </div>
          <div className='absolute top-[20%] md:top-[40%] lg:top-[40%] w-full flex flex-col items-center justify-center'>
            <p className=" text-white text-3xl md:text-3xl lg:text-5xl font-bold text-center">Discover Exciting Events Happening</p>
            <p className=" text-white text-3xl md:text-3xl lg:text-5xl font-bold text-center"> Near You - Stay Tuned for Updates!</p>
            <p className="w-[80%] mt-4 text-white text-lg lg:text-xl md:text-lg text-center"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit facere at ullam dolorem, quaerat blanditiis repellendus officiis dignissimos sed, nostrum adipisci, consequatur error perferendis molestias dolore? Odit vel inventore quis.</p>
          </div>
      </div>
      <div className='h-20 md:h-28 lg:h-28 relative w-full'>
        <div className='w-full flex flex-col items-center justify-center absolute text-white top-[-80%]'>
          <span className='hidden md:block lg:block xl:block'>Recommended Movies</span>
          <CarouselSize/>
          <div className='mt-8 text-black font-bold text-lg flex flex-col items-center justify-center'>
            Upcoming Events
            <UpcomingEvents/>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
