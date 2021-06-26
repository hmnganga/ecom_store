import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import emailjs from 'emailjs-com';

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_la1wn9n',
        'template_qyzsn1r',
        e.target,
        'user_eFlYSDfwnMR082xfKpwpr'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset()
  }
  
  return (
    <div className=' lg:ml-96 mt-4'>
      <form class='w-full max-w-lg' onSubmit={sendEmail}>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-first-name'
            >
              Name
            </label>
            <input
            name='name'
              required
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
              id='grid-first-name'
              type='text'
              placeholder='Jane'
            />
          </div>
          
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-password'
            >
              E-mail
            </label>
            <input
            name='email'
              class='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              id='email'
              type='email'
              placeholder='Email@Address.com'
              required
            />
          </div>
        </div>
        <div class='flex flex-wrap -mx-3 mb-6'>
          <div class='w-full px-3'>
            <label
              class='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
              for='grid-password'
            >
              Message
            </label>
            <textarea
            name='subject'
              class=' no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none'
              id='message'
              required
            ></textarea>
          </div>
        </div>
        <div class='md:flex md:items-center'>
          <div class='md:w-1/3'>
            <button
              class='bg-yellow-400 shadow bg-teal-400 hover:bg-yellow-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Send
            </button>
          </div>
          <div class='md:w-2/3'></div>
        </div>
      </form>
    </div>
  );
}

export default Contact;
