import React from 'react';
import { Link } from 'react-router-dom';
import { useCompanyContext } from './CompanyContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GiExitDoor } from "react-icons/gi";

function Navbar() {

  const { loggedInCompany, logout } = useCompanyContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await toast.promise(
        axios.post(`${process.env.REACT_APP_BASIC_API_URL}/logout`,null, { withCredentials: true }),
        {
          pending: 'Logging out...',
          error: 'You are not logged in yet.',
        }
      );

      if (response) {
        toast.success(`See you again`)
        navigate("/");
        logout();
      }


    } catch (err) {
      console.error(err);
    }
  }


  return (
    <header className="w-full bg-gradient-to-b from-red-600 to-red-800 sm:bg-opacity-90 bg-opacity-95 text-white p-4 sm:sticky static sm:top-0 z-50">
      <div className="container mx-auto flex flex-wrap sm:flex-row flex-col items-center justify-between sm:justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="sm:text-3xl font-serif text-xl font-bold">Recruitment Solution</h1>
        </Link>
        <nav className="flex items-center sm:mt-0 mt-2">
          {loggedInCompany ? (
            <div className='md:flex-row flex-col flex  items-center'>
              <div className=' bg-red-950 font-serif bg-opacity-15 shadow-xl rounded-xl md:p-4 sm:p-3 p-2'>
              <div>Welcome <span className=' text-green-100 font-semibold'>{loggedInCompany.c_name}</span></div>
              {/* <div>{loggedInCompany.c_email}</div> */}
              </div>
              <button
                onClick={handleLogout}
                className="px-1 py-1 lg:px-2 h-full lg:py-3 mx-10 flex justify-center text-lg font-serif font-semibold items-center sm:scale-100 scale-90 hover:scale-105 hover:text-red-200 text-violet-200 duration-300"
              >
                Logout &nbsp; <GiExitDoor className='text-4xl sm:my-0 my-2'/>
              </button>
            </div>) : (
            <>
              <Link to="/login">
                <button className="px-4 font-serif font-semibold text-green-100 md:text-lg text-base lg:px-5 py-2 lg:py-3 mr-4 lg:mr-2 hover:underline sm:scale-100 scale-90 hover:scale-110 hover:text-red-900 rounded-xl duration-300">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 lg:px-5 py-2 shadow-xl lg:py-3 sm:scale-100 scale-90 hover:scale-110  hover:ring-red-400 duration-300 hover:bg-opacity-20 font-semibold font-serif bg-slate-900 bg-opacity-30 rounded-xl">
                  Register
                </button>
              </Link>
            </>
          )
          }
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
