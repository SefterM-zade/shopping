import React, { Component } from 'react'
import ShopCategories from '../../../ShopCategories'
import MobileMenu from '../../../MobileMenu'
import Topbar from '../../../Topbar'
import Navbar from '../../../Navbar'
import PageTitle from '../../../PageTitle'
import Footer from '../../../Footer'
import ScrollTop from '../../../ScrollTop'

export class Contact extends Component {
  render() {
    return (
      <div>
        <ShopCategories />
        <MobileMenu />
        <Topbar />
        <Navbar pathname={this.props.location.pathname} />
        <div className='offcanvas-wrapper'>
          <PageTitle title='Contacts' />
          <div className='container padding-bottom-2x mb-2'>
            <div className='row'>
              <div className='col-md-7'>
                <div className='display-3 text-muted opacity-75 mb-30'>
                  Customer Service
                </div>
              </div>
              <div className='col-md-5'>
                <ul className='list-icon'>
                  <li>
                    {' '}
                    <i className='icon-mail'></i>
                    <a
                      className='navi-link'
                      href='mailto:customer.service@unishop.com'
                    >
                      customer.service@unishop.com
                    </a>
                  </li>
                  <li>
                    {' '}
                    <i className='icon-bell'></i>+1(080) 44 357 260
                  </li>
                  <li>
                    {' '}
                    <i className='icon-clock'></i>1 - 2 business days
                  </li>
                </ul>
              </div>
            </div>
            <hr className='margin-top-2x' />
            <div className='row margin-top-2x'>
              <div className='col-md-7'>
                <div className='display-3 text-muted opacity-75 mb-30'>
                  Tech Support
                </div>
              </div>
              <div className='col-md-5'>
                <ul className='list-icon'>
                  <li>
                    {' '}
                    <i className='icon-mail'></i>
                    <a className='navi-link' href='mailto:support@unishop.com'>
                      support@unishop.com
                    </a>
                  </li>
                  <li>
                    {' '}
                    <i className='icon-bell'></i>00 33 169 7720
                  </li>
                  <li>
                    {' '}
                    <i className='icon-clock'></i>1 - 2 business days
                  </li>
                </ul>
              </div>
            </div>
            <h3 className='margin-top-3x text-center mb-30'>Outlet Stores</h3>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div className='card mb-30'>
                  <img
                    className='card-img-top'
                    src={require('../../../../assets/img/contacts/orlando.jpg')}
                    alt='Orlando'
                  />
                  <div className='card-body'>
                    <ul className='list-icon'>
                      <li>
                        {' '}
                        <i className='icon-map'></i>514 S. Magnolia St. Orlando,
                        FL 32806, USA
                      </li>
                      <li>
                        {' '}
                        <i className='icon-bell'></i>+1(786) 322 560 40
                      </li>
                      <li>
                        {' '}
                        <i className='icon-mail'></i>
                        <a
                          className='navi-link'
                          href='mailto:orlando.store@unishop.com'
                        >
                          orlando.store@unishop.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='card mb-30'>
                  <img
                    className='card-img-top'
                    src={require('../../../../assets/img/contacts/chicago.jpg')}
                    alt='Chicago'
                  />
                  <div className='card-body'>
                    <ul className='list-icon'>
                      <li>
                        {' '}
                        <i className='icon-map'></i>44 Shirley Ave. West
                        Chicago, IL 60185, USA
                      </li>
                      <li>
                        {' '}
                        <i className='icon-bell'></i>+1(847) 252 765 33
                      </li>
                      <li>
                        {' '}
                        <i className='icon-mail'></i>
                        <a
                          className='navi-link'
                          href='mailto:chicago.store@unishop.comm'
                        >
                          chicago.store@unishop.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='card mb-30'>
                  <img
                    className='card-img-top'
                    src={require('../../../../assets/img/contacts/new-york.jpg')}
                    alt='New York'
                  />
                  <div className='card-body'>
                    <ul className='list-icon'>
                      <li>
                        {' '}
                        <i className='icon-map'></i>89 Clinton Dr. Holbrook, NY
                        11741, USA
                      </li>
                      <li>
                        {' '}
                        <i className='icon-bell'></i>+1(212) 477 690 000
                      </li>
                      <li>
                        {' '}
                        <i className='icon-mail'></i>
                        <a
                          className='navi-link'
                          href='mailto:newyork.store@unishop.com'
                        >
                          newyork.store@unishop.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </div>
        <ScrollTop />
      </div>
    )
  }
}

export default Contact
