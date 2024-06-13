import React from 'react';

function Testimonial() {
  return (
    <section className="mt-20 py-10">
      <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-red-900 text-center font-bold mb-4">What Our Clients Say</h3>
      <div className="flex flex-wrap justify-center px-4 items-center gap-8">
        <div className="w-full sm:w-auto max-w-md p-4 bg-gray-100 rounded-lg shadow-lg" data-aos="zoom-in-up">
          <p className="text-lg text-gray-700 mb-4">
            "This recruitment solution has transformed our hiring process. We have significantly reduced our time-to-hire and improved the quality of our candidates. Highly recommend!"
          </p>
          <p className="font-bold text-sm text-red-600">- Sarah Johnson, HR Manager at TechCorp</p>
        </div>
        <div className="w-full sm:w-auto max-w-md p-4 bg-gray-100 rounded-lg shadow-lg" data-aos="zoom-in-up">
          <p className="text-lg text-gray-700 mb-4">
            "The centralized candidate management and ATS features have streamlined our workflows and enhanced our team collaboration. A game-changer for our HR department."
          </p>
          <p className="font-bold text-sm text-red-600">- Mark Williams, Talent Acquisition Specialist at InnovateInc</p>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
