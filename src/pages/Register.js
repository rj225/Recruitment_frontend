import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);  

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        c_name: companyName,
        c_email: email,
        password: password
      };
    
     await toast.promise(axios.post(`${process.env.REACT_APP_BASIC_API_URL}/register`, payload),
      {
        pending: 'Registering in...',
        success: "Registered",
        error: 'Registration failed. Email already exist',
      })
      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };
  

  return (
    <div class="h-screen md:flex">
      <div class="relative bg-gradient-to-tr via-green-50 from-cyan-300 to-teal-300 overflow-hidden md:flex w-1/2 justify-center items-center hidden" data-aos="slide-left" data-aos-delay="200">
        <div className='m-3'>
          <h1 class="text-gray-900 font-bold text-4xl font-serif mb-3">Recruitment Solution</h1>
          <h4 class="text-red-700 mt-1 mb-4 font-semibold textlg italic">Transform your hiring process with our cutting-edge platform!</h4>
          <ul class="text-gray-700 list-disc list-inside space-y-1">
            <span class="text-gray-700 mt-1 mb-4 border-b-2 border-red-400">Why register with us?</span>
            <li>Access <span className=' text-red-700'>top-tier </span>talent from around the globe.</li>
            <li>Accelerate your hiring timeline and secure the <span className=' text-red-700'>best candidates</span> faster.</li>
          </ul>
          <div className="absolute -bottom-32 -left-40 lg:w-80 md:w-72 lg:h-80 md:h-72 border-red-400 border-4 rounded-full border-opacity-80 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 lg:w-80 md:w-72 lg:h-80 md:h-72 border-red-600 border-4 rounded-full border-opacity-80 border-t-8"></div>
          <div className="absolute -top-48 -right-0 lg:w-80  md:w-72 md:h-72 lg:h-80 border-red-400 border-4 rounded-full border-opacity-80 border-b-8"></div>
          <div className="absolute -top-28 -right-20 lg:w-80 md:w-72 md:h-72  lg:h-80 border-red-600 border-4 rounded-full border-opacity-80 border-b-8"></div>

        </div>
      </div>
      <div class="flex md:w-1/2 justify-center h-full py-10 items-center bg-white">
        <form class="bg-white p-6 w-4/6 shadow-2xl rounded-lg" onSubmit={handleRegister} data-aos="zoom-in-down" data-aos-delay="600">
          <h1 class="text-red-800 font-bold text-center md:text-3xl sm:text-2xl text-xl mb-7">Welcome Innovator!</h1>
          <div class="flex items-center border-2  border-red-300 sm:py-2 sm:px-3 py-1 px-2 rounded-2xl mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
            </svg>
            <input class="pl-2 outline-none border-none w-full"
              type="text"
              placeholder="Your Company name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)} />
          </div>
          <div class="flex items-center border-2  border-red-300 sm:py-2 sm:px-3 py-1 px-2 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
            <input
              class="pl-2 outline-none w-full border-none"
              type="text"
              placeholder="Your Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div class="flex items-center border-2  border-red-300 sm:py-2 sm:px-3 py-1 px-2 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            <input
              class="pl-2 outline-none w-full border-none"
              type="password"
              placeholder="Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button
            type="submit"
            onClick={handleRegister}
            class="block w-full bg-red-600 mt-4 py-2 rounded-2xl hover:bg-red-100 hover:ring-1 hover:ring-red-600 hover:text-red-700 duration-300 text-white font-semibold mb-2">Register</button>
          <div className="flex justify-between mt-4">
            <Link to="/login" className="sm:text-sm text-xs ml-2 text-black scale-105 hover:text-red-700 font-semibold cursor-pointer hover:underline duration-300 transition-all">Already have an account?</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
