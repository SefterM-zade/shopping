import React, { Component } from 'react'
import ShopCategories from '../../../ShopCategories'
import MobileMenu from '../../../MobileMenu'
import Topbar from '../../../Topbar'
import Navbar from '../../../Navbar'
import PageTitle from '../../../PageTitle'
import Footer from '../../../Footer'
import ScrollTop from '../../../ScrollTop'

export class Categories extends Component {
  state = {
    brands: [],
  }

  static getDerivedStateFromProps(props, state) {
    if (props.brands !== state.brands && props.brands !== null) {
      return {
        brands: props.brands,
      }
    }
    return null
  }

  render() {
    return (
      <div>
        <div className='modal fade' id='modalShopCategories' tabIndex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title'>Shop Categories</h4>
                <button
                  className='close'
                  type='button'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <section className='widget widget-categories'>
                  <h3 className='widget-title'>Popular Brands</h3>
                  <ul>
                    {this.state.brands.map((brand) => (
                      <li>
                        <a href='#'>{brand.name}</a>
                        <span>(254)</span>
                      </li>
                    ))}

                    {/* <li>
                      <a href='#'>Bilabong</a>
                      <span>(39)</span>
                    </li>
                    <li>
                      <a href='#'>Brooks</a>
                      <span>(205)</span>
                    </li>
                    <li>
                      <a href='#'>Calvin Klein</a>
                      <span>(128)</span>
                    </li>
                    <li>
                      <a href='#'>Cole Haan</a>
                      <span>(104)</span>
                    </li>
                    <li>
                      <a href='#'>Columbia</a>
                      <span>(217)</span>
                    </li>
                    <li>
                      <a href='#'>New Balance</a>
                      <span>(95)</span>
                    </li>
                    <li>
                      <a href='#'>Nike</a>
                      <span>(310)</span>
                    </li>
                    <li>
                      <a href='#'>Nine West</a>
                      <span>(134)</span>
                    </li>
                    <li>
                      <a href='#'>Oakley</a>
                      <span>(73)</span>
                    </li>
                    <li>
                      <a href='#'>Puma</a>
                      <span>(446)</span>
                    </li>
                    <li>
                      <a href='#'>Scechers</a>
                      <span>(87)</span>
                    </li>
                    <li>
                      <a href='#'>Tommy Bahama</a>
                      <span>(42)</span>
                    </li>
                    <li>
                      <a href='#'>Tommy Hilfiger</a>
                      <span>(289)</span>
                    </li>
                    <li>
                      <a href='#'>Valentino</a>
                      <span>(68)</span>
                    </li> */}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
        <ShopCategories />
        <MobileMenu />
        <Topbar />
        <Navbar />
        <div className='offcanvas-wrapper'>
          <PageTitle title='Shop Categories' />
          <div className='container padding-bottom-2x mb-2'>
            <div className='row'>
              <div className='col-lg-3'>
                <button
                  className='sidebar-toggle position-left'
                  data-toggle='modal'
                  data-target='#modalShopCategories'
                >
                  <i className='icon-layout'> </i>
                </button>
                <aside className='sidebar sidebar-offcanvas'>
                  <section className='widget widget-categories'>
                    <h3 className='widget-title'>Popular Brands</h3>
                    <ul>
                      <li>
                        <a href='#'>Adidas</a>
                        <span>(254)</span>
                      </li>
                      <li>
                        <a href='#'>Bilabong</a>
                        <span>(39)</span>
                      </li>
                      <li>
                        <a href='#'>Brooks</a>
                        <span>(205)</span>
                      </li>
                      <li>
                        <a href='#'>Calvin Klein</a>
                        <span>(128)</span>
                      </li>
                      <li>
                        <a href='#'>Cole Haan</a>
                        <span>(104)</span>
                      </li>
                      <li>
                        <a href='#'>Columbia</a>
                        <span>(217)</span>
                      </li>
                      <li>
                        <a href='#'>New Balance</a>
                        <span>(95)</span>
                      </li>
                      <li>
                        <a href='#'>Nike</a>
                        <span>(310)</span>
                      </li>
                      <li>
                        <a href='#'>Nine West</a>
                        <span>(134)</span>
                      </li>
                      <li>
                        <a href='#'>Oakley</a>
                        <span>(73)</span>
                      </li>
                      <li>
                        <a href='#'>Puma</a>
                        <span>(446)</span>
                      </li>
                      <li>
                        <a href='#'>Scechers</a>
                        <span>(87)</span>
                      </li>
                      <li>
                        <a href='#'>Tommy Bahama</a>
                        <span>(42)</span>
                      </li>
                      <li>
                        <a href='#'>Tommy Hilfiger</a>
                        <span>(289)</span>
                      </li>
                      <li>
                        <a href='#'>Valentino</a>
                        <span>(68)</span>
                      </li>
                    </ul>
                  </section>
                </aside>
              </div>
              <div className='col-lg-9'>
                <div
                  className='alert alert-image-bg alert-dismissible fade show text-center mb-4'
                  id='alert'
                >
                  <span
                    className='alert-close text-white'
                    data-dismiss='alert'
                  ></span>
                  <div className='h3 text-medium text-white padding-top-1x padding-bottom-1x'>
                    <i
                      className='icon-clock'
                      style={{ fontSize: '33px', marginTop: '-5px' }}
                    ></i>
                    &nbsp;&nbsp;Check our Limited Offers. Save up to
                    50%&nbsp;&nbsp;&nbsp;
                    <div className='mt-3 hidden-xl-up'></div>
                    <a className='btn btn-primary' href='#'>
                      View Offers
                    </a>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-sm-6'>
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
                  <div className='col-sm-6'>
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
                  <div className='col-sm-6'>
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
                        <h4 className='card-title'>Bags</h4>
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
                  <div className='col-sm-6'>
                    <div className='card mb-30'>
                      <a className='card-img-tiles' href='shop-grid-ls.html'>
                        <div className='inner'>
                          <div className='main-img'>
                            <img
                              src={require('../../../../assets/img/shop/categories/10.jpg')}
                              alt='Category'
                            />
                          </div>
                          <div className='thumblist'>
                            <img
                              src={require('../../../../assets/img/shop/categories/11.jpg')}
                              alt='Category'
                            />
                            <img
                              src={require('../../../../assets/img/shop/categories/12.jpg')}
                              alt='Category'
                            />
                          </div>
                        </div>
                      </a>
                      <div className='card-body text-center'>
                        <h4 className='card-title'>Hats</h4>
                        <p className='text-muted'>Starting from $14.50</p>
                        <a
                          className='btn btn-outline-primary btn-sm'
                          href='shop-grid-ls.html'
                        >
                          View Products
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='card mb-30'>
                      <a className='card-img-tiles' href='shop-grid-ls.html'>
                        <div className='inner'>
                          <div className='main-img'>
                            <img
                              src={require('../../../../assets/img/shop/categories/13.jpg')}
                              alt='Category'
                            />
                          </div>
                          <div className='thumblist'>
                            <img
                              src={require('../../../../assets/img/shop/categories/14.jpg')}
                              alt='Category'
                            />
                            <img
                              src={require('../../../../assets/img/shop/categories/15.jpg')}
                              alt='Category'
                            />
                          </div>
                        </div>
                      </a>
                      <div className='card-body text-center'>
                        <h4 className='card-title'>Sunglasses</h4>
                        <p className='text-muted'>Starting from $35.99</p>
                        <a
                          className='btn btn-outline-primary btn-sm'
                          href='shop-grid-ls.html'
                        >
                          View Products
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='col-sm-6'>
                    <div className='card mb-30'>
                      <a className='card-img-tiles' href='shop-grid-ls.html'>
                        <div className='inner'>
                          <div className='main-img'>
                            <img
                              src={require('../../../../assets/img/shop/categories/16.jpg')}
                              alt='Category'
                            />
                          </div>
                          <div className='thumblist'>
                            <img
                              src={require('../../../../assets/img/shop/categories/17.jpg')}
                              alt='Category'
                            />
                            <img
                              src={require('../../../../assets/img/shop/categories/18.jpg')}
                              alt='Category'
                            />
                          </div>
                        </div>
                      </a>
                      <div className='card-body text-center'>
                        <h4 className='card-title'>Watches</h4>
                        <p className='text-muted'>Starting from $79.99</p>
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

export default Categories
