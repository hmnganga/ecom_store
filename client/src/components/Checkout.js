import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrder } from '../actions/orderActions';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';
export default function Checkout({ amount }) {
  const dispatch = useDispatch();
  const orderstate = useSelector((state) => state.placeOrderReducer);

  const { loading, success, error } = orderstate;
  function tokenHandler(token) {
    console.log(token);
    dispatch(placeOrder(token, amount));
  }

  function validate() {
    if (!localStorage.getItem('currentUser')) {
      window.location.href = '/login';
    }
  }

  return (
    <div>
      {loading && <Loader />}
      {success && (
        <Success success='Your Payment has gone through Successfully.' />
      )}
      {error && <Error error='Something Went wrong' />}

      <StripeCheckout
        token={tokenHandler}
        amount={amount * 100}
        shippingAddress
        currency='KES'
        stripeKey='pk_test_51J4mHfHe0BSkLqgq7LhoOl1ZNo51mPWzAbUBo4d0sofyhaqAZpFUwxOgsE0s2z78rS1MAT8KzM5NCQvst01pUCS4000F8IdoQ1'
      >
        <button
          className='font-sans p text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded transition duration-300'
          onClick={validate}
        >
          PAY NOW
        </button>
      </StripeCheckout>
    </div>
  );
}
