import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

function About() {
  return (
    <div className='min-h-screen flex items-center justify-center '>
      {/* CARD */}
      <div className=' w-60 bg-white rounded shadow-2xl'>
        <div className='h-40 w-full bg-gray-200 rounded-tr rounded-tl animate-pulse'></div>
        <div className='p-5'>
          <div className='h-10 w-full  bg-gray-200 animate-pulse rounded-sm mb-4'></div>
        </div>
      </div>
      
    </div>
  );
}

export default About;
