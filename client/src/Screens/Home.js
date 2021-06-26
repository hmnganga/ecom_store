import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../actions/productActions';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Footer from '../components/Footer';
import BarLoader from 'react-spinners/BarLoader';


function Home() {
  const getallproductstate = useSelector(
    (state) => state.getAllProductsReducer
  );
  const { loading, products, error } = getallproductstate;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  return (
    <div className=''>
      <Helmet>
        <title>Home | Village Cellar</title>
      </Helmet>
      <p className='taste__feeling pt-8 sm:mr-8 ml-4 md:mr-2 md:ml-2 bg-gradient-to-r from-green-400 to-blue-500 mx-auto text-white'>
        TASTE. FEEL. ENJOY. EXPERIENCE. THE FINEST LIQUOR STORE
      </p>
      
      <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-8 gap-8 pb-60 '>
        {loading ? (
          <div className='flex  sm:grid-cols-1 sm:gap-20 gap-40 place-items-center h-48  pl-32 md:ml-32 sm:ml-10'>
            <BarLoader color={'#C98517'} loading={loading} size={100} />
            {/* <DotLoader color={'#C98517'} loading={loading} size={80} />
            <DotLoader color={'#C98517'} loading={loading} size={80} />
            <DotLoader color={'#F8E71C'} loading={loading} size={80} />
            <DotLoader color={'#C98517'} loading={loading} size={80} />
            <DotLoader color={'#C98517'} loading={loading} size={80} />
            <DotLoader color={'#C98517'} loading={loading} size={80} /> */}
          </div>
        ) : error ? (
          <Error error='Something went wrong...' />
        ) : (
          products.map((product) => {
            return (
              <div className=''>
                <Product product={product} key={product._id} />
              </div>
              
            );
          })
        )}
        {/*  {products.length &&
          products.map((product) => {
            return (
              <Product product={product} className='with' key={product._id} />
            );
          })} */}
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
