import React from 'react';

function Footer() {
  return (
    <div>
      <footer class='site-footer bg-gray-100 '>
        <div class='container grid'>
          <div class=' flex md:pl-20'>
            <div class='col-xs-6 col-md-3 pl-5 '>
              {/* <p className='font-bold'>OUR STORE</p> */}

              <p class='text-justify-center'>Kenya</p>
              <p class='text-justify-center'>Village Market, New Wing</p>
            </div>

            <div class='col-xs-6 col-md-3 ml-2'>
              {/* <p className='font-bold'>Contact</p> */}
              <p className='text-justify-center'>
                Whatsapp: 0729221100 {/* (12:00 - 20:00) */}
              </p>
              <p class='text-justify-center'>Phone: (+254) 729 221 100 </p>
              <p class='text-justify-center'>Village Market, New Wing</p>
              <p class='text-justify-center'></p>
            </div>

            
          </div>
          <hr />
        </div>
        <div class='container'>
          <div class='row'>
            <div class='col-md-8 col-sm-6 col-xs-12'>
              <p class='copyright-text'>
                Copyright &copy; 2021 All Rights Reserved by Village Cellar.
              </p>
            </div>

            <div class='col-md-4 col-sm-6 col-xs-12'>
              <ul class='social-icons'>
                <li>
                  <a class='facebook' href='#'>
                    <i class='fa fa-facebook'></i>
                  </a>
                </li>
                <li>
                  <a class='twitter' href='#'>
                    <i class='fa fa-twitter'></i>
                  </a>
                </li>
                <li>
                  <a class='dribbble' href='#'>
                    <i class='fa fa-dribbble'></i>
                  </a>
                </li>
                <li>
                  <a class='linkedin' href='#'>
                    <i class='fa fa-linkedin'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
