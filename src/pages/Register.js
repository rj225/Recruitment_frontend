import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/users/register', { email, password, companyName });
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div class="h-screen md:flex">
    <div class="relative bg-gradient-to-tr via-orange-100 from-cyan-300 to-teal-300 overflow-hidden md:flex w-1/2 justify-around items-center hidden">
      <div>
        <h1 class="text-gray-900 font-bold text-4xl font-serif mb-3">Recruitment Solution</h1>
        <h4 class="text-red-700 mt-1 mb-4 font-semibold textlg italic">Transform your hiring process with our cutting-edge platform!</h4>
        <ul class="text-gray-700 list-disc list-inside space-y-1">
          <span class="text-gray-700 mt-1 mb-4 border-b-2 border-red-400">Why register with us?</span>
          <li>Access <span className=' text-red-700'>top-tier </span>talent from around the globe.</li>
          <li>Accelerate your hiring timeline and secure the <span className=' text-red-700'>best candidates</span> faster.</li>
        </ul>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>

      </div>
    </div>
    <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form class="bg-white w-4/6" onSubmit={handleRegister}>
      <h1 class="text-red-800 font-bold text-3xl mb-7">Welcome Innovator!</h1>
        <div class="flex items-center border-2  border-red-300 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
          </svg>
          <input class="pl-2 outline-none border-none"
            type="text"
            placeholder="Your Company name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)} />
        </div>
        <div class="flex items-center border-2  border-red-300 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <input
            class="pl-2 outline-none border-none"
            type="text"
            placeholder="Your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="flex items-center border-2  border-red-300 py-2 px-3 rounded-2xl mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
          </svg>
          <input
            class="pl-2 outline-none border-none"
            type="text"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button 
        type="submit"
        onClick={handleRegister} 
        class="block w-full bg-red-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Register</button>
      </form>
    </div>
  </div>
  );
};

export default Register;
