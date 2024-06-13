import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../Components/App.css'
import AOS from 'aos';
import { useEffect } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen flex">
      <div className="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center" data-aos="slide-left" data-aos-delay="200">
        <div className="bg-black opacity-20 inset-0 z-0"></div>
        <div className="w-full mx-auto px-10 flex-col items-center space-y-6">
          <h1 className="text-white font-bold text-4xl font-serif">Discover the <span className=' text-red-400'>Future</span> of Hiring</h1>
          <h4 className="text-red-200 mt-4 text-lg">
            Elevate your recruitment process with our advanced digital solution designed for MNCs.
          </h4>
          <ul className="list-disc list-inside text-white mt-1 space-y-2 text-base">
            <span className="text-white text-base border-b-2 border-red-300 ">
              Why Login Here:
            </span>
            <li>Seamless and efficient hiring process</li>
            <li>Access to a vast pool of top-tier talent</li>
            <li>Innovative tools for smarter recruitment</li>
            <li>Dedicated support and personalized solutions</li>
          </ul>
        </div>

      </div>
      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
        <div className="w-full px-8 md:px-32 lg:px-24">
          <form className="bg-white rounded-md shadow-2xl p-5" data-aos="zoom-in-down" data-aos-delay="600">
            <h1 className="text-red-500 font-serif font-normal md:text-xl sm:text-lg text-base text-center mb-1">Welcome Back!</h1>
            <p className="font-bold md:text-2xl sm:text-xl text-lg text-center text-gray-800 mb-8">Revolutionizing Your Hiring Experience</p>
            <div className="flex items-center border-2 border-red-300 mb-8 sm:py-2 sm:px-3 py-1 px-2  rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              <input
                id="email"
                className="pl-2 w-full outline-none border-none"
                type="email" name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="flex items-center border-2 border-red-300 mb-12 sm:py-2 sm:px-3 py-1 px-2 rounded-2xl">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <input
                className="pl-2 w-full outline-none border-none"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button 
            onClick={handleLogin}
            type="submit" className="block w-full bg-red-600 mt-5 py-2 rounded-2xl hover:bg-red-200 hover:text-red-800 hover:ring-1 hover:ring-red-600 transition-all duration-500 text-white font-semibold mb-2">Login</button>
            <div className="flex items-center text-wrap justify-between mt-4">
              <Link to="/" className="sm:text-sm text-xs ml-2 cursor-pointer hover:underline duration-500 transition-all">Forgot Password?</Link>
              <Link to="/register" className="sm:text-sm text-xs ml-2 text-red-600 hover:text-red-800 font-semibold cursor-pointer hover:underline duration-500 transition-all">Don't have an account yet?</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
