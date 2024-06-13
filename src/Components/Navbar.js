import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="w-full bg-red-600 sm:bg-opacity-90 bg-opacity-95 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap sm:flex-row flex-col items-center justify-between sm:justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="sm:text-2xl text-lg font-bold">Recruitment Solution</h1>
        </Link>
        <nav className="flex items-center sm:mt-0 mt-2">
          <Link to="/login">
            <button className="px-4 lg:px-5 py-2 lg:py-3 mr-4 lg:mr-2 hover:underline sm:scale-100 scale-90 hover:scale-110 hover:text-red-900 rounded-xl duration-300">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="px-4 lg:px-5 py-2 lg:py-3 sm:scale-100 scale-90 hover:scale-110 ring-1 ring-red-600 hover:ring-red-400 duration-300 hover:bg-opacity-50 bg-slate-900 bg-opacity-30 rounded-xl">
              Register
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
