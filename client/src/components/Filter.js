import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterProducts } from '../actions/productActions';
export default function Filter() {
  const [searchkey, setsearchkey] = useState('');
  const [sort, setsort] = useState('popular');
  const [category, setcategory] = useState('all');

  const dispatch = useDispatch();

  return (
    <div>
      <div className='row justify-content-center shadow p-3 mb-5 bg-white rounded'>
        <div className='col-md-3 ml-2' style={{ marginTop: '13px' }}>
          <input
            value={searchkey}
            onChange={(e) => {
              setsearchkey(e.target.value);
            }}
            type='text'
            placeholder='search products'
            className='form-control'
          />
        </div>

        <div className='col-md-2 mt-4 ml-2'>
          <select
            className='form-control'
            value={sort}
            onChange={(e) => {
              setsort(e.target.value);
            }}
          >
            <option value='popular'>Popular</option>
            <option value='htl'>high to Low</option>
            <option value='lth'>Low To High</option>
          </select>
        </div>

        <div className='col-md-2 mt-4 ml-2'>
          <select
            className='form-control'
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <option value='all'>All</option>
            <option value='Whiskey'>Whiskey</option>
            <option value='Vodka'>Vodka</option>
            <option value='Gin'>Gin</option>
            <option value='Liquors'>Liquors</option>
            <option value='Absinthe'>Absinthe</option>
            <option value='Tequila'>Tequila</option>
            <option value='Mezcal'>Mezcal</option>
            <option value='Beers'>Beers</option>
            <option value='Bourbon'>Bourbon</option>
            <option value='Sake'>Sake</option>
            <option value='Cognac'>Cognac</option>
            <option value='Sale'>Sale</option>
            <option value='Brandy'>Brandy</option>
            <option value='Japanese Whiskey'>Japanese Whiskey</option>
            <option value='Single Malt Whiskey'>Single Malt Whiskey</option>
            <option value='Champagne'>Champagne</option>
            <option value='Jenever'>Jenever</option>
            <option value='Wine'>Wine</option>
          </select>
        </div>

        <div className='col-md-2 mt-4 ml-2'>
          <button
            className='btn'
            onClick={() => {
              dispatch(filterProducts(searchkey, sort, category));
            }}
          >
            FILTER
          </button>
        </div>
      </div>
    </div>
  );
}
