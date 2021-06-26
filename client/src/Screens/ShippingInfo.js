import React from 'react'
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

function ShippingInfo() {
    return (
      <div style={{ height: '90vh' }}>
        <Helmet>
          <title>Shipping info | Village Cellar</title>
        </Helmet>
        <h1>shipping info</h1>
        <Footer/>
      </div>
    );
}

export default ShippingInfo
