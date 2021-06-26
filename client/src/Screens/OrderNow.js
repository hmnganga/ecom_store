import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

function OrderNow() {
    return (
      <div>
        <Helmet>
          <title>Order Now | Village Cellar</title>
        </Helmet>
        <h1>OrderNow collection</h1>
        <Footer/>
      </div>
    );
}

export default OrderNow
