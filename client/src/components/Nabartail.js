import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DropDown from './DropDown';
import logo from '../Assets/logo3.png';

window.onload = function () {
  const btn = document.querySelector('button.mobile-menu-button');
  const menu = document.querySelector('.mobile-menu');
  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });
};

function Navbartail() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const dispatch = useDispatch();
  return (
    <div className='w-full'>
      <nav className=' bg-gradient-to-r from-pink-300 via-yellow-300 to-pink-400 '>
        <div className='mx-auto '>
          <div className='flex justify-between'>
            <div className='flex space-x-32 grid-flow-row top pt-1'>
              <img
                href='/'
                src={logo}
                className='object-contain w-52 mt-0 object-left-top'
              />

              {/* logo */}
              <div className='mr-4'>
                <a
                  href='#'
                  className='flex items-center py-3 px-3 text-white'
                ></a>
              </div>
              {/* primary nav */}
              <div className=' hidden md:flex items-center space-x-3 '>
                <a
                  href='/'
                  className=' py-1 px-3 text-indigo-600 hover:underline hover:text-indigo-700'
                >
                  Home
                </a>
                <a
                  href='about'
                  className=' py-3 text-gray-600 hover:underline hover:text-gray-700'
                >
                  About us
                </a>
                {/* <a
                  href='shippingInfo'
                  className=' py-3 text-gray-600 hover:underline hover:text-gray-700'
                >
                  Shipping Info
                </a> */}

                <a
                  href='contact'
                  className=' py-3 text-gray-600 hover:underline hover:text-gray-700'
                >
                  Contact
                </a>
              </div>
            </div>
            {/* Secondary nav */}

            <div className='hidden md:flex items-center space-x-1 '>
              {currentUser ? (
                <DropDown />
              ) : (
                <a
                  href='login'
                  className=' py-5 px-3 text-gray-600 hover:underline hover:text-gray-700'
                >
                  Login
                </a>
              )}

              <a
                href='register'
                className=' bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded transition duration-300'
              >
                SignUp
              </a>
            </div>
            {/* mobile button goes here */}
            <div className='md:hidden flex items-center'>
              <button className='mobile-menu-button inline-block md:hidden w-8 h-8  text-gray-600 p-1'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div className='mobile-menu hidden  flex-col md:flex-row md:space-x-6 font-semibold w-full md:w-auto bg-gradient-to-r from-pink-300 via-yellow-300 to-pink-400 md:bg-transparent p-6 md:p-0 '>
          <a href='/' className='block py-1 text-indigo-600 hover:underline'>
            Home
          </a>
          <a href='/about' className='block py-1 text-gray-600 hover:underline'>
            About us
          </a>
          {/* <a
            href='/shippingInfo'
            className='block py-1 text-gray-600 hover:underline'
          >
            Shipping Info
          </a> */}
          {/* <a href='#' className='block py-1 text-gray-600 hover:underline'>
            Info
          </a> */}
          <a
            href='/contact'
            className='block py-1 text-gray-600 hover:underline'
          >
            Contact
          </a>
          <a href='/login' className='block py-1 text-gray-600 hover:underline'>
            Login
          </a>
          <a
            href='/register'
            className=' py-2 pt-1 px-8 bg-yellow-400 text-yellow-900 rounded shadow hover:underline transition duration-300'
          >
            SignUp
          </a>
        </div>
      </nav>
    </div>
  );
}

export default Navbartail;
