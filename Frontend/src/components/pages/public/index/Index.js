import React, { Component } from 'react'

import './Index.css'

import ShopCategories from '../../../ShopCategories'
import MobileMenu from '../../../MobileMenu'
import Topbar from '../../../Topbar'
import Navbar from '../../../Navbar'
import Footer from '../../../Footer'
import ScrollTop from '../../../ScrollTop'
import ScrollToTop from 'react-scroll-to-top'
import 'react-scroll-to-top/lib/index.css'

export class index extends Component {
  // isActive = () => {
  //   return this.props.location.pathname === '/'? true: false
  // }

  render() {
    return (
      <div>
        <ScrollToTop smooth />
        <ShopCategories />
        <MobileMenu />
        <Topbar langs={this.props.langs} currency={this.props.currency} />
        <Navbar pathname={this.props.location.pathname} />
        <div className='offcanvas-wrapper'>
          <section className='hero-slider'>
            <div
              className='owl-carousel large-controls dots-inside'
              data-owl-carousel='{ "nav": true, "dots": true, "loop": true, "autoplay": true, "autoplayTimeout": 7000 }'
            >
              <div className='item'>
                <div className='container padding-top-3x'>
                  <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center'>
                      <div className='from-bottom'>
                        <img
                          className='d-inline-block w-150 mb-4'
                          src={require('../../../../assets/img/hero-slider/logo02.png')}
                          alt='Puma'
                        />
                        <div className='h2 text-body text-normal mb-2 pt-1'>
                          Puma Backpacks Collection
                        </div>
                        <div className='h2 text-body text-normal mb-4 pb-1'>
                          starting at <span className='text-bold'>$37.99</span>
                        </div>
                      </div>
                      <a
                        className='btn btn-primary scale-up delay-1'
                        href='shop-grid-ls.html'
                      >
                        View Offers
                      </a>
                    </div>
                    <div className='col-md-6 padding-bottom-2x mb-3'>
                      <img
                        className='d-block mx-auto'
                        src={require('../../../../assets/img/hero-slider/02.png')}
                        alt='Puma Backpack'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='container padding-top-3x'>
                  <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center'>
                      <div className='from-bottom'>
                        <img
                          className='d-inline-block w-200 mb-4'
                          src={require('../../../../assets/img/hero-slider/logo01.png')}
                          alt='Converse'
                        />
                        <div className='h2 text-body text-normal mb-2 pt-1'>
                          Chuck Taylor All Star II
                        </div>
                        <div className='h2 text-body text-normal mb-4 pb-1'>
                          for only <span className='text-bold'>$59.99</span>
                        </div>
                      </div>
                      <a
                        className='btn btn-primary scale-up delay-1'
                        href='shop-single.html'
                      >
                        Shop Now
                      </a>
                    </div>
                    <div className='col-md-6 padding-bottom-2x mb-3'>
                      <img
                        className='d-block mx-auto'
                        src={require('../../../../assets/img/hero-slider/01.png')}
                        alt='Chuck Taylor All Star II'
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className='item'>
                <div className='container padding-top-3x'>
                  <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center'>
                      <div className='from-bottom'>
                        <img
                          className='d-inline-block mb-4'
                          src={require('../../../../assets/img/hero-slider/logo03.png')}
                          style={{ width: '125px' }}
                          alt='Motorola'
                        />
                        <div className='h2 text-body text-normal mb-2 pt-1'>
                          Smart Watch Moto 360 2nd
                        </div>
                        <div className='h2 text-body text-normal mb-4 pb-1'>
                          for only <span className='text-bold'>$299.99</span>
                        </div>
                      </div>
                      <a
                        className='btn btn-primary scale-up delay-1'
                        href='shop-single.html'
                      >
                        Shop Now
                      </a>
                    </div>
                    <div className='col-md-6 padding-bottom-2x mb-3'>
                      <img
                        className='d-block mx-auto'
                        src={require('../../../../assets/img/hero-slider/03.png')}
                        alt='Moto 360'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='container padding-top-3x'>
            <h3 className='text-center mb-30'>Top Categories</h3>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div className='card mb-30'>
                  <a className='card-img-tiles' href='shop-grid-ls.html'>
                    <div className='inner'>
                      <div className='main-img'>
                        <img
                          src={require('../../../../assets/img/shop/categories/01.jpg')}
                          alt='Category'
                        />
                      </div>
                      <div className='thumblist'>
                        <img
                          src={require('../../../../assets/img/shop/categories/02.jpg')}
                          alt='Category'
                        />
                        <img
                          src={require('../../../../assets/img/shop/categories/03.jpg')}
                          alt='Category'
                        />
                      </div>
                    </div>
                  </a>
                  <div className='card-body text-center'>
                    <h4 className='card-title'>Clothing</h4>
                    <p className='text-muted'>Starting from $49.99</p>
                    <a
                      className='btn btn-outline-primary btn-sm'
                      href='shop-grid-ls.html'
                    >
                      View Products
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='card mb-30'>
                  <a className='card-img-tiles' href='shop-grid-ls.html'>
                    <div className='inner'>
                      <div className='main-img'>
                        <img
                          src={require('../../../../assets/img/shop/categories/04.jpg')}
                          alt='Category'
                        />
                      </div>
                      <div className='thumblist'>
                        <img
                          src={require('../../../../assets/img/shop/categories/05.jpg')}
                          alt='Category'
                        />
                        <img
                          src={require('../../../../assets/img/shop/categories/06.jpg')}
                          alt='Category'
                        />
                      </div>
                    </div>
                  </a>
                  <div className='card-body text-center'>
                    <h4 className='card-title'>Shoes</h4>
                    <p className='text-muted'>Starting from $56.00</p>
                    <a
                      className='btn btn-outline-primary btn-sm'
                      href='shop-grid-ls.html'
                    >
                      View Products
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='card mb-30'>
                  <a className='card-img-tiles' href='shop-grid-ls.html'>
                    <div className='inner'>
                      <div className='main-img'>
                        <img
                          src={require('../../../../assets/img/shop/categories/07.jpg')}
                          alt='Category'
                        />
                      </div>
                      <div className='thumblist'>
                        <img
                          src={require('../../../../assets/img/shop/categories/08.jpg')}
                          alt='Category'
                        />
                        <img
                          src={require('../../../../assets/img/shop/categories/09.jpg')}
                          alt='Category'
                        />
                      </div>
                    </div>
                  </a>
                  <div className='card-body text-center'>
                    <h4 className='card-title'>Accessories</h4>
                    <p className='text-muted'>Starting from $27.00</p>
                    <a
                      className='btn btn-outline-primary btn-sm'
                      href='shop-grid-ls.html'
                    >
                      View Products
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='text-center'>
              <a
                className='btn btn-outline-secondary margin-top-none'
                href='shop-categories.html'
              >
                All Categories
              </a>
            </div>
          </section>

          <section className='container-fluid padding-top-3x'>
            <div className='row justify-content-center'>
              <div className='col-xl-5 col-lg-6 mb-30'>
                <div className='rounded bg-faded position-relative padding-top-3x padding-bottom-3x'>
                  <span
                    className='product-badge text-danger'
                    style={{ top: '24px', left: '24px' }}
                  >
                    Limited Offer
                  </span>
                  <div className='text-center'>
                    <h3 className='h2 text-normal mb-1'>New</h3>
                    <h2 className='display-2 text-bold mb-2'>Sunglasses</h2>
                    <h4 className='h3 text-normal mb-4'>
                      collection at discounted price!
                    </h4>
                    <div
                      className='countdown mb-3'
                      data-date-time='12/30/2019 12:00:00'
                    >
                      <div className='item'>
                        <div className='days'>00</div>
                        <span className='days_ref'>Days</span>
                      </div>
                      <div className='item'>
                        <div className='hours'>00</div>
                        <span className='hours_ref'>Hours</span>
                      </div>
                      <div className='item'>
                        <div className='minutes'>00</div>
                        <span className='minutes_ref'>Mins</span>
                      </div>
                      <div className='item'>
                        <div className='seconds'>00</div>
                        <span className='seconds_ref'>Secs</span>
                      </div>
                    </div>
                    <br />
                    <a className='btn btn-primary margin-bottom-none' href='#'>
                      View Offers
                    </a>
                  </div>
                </div>
              </div>
              <div
                className='col-xl-5 col-lg-6 mb-30'
                style={{ minHeight: '270px' }}
              >
                <div
                  id='promo-1'
                  className='img-cover rounded'
                  // style={{
                  //   backgroundImage:
                  //     'url("../../../assets/img/banners/home01.jpg")',
                  // }}
                ></div>
              </div>
            </div>
          </section>

          <section className='container-fluid'>
            <div className='row justify-content-center'>
              <div className='col-xl-10 col-lg-12'>
                <div
                  id='promo-2'
                  className='fw-section rounded padding-top-4x padding-bottom-4x'
                  // style={{
                  //   backgroundImage:
                  //     'url("../../../assets/img/banners/home02.jpg")',
                  // }}
                >
                  <span
                    className='overlay rounded'
                    style={{ opacity: '.35' }}
                  ></span>
                  <div className='text-center'>
                    <h3 className='display-4 text-normal text-white text-shadow mb-1'>
                      Old Collection
                    </h3>
                    <h2 className='display-2 text-bold text-white text-shadow'>
                      HUGE SALE!
                    </h2>
                    <h4 className='d-inline-block h2 text-normal text-white text-shadow border-default border-left-0 border-right-0 mb-4'>
                      at our outlet stores
                    </h4>
                    <br />
                    <a
                      className='btn btn-primary margin-bottom-none'
                      href='contacts.html'
                    >
                      Locate Stores
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='container padding-top-3x padding-bottom-3x'>
            <h3 className='text-center mb-30'>Featured Products</h3>
            <div
              className='owl-carousel'
              data-owl-carousel='{ "nav": false, "dots": true, "margin": 30, "responsive": {"0":{"items":1},"576":{"items":2},"768":{"items":3},"991":{"items":4},"1200":{"items":4}} }'
            >
              <div className='grid-item'>
                <div className='product-card'>
                  <div className='product-badge text-danger'>22% Off</div>
                  <a className='product-thumb' href='shop-single.html'>
                    <img
                      src={require('../../../../assets/img/shop/products/09.jpg')}
                      alt='Product'
                    />
                  </a>
                  <h3 className='product-title'>
                    <a href='shop-single.html'>Rocket Dog</a>
                  </h3>
                  <h4 className='product-price'>
                    <del>$44.95</del>$34.99
                  </h4>
                  <div className='product-buttons'>
                    <button
                      className='btn btn-outline-secondary btn-sm btn-wishlist'
                      data-toggle='tooltip'
                      title='Whishlist'
                    >
                      <i className='icon-heart'></i>
                    </button>
                    <button
                      className='btn btn-outline-primary btn-sm'
                      data-toast
                      data-toast-type='success'
                      data-toast-position='topRight'
                      data-toast-icon='icon-circle-check'
                      data-toast-title='Product'
                      data-toast-message='successfuly added to cart!'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className='grid-item'>
                <div className='product-card'>
                  <div className='rating-stars'>
                    <i className='icon-star filled'></i>
                    <i className='icon-star filled'></i>
                    <i className='icon-star filled'></i>
                    <i className='icon-star filled'></i>
                    <i className='icon-star'></i>
                  </div>
                  <a className='product-thumb' href='shop-single.html'>
                    <img
                      src={require('../../../../assets/img/shop/products/03.jpg')}
                      alt='Product'
                    />
                  </a>
                  <h3 className='product-title'>
                    <a href='shop-single.html'>Oakley Kickback</a>
                  </h3>
                  <h4 className='product-price'>$155.00</h4>
                  <div className='product-buttons'>
                    <button
                      className='btn btn-outline-secondary btn-sm btn-wishlist'
                      data-toggle='tooltip'
                      title='Whishlist'
                    >
                      <i className='icon-heart'></i>
                    </button>
                    <button
                      className='btn btn-outline-primary btn-sm'
                      data-toast
                      data-toast-type='success'
                      data-toast-position='topRight'
                      data-toast-icon='icon-circle-check'
                      data-toast-title='Product'
                      data-toast-message='successfuly added to cart!'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className='grid-item'>
                <div className='product-card'>
                  <a className='product-thumb' href='shop-single.html'>
                    <img
                      src={require('../../../../assets/img/shop/products/12.jpg')}
                      alt='Product'
                    />
                  </a>
                  <h3 className='product-title'>
                    <a href='shop-single.html'>Vented Straw Fedora</a>
                  </h3>
                  <h4 className='product-price'>$49.50</h4>
                  <div className='product-buttons'>
                    <button
                      className='btn btn-outline-secondary btn-sm btn-wishlist'
                      data-toggle='tooltip'
                      title='Whishlist'
                    >
                      <i className='icon-heart'></i>
                    </button>
                    <button
                      className='btn btn-outline-primary btn-sm'
                      data-toast
                      data-toast-type='success'
                      data-toast-position='topRight'
                      data-toast-icon='icon-circle-check'
                      data-toast-title='Product'
                      data-toast-message='successfuly added to cart!'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className='grid-item'>
                <div className='product-card'>
                  <div className='rating-stars'>
                    <i className='icon-star filled'></i>
                    <i className='icon-star filled'></i>
                    <i className='icon-star filled'></i>
                    <i className='icon-star filled'></i>
                    <i className='icon-star filled'></i>
                  </div>
                  <a className='product-thumb' href='shop-single.html'>
                    <img
                      src={require('../../../../assets/img/shop/products/11.jpg')}
                      alt='Product'
                    />
                  </a>
                  <h3 className='product-title'>
                    <a href='shop-single.html'>Top-Sider Fathom</a>
                  </h3>
                  <h4 className='product-price'>$90.00</h4>
                  <div className='product-buttons'>
                    <button
                      className='btn btn-outline-secondary btn-sm btn-wishlist'
                      data-toggle='tooltip'
                      title='Whishlist'
                    >
                      <i className='icon-heart'></i>
                    </button>
                    <button
                      className='btn btn-outline-primary btn-sm'
                      data-toast
                      data-toast-type='success'
                      data-toast-position='topRight'
                      data-toast-icon='icon-circle-check'
                      data-toast-title='Product'
                      data-toast-message='successfuly added to cart!'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className='grid-item'>
                <div className='product-card'>
                  <a className='product-thumb' href='shop-single.html'>
                    <img
                      src={require('../../../../assets/img/shop/products/04.jpg')}
                      alt='Product'
                    />
                  </a>
                  <h3 className='product-title'>
                    <a href='shop-single.html'>Waist Leather Belt</a>
                  </h3>
                  <h4 className='product-price'>$47.00</h4>
                  <div className='product-buttons'>
                    <button
                      className='btn btn-outline-secondary btn-sm btn-wishlist'
                      data-toggle='tooltip'
                      title='Whishlist'
                    >
                      <i className='icon-heart'></i>
                    </button>
                    <button
                      className='btn btn-outline-primary btn-sm'
                      data-toast
                      data-toast-type='success'
                      data-toast-position='topRight'
                      data-toast-icon='icon-circle-check'
                      data-toast-title='Product'
                      data-toast-message='successfuly added to cart!'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className='grid-item'>
                <div className='product-card'>
                  <div className='product-badge text-danger'>50% Off</div>
                  <a className='product-thumb' href='shop-single.html'>
                    <img
                      src={require('../../../../assets/img/shop/products/01.jpg')}
                      alt='Product'
                    />
                  </a>
                  <h3 className='product-title'>
                    <a href='shop-single.html'>Unionbay Park</a>
                  </h3>
                  <h4 className='product-price'>
                    <del>$99.99</del>$49.99
                  </h4>
                  <div className='product-buttons'>
                    <button
                      className='btn btn-outline-secondary btn-sm btn-wishlist'
                      data-toggle='tooltip'
                      title='Whishlist'
                    >
                      <i className='icon-heart'></i>
                    </button>
                    <button
                      className='btn btn-outline-primary btn-sm'
                      data-toast
                      data-toast-type='success'
                      data-toast-position='topRight'
                      data-toast-icon='icon-circle-check'
                      data-toast-title='Product'
                      data-toast-message='successfuly added to cart!'
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='container padding-bottom-2x'>
            <div className='row'>
              <div className='col-md-4 col-sm-6'>
                <div className='widget widget-featured-products'>
                  <h3 className='widget-title'>Top Sellers</h3>

                  <div className='entry'>
                    <div className='entry-thumb'>
                      <a href='shop-single.html'>
                        <img
                          src={require('../../../../assets/img/shop/widget/01.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='entry-content'>
                      <h4 className='entry-title'>
                        <a href='shop-single.html'>Oakley Kickback</a>
                      </h4>
                      <span className='entry-meta'>$155.00</span>
                    </div>
                  </div>

                  <div className='entry'>
                    <div className='entry-thumb'>
                      <a href='shop-single.html'>
                        <img
                          src={require('../../../../assets/img/shop/widget/03.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='entry-content'>
                      <h4 className='entry-title'>
                        <a href='shop-single.html'>Vented Straw Fedora</a>
                      </h4>
                      <span className='entry-meta'>$49.50</span>
                    </div>
                  </div>

                  <div className='entry'>
                    <div className='entry-thumb'>
                      <a href='shop-single.html'>
                        <img
                          src={require('../../../../assets/img/shop/widget/04.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='entry-content'>
                      <h4 className='entry-title'>
                        <a href='shop-single.html'>Big Wordmark Tote</a>
                      </h4>
                      <span className='entry-meta'>$29.99</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='widget widget-featured-products'>
                  <h3 className='widget-title'>New Arrivals</h3>

                  <div className='entry'>
                    <div className='entry-thumb'>
                      <a href='shop-single.html'>
                        <img
                          src={require('../../../../assets/img/shop/widget/05.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='entry-content'>
                      <h4 className='entry-title'>
                        <a href='shop-single.html'>Union Park</a>
                      </h4>
                      <span className='entry-meta'>$49.99</span>
                    </div>
                  </div>

                  <div className='entry'>
                    <div className='entry-thumb'>
                      <a href='shop-single.html'>
                        <img
                          src={require('../../../../assets/img/shop/widget/06.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='entry-content'>
                      <h4 className='entry-title'>
                        <a href='shop-single.html'>Cole Haan Crossbody</a>
                      </h4>
                      <span className='entry-meta'>$200.00</span>
                    </div>
                  </div>

                  <div className='entry'>
                    <div className='entry-thumb'>
                      <a href='shop-single.html'>
                        <img
                          src={require('../../../../assets/img/shop/widget/07.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='entry-content'>
                      <h4 className='entry-title'>
                        <a href='shop-single.html'>Skagen Holst Watch</a>
                      </h4>
                      <span className='entry-meta'>$145.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6'>
                <div className='widget widget-featured-products'>
                  <h3 className='widget-title'>Best Rated</h3>

                  <div className='entry'>
                    <div className='entry-thumb'>
                      <a href='shop-single.html'>
                        <img
                          src={require('../../../../assets/img/shop/widget/08.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='entry-content'>
                      <h4 className='entry-title'>
                        <a href='shop-single.html'>Jordan's City Hoodie</a>
                      </h4>
                      <span className='entry-meta'>$65.00</span>
                    </div>
                  </div>

                  <div className='entry'>
                    <div className='entry-thumb'>
                      <a href='shop-single.html'>
                        <img
                          src={require('../../../../assets/img/shop/widget/09.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='entry-content'>
                      <h4 className='entry-title'>
                        <a href='shop-single.html'>Palace Shell Track Jacket</a>
                      </h4>
                      <span className='entry-meta'>$36.99</span>
                    </div>
                  </div>

                  <div className='entry'>
                    <div className='entry-thumb'>
                      <a href='shop-single.html'>
                        <img
                          src={require('../../../../assets/img/shop/widget/10.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='entry-content'>
                      <h4 className='entry-title'>
                        <a href='shop-single.html'>Off the Shoulder Top</a>
                      </h4>
                      <span className='entry-meta'>$128.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-faded padding-top-3x padding-bottom-3x'>
            <div className='container'>
              <h3 className='text-center mb-30 pb-2'>Popular Brands</h3>
              <div
                className='owl-carousel'
                data-owl-carousel='{ "nav": false, "dots": false, "loop": true, "autoplay": true, "autoplayTimeout": 4000, "responsive": {"0":{"items":2}, "470":{"items":3},"630":{"items":4},"991":{"items":5},"1200":{"items":6}} }'
              >
                <img
                  className='d-block w-110 opacity-75 m-auto'
                  src={require('../../../../assets/img/brands/01.png')}
                  alt='Adidas'
                />
                <img
                  className='d-block w-110 opacity-75 m-auto'
                  src={require('../../../../assets/img/brands/02.png')}
                  alt='Brooks'
                />
                <img
                  className='d-block w-110 opacity-75 m-auto'
                  src={require('../../../../assets/img/brands/03.png')}
                  alt='Valentino'
                />
                <img
                  className='d-block w-110 opacity-75 m-auto'
                  src={require('../../../../assets/img/brands/04.png')}
                  alt='Nike'
                />
                <img
                  className='d-block w-110 opacity-75 m-auto'
                  src={require('../../../../assets/img/brands/05.png')}
                  alt='Puma'
                />
                <img
                  className='d-block w-110 opacity-75 m-auto'
                  src={require('../../../../assets/img/brands/06.png')}
                  alt='New Balance'
                />
                <img
                  className='d-block w-110 opacity-75 m-auto'
                  src={require('../../../../assets/img/brands/07.png')}
                  alt='Dior'
                />
              </div>
            </div>
          </section>

          <section className='container padding-top-3x padding-bottom-2x'>
            <div className='row'>
              <div className='col-md-3 col-sm-6 text-center mb-30'>
                <img
                  className='d-block w-90 img-thumbnail rounded-circle mx-auto mb-3'
                  src={require('../../../../assets/img/services/01.png')}
                  alt='Shipping'
                />
                <h6>Free Worldwide Shipping</h6>
                <p className='text-muted margin-bottom-none'>
                  Free shipping for all orders over $100
                </p>
              </div>
              <div className='col-md-3 col-sm-6 text-center mb-30'>
                <img
                  className='d-block w-90 img-thumbnail rounded-circle mx-auto mb-3'
                  src={require('../../../../assets/img/services/02.png')}
                  alt='Money Back'
                />
                <h6>Money Back Guarantee</h6>
                <p className='text-muted margin-bottom-none'>
                  We return money within 30 days
                </p>
              </div>
              <div className='col-md-3 col-sm-6 text-center mb-30'>
                <img
                  className='d-block w-90 img-thumbnail rounded-circle mx-auto mb-3'
                  src={require('../../../../assets/img/services/03.png')}
                  alt='Support'
                />
                <h6>24/7 Customer Support</h6>
                <p className='text-muted margin-bottom-none'>
                  Friendly 24/7 customer support
                </p>
              </div>
              <div className='col-md-3 col-sm-6 text-center mb-30'>
                <img
                  className='d-block w-90 img-thumbnail rounded-circle mx-auto mb-3'
                  src={require('../../../../assets/img/services/04.png')}
                  alt='Payment'
                />
                <h6>Secure Online Payment</h6>
                <p className='text-muted margin-bottom-none'>
                  We posess SSL / Secure Certificate
                </p>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </div>
    )
  }
}

export default index
