import React from 'react';

function Error({ error }) {
  return (
    <div>
      <div className='alert alert-primary' role='alert'>
        {error}
      </div>
    </div>
  );
}

export default Error;
