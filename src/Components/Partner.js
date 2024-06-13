import React from 'react';
import './Partner.css'
const Partner = () => {
  return (
    <section className="mt-20 bg-white py-10 w-screen">
      <div className="container mx-auto px-4">
        <h3 className="md:text-3xl sm:text-2xl text-xl text-red-900 text-center font-bold mb-4">Our Trusted Partners</h3>
        <div className="overflow-hidden w-full">
          <div className="flex justify-center h-full items-center gap-8 md:gap-16 lg:gap-20 xl:gap-24 w-full animate-marquee">
            <div className="flex-shrink-0" data-aos="flip-left">
              <img src="path/to/company-logo1.png" alt="Company 1 Logo" className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0" data-aos="flip-right">
              <img src="path/to/company-logo2.png" alt="Company 2 Logo" className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0" data-aos="flip-left">
              <img src="path/to/company-logo3.png" alt="Company 3 Logo" className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0" data-aos="flip-right">
              <img src="path/to/company-logo4.png" alt="Company 4 Logo" className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0" data-aos="flip-left">
              <img src="path/to/company-logo5.png" alt="Company 5 Logo" className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto object-contain" />
            </div>
            <div className="flex-shrink-0" data-aos="flip-right">
              <img src="path/to/company-logo6.png" alt="Company 6 Logo" className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;

