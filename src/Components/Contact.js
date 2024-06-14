import React from 'react';

function Contact() {
  return (
    <section className="mt-20 w-full bg-gray-50 py-10 mb-10">
      <h3 className="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-red-900 text-center font-bold mb-6">Get in Touch</h3>
      <div className="flex justify-center items-center px-4 sm:px-6 lg:px-8">
        <form className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-lg" data-aos="flip-left">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
            <input className=" shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
            <input className=" shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
            <textarea className=" shadow-md appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="4" placeholder="Your Message"></textarea>
          </div>
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:ring-opacity-50 transition duration-300">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
