import React from 'react';
import './Partner.css'
import netflix from '../pages/asset/netflix.png'
import amazon from '../pages/asset/amazon.png'
import face from '../pages/asset/face.png'
import google from '../pages/asset/google.png'
import micro from '../pages/asset/micro.png'
import x from '../pages/asset/twitter.png'

const Partner = () => {
  return (
    <section className="mt-20 bg-white py-10 w-screen">
      <div className="container mx-auto px-4">
        <h3 className="md:text-3xl sm:text-2xl text-xl text-red-900 text-center font-bold mb-4">Our Trusted Partners</h3>
        <div className="overflow-hidden w-full">
          <div className="flex justify-center h-full items-center gap-8 md:gap-16 lg:gap-20 xl:gap-24 w-full animate-marquee">
            <div className="flex-shrink-0" data-aos="flip-left">
              <img src={google} alt="Company 1 Logo" className="h-6 sm:h-8 lg:h-12 xl:h-16 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0" data-aos="flip-right">
              <img src={netflix} alt="Company 2 Logo" className="h-6 sm:h-8 lg:h-12 xl:h-16 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0" data-aos="flip-left">
              <img src={x} alt="Company 3 Logo" className="h-6 sm:h-8 lg:h-12 xl:h-16 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0" data-aos="flip-right">
              <img src={micro} alt="Company 4 Logo" className="h-6 sm:h-8 lg:h-12 xl:h-16 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0" data-aos="flip-left">
              <img src={face} alt="Company 5 Logo" className="h-6 sm:h-8 lg:h-12 xl:h-16 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0" data-aos="flip-right">
              <img src={amazon} alt="Company 6 Logo" className="h-6 sm:h-8 lg:h-12 xl:h-16 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;

