import React, { Component } from 'react'
import './NotFound.css'

import Topbar from '../../../Topbar'
import Navbar from '../../../Navbar'
import ScrollTop from '../../../ScrollTop'
import Footer from '../../../Footer'
import ShopCategories from '../../../ShopCategories'
import MobileMenu from '../../../MobileMenu'

import { Link } from 'react-router-dom'

export class NotFound extends Component {
  render() {
    return (
      <div>
        <ShopCategories />
        <MobileMenu />
        <Topbar />

        <Navbar />
        <div className='offcanvas-wrapper'>
          <div className='container padding-top-3x padding-bottom-3x mb-1'>
            <img
              className='d-block m-auto'
              src={require('../../../../assets/img/404_art.jpg')}
              style={{ width: '100%', maxWidth: '550px' }}
              alt='404'
            />
            <div className='padding-top-1x mt-2 text-center'>
              <h3>Page Not Found</h3>
              <p>
                It seems we can’t find page you are looking for.{' '}
                <Link to='/'>Go back to Homepage</Link>
                <br />
                Or try using search at the top right corner of the page.
              </p>
            </div>
          </div>
          <Footer />
        </div>
        <ScrollTop />
      </div>
    )
  }
}

export default NotFound
