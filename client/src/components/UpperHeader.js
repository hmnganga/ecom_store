import React, { useState } from 'react';
import DropDown from './DropDown';
import {  useSelector } from 'react-redux';
import { filterProducts } from '../actions/productActions';
import { useDispatch } from 'react-redux';

function UpperHeader() {
    const cartReducer = useSelector((state) => state.cartReducer);
    const { cartItems } = cartReducer;
    const [searchkey, setsearchkey] = useState('');
    const [sort, setsort] = useState('popular');
    const [category, setcategory] = useState('all');
    const dispatch = useDispatch();
  return (
    <nav className='bg-white'>
      <div className='mx-auto   px-4 border border-gray-200'>
        <div className='flex justify-between'>
          {/* logo */}
          <div>
            <div className='pt-2 pb-1 relative mx-auto text-gray-600'>
              <input
                value={searchkey}
                onChange={(e) => {
                  setsearchkey(e.target.value);
                }}
                
                className='border-2  border-yellow-500 focus:border-yellow-500 border-opacity-50 focus:border-opacity-50 bg-white h-9 px-4 pr-16 rounded-lg text-sm focus:outline-none'
                type='text'
                name='search'
                placeholder='Search'
              />
              <button
                className='absolute right-0 top-0 mt-3 mr-4'
                onClick={() => {
                  dispatch(filterProducts(searchkey, sort, category));
                }}
              >
                <svg
                  className='text-gray-600 h-4 w-4 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  xmlns='http://www.w3.org/1999/xlink'
                  version='1.1'
                  id='Capa_1'
                  x='0px'
                  y='0px'
                  viewBox='0 0 56.966 56.966'
                  style={{ background: `new 0 0 56.966 56.966` }}
                  xml='preserve'
                  width='512px'
                  height='512px'
                >
                  <path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
                </svg>
              </button>
            </div>
          </div>
          {/* primary nav */}
          <div className='pt-2 pb-1'>{/* <DropDown /> */}</div>
          {/* secondary nav */}
          <div className='pt-3 text-yellow-500'>
            <button>
              <a href='/cart'>
                <svg
                  className='justify-end'
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z'
                  />
                </svg>
              </a>
            </button>
            {cartItems.length}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default UpperHeader;
