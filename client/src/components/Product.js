import React from 'react';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <div className='border border-black flex '>
      <div>
        <div className=''>
          <div className='container'>
            <Link to={`product/${product._id}`}>
              <img
                src={product.image}
                alt=''
                className='object-contain h-48 w-full sm:h-16 lg:h-48'
              />
              <div className='px-6 py-4'>
                <p className='py-1 px-3 text-purple-500  hover:text-indigo-700 font-semibold'>
                  KES {product.price}.00
                </p>
                <p className='h-10 py-1 px-3 text-purple-500  hover:text-indigo-700 font-semibold'>
                  {product.name}
                </p>
                <button className='pt-10 pl-40 hover:none'>
                  <a>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      class='h-6 w-6'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                      />
                    </svg>
                  </a>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
