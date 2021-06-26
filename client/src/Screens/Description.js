import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { getProductById } from '../actions/productActions';
import Error from '../components/Error';
import Loader from '../components/Loader';
import { Helmet } from 'react-helmet';
import Review from '../components/Review';
import Footer from '../components/Footer';

function Description({ match }) {
  const productId = match.params.id;
  const dispatch = useDispatch();
  const [quantity, setquantity] = useState(1);
  const getproductbyidstate = useSelector(
    (state) => state.getProductByIdReducer
  );
  const { product, loading, error } = getproductbyidstate;
  function addtocart() {
    dispatch(addToCart(product, quantity));
  }
  useEffect(() => {
    dispatch(getProductById(productId));
  }, []);
  return (
    <div>
      <Helmet>
        <title>Description | Village Cellar</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : error ? (
        <Error error='Something went wrong...' />
      ) : (
        <div className='row'>
          <div className='col-md-6 text-left'>
            <div className='container p-5 m-2'>
              <h1>{product.name}</h1>
              <img
                src={product.image}
                style={{ height: '400px ', width: '400px' }}
                className=' m-3'
              />
              <p>{product.description}</p>
            </div>
          </div>
          <div className='col-md-6 '>
            <div className='m-2 '>
              <h1 className='pl-36 pb-3'>Price : KSH{product.price}</h1>
              <hr />
              <h1 className='pl-36 pb-2 pt-1'>Select Quantity</h1>

              <div className='pl-36 pb-3'>
                <select
                  value={quantity}
                  onChange={(e) => {
                    setquantity(e.target.value);
                  }}
                >
                  {[...Array(product.countInStock).keys()].map((x, i) => {
                    return <option value={i + 1}>{i + 1}</option>;
                  })}
                </select>
              </div>
              <hr />
              <div className='pt-6 pl-36 pb-3'>
                <button class=' pt-12  text-md font-sans text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded transition duration-300'>
                  ADD TO CART
                </button>
              </div>
              {/* <button className='btn btn-dark' onClick={addtocart}>
                ADD TO CART
              </button> */}
            </div>
            <hr />
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default Description;
