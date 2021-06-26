import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { logiUser } from '../actions/userActions';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Footer from '../components/Footer';

function Login() {
  const loginreducer = useSelector((state) => state.loginReducer);
  const { loading, error } = loginreducer;
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const dispatch = useDispatch();

  const login = (e) => {
    e.preventDefault();
    const user = {
      email: email,
      password: password,
    };
    dispatch(logiUser(user))
   
  };

  useEffect(() => {
    if(localStorage.getItem('currentUser'))
    {
      window.location.href='/'
    }
  }, [])

  return (
    <div>
      <Helmet>
        <title>Login | Village Cellar</title>
      </Helmet>
      <div className='min-h-screen flex items-center justify-center '>
        <div className='bg-white p-16 rounded shadow-2xl w-2/2'>
          <h2 className='text-3xl font-bold mb-10 ml-20 mr-20 text-gray-900'>Login</h2>
          {error && <Error error='Invalid Credentials' />}
          {loading && <Loader />}
          <form className='space-y-2' onSubmit={login}>
            <div>
              <label className='block mb-1 font-bold text-gray-600'>
                Email
              </label>
              <input
                type='text'
                placeholder='email'
                className='w-full border-2 border-gray-200 py-3 rounded outline-none focus:border-purple-500'
                value={email}
                required
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              ></input>
            </div>

            <div>
              <label className='block mb-1 font-bold text-gray-600'>
                Password
              </label>
              <input
                type='password'
                placeholder='password'
                className='w-full border-2 border-gray-200 py-3 rounded outline-none focus:border-purple-500'
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
            </div>
            <div className='flex items-center'>
              
            </div>
            <button
              type='submit'
              className='block w-full p-4 rounded bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-800 transition duration-300'
            >
              Login
            </button>
          </form>
          <a href='register' className='ml-2 text-gray-700 text-sm'>
            Click Here To Register
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Login;
