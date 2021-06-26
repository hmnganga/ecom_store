import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerNewUser } from '../actions/userActions';
import { Helmet } from 'react-helmet';
import Loader from '../components/Loader';
import Success from '../components/Success';
import Error from '../components/Error';
import Footer from '../components/Footer';

function Register() {

  const registerstate = useSelector(state=>state.registerNewUserReducer)
  const {loading, error , success} = registerstate
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');

  const dispatch = useDispatch();

  const register = (e) => {
    e.preventDefault();
    const user = {
      name: name,
      email: email,
      password: password,
    };
    if (password == cpassword) {
      dispatch(registerNewUser(user));
    } else {
      alert('Passwords must match');
    }
  };
  return (
    <div>
      <Helmet>
        <title>Welcome | Village Cellar</title>
      </Helmet>
      <div className='min-h-screen flex items-center justify-center '>
        <div className='bg-white p-16 rounded shadow-2xl w-2/2'>
          <h2 className='text-3xl font-bold mb-10 text-gray-900'>
            Create Your Account
          </h2>
          {error && <Error error='Invalid Credentials' />}
          {loading && <Loader />}
          <form className='space-y-2' onSubmit={register}>
            <div>
              <label className='block mb-1 font-bold text-gray-600'>Name</label>
              <input
                type='text'
                placeholder='name'
                className='w-full border-2 border-gray-200 py-3 rounded outline-none focus:border-purple-500'
                value={name}
                required
                onChange={(e) => {
                  setname(e.target.value);
                }}
              ></input>
            </div>
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
                value={password}
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              ></input>
            </div>
            <div>
              <label className='block mb-1 font-bold text-gray-600'>
                Password
              </label>
              <input 
                type='password'
                placeholder='confirm password'
                className='w-full border-2 border-gray-200 py-3 rounded outline-none focus:border-purple-500'
                required
                value={cpassword}
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
              ></input>
            </div>
            <div className='flex items-center'></div>
            <button
              type='submit'
              className='block w-full p-4 rounded bg-yellow-400 text-yellow-900 hover:bg-yellow-300 hover:text-yellow-800 transition duration-300'
            >
              Sign Up
            </button>
          </form>
          <a href='login' className='ml-2 text-gray-700 text-sm'>
            Click Here To Login
          </a>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Register;
