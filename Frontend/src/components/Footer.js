import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className='site-footer'>
        <div className='container'>
          <div className='row' style={{ justifyContent: 'space-around' }}>
            <div className='col-lg-3 col-md-6'>
              <section className='widget widget-light-skin'>
                <h3 className='widget-title'>Get In Touch With Us</h3>
                <p className='text-white'>Phone: 00 33 169 7720</p>
                <ul className='list-unstyled text-sm text-white'>
                  <li>
                    <span className='opacity-50'>Monday-Friday:</span>9.00 am -
                    8.00 pm
                  </li>
                  <li>
                    <span className='opacity-50'>Saturday:</span>10.00 am - 6.00
                    pm
                  </li>
                </ul>
                <p>
                  <a className='navi-link-light' href='#'>
                    support@unishop.com
                  </a>
                </p>
                <a
                  className='social-button shape-circle sb-facebook sb-light-skin'
                  href='#'
                >
                  <i className='socicon-facebook'></i>
                </a>
                <a
                  className='social-button shape-circle sb-twitter sb-light-skin'
                  href='#'
                >
                  <i className='socicon-twitter'></i>
                </a>
                <a
                  className='social-button shape-circle sb-instagram sb-light-skin'
                  href='#'
                >
                  <i className='socicon-instagram'></i>
                </a>
                <a
                  className='social-button shape-circle sb-google-plus sb-light-skin'
                  href='#'
                >
                  <i className='socicon-googleplus'></i>
                </a>
              </section>
            </div>
            <div className='col-lg-3 col-md-6'>
              <section className='widget widget-links widget-light-skin'>
                <h3 className='widget-title'>About Us</h3>
                <ul>
                  <li>
                    <a href='#'>Careers</a>
                  </li>
                  <li>
                    <a href='#'>About Unishop</a>
                  </li>
                  <li>
                    <a href='#'>Our Story</a>
                  </li>
                  <li>
                    <a href='#'>Services</a>
                  </li>
                  <li>
                    <a href='#'>Our Blog</a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <hr className='hr-light mt-2 margin-bottom-2x' />
          <div className='row'>
            <div className='col-md-7 padding-bottom-1x'>
              <p className='footer-copyright'>
                © All rights reserved. Made with &nbsp;
                <i className='icon-heart text-danger'></i>
                <a href='http://rokaux.com/' target='_blank'>
                  {' '}
                  &nbsp;by rokaux
                </a>
              </p>
            </div>
            <div className='col-md-5 padding-bottom-1x'>
              <div className='margin-top-1x hidden-md-up'></div>
              <form
                className='subscribe-form'
                action='//rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=1194bb7544'
                method='post'
                target='_blank'
                noValidate=''
              >
                <div className='clearfix'>
                  <div className='input-group input-light'>
                    <input
                      className='form-control'
                      type='email'
                      name='EMAIL'
                      placeholder='Your e-mail'
                    />
                    <span className='input-group-addon'>
                      <i className='icon-mail'></i>
                    </span>
                  </div>
                  <div
                    style={{ position: 'absolute', left: '-5000px' }}
                    aria-hidden='true'
                  >
                    <input
                      type='text'
                      name='b_c7103e2c981361a6639545bd5_1194bb7544'
                      tabIndex='-1'
                    />
                  </div>
                  <button className='btn btn-primary' type='submit'>
                    <i className='icon-check'></i>
                  </button>
                </div>
                <span className='form-text text-sm text-white opacity-50'>
                  Subscribe to our Newsletter to receive early discount offers,
                  latest news, sales and promo information.
                </span>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
