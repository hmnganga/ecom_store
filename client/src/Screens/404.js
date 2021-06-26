import React from 'react'
import{ Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

function NotFound() {
    return (
      <div className='not__found'>
        <Helmet>
          <title>Not Found | Liqour Store</title>
        </Helmet>
        <h2>Page Not Found.</h2>
        <h4>The page you're looking for does not exist or has moved.</h4>
        <Link to='/'>Go back home &rarr;</Link>
      </div>
    );
}

export default NotFound;
