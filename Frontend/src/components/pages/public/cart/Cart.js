import React, { Component } from 'react'
import ShopCategories from '../../../ShopCategories'
import MobileMenu from '../../../MobileMenu'
import Topbar from '../../../Topbar'
import Navbar from '../../../Navbar'
import PageTitle from '../../../PageTitle'
import Footer from '../../../Footer'
import ScrollTop from '../../../ScrollTop'

export class Cart extends Component {
  render() {
    return (
      <div>
        <ShopCategories />
        <MobileMenu />
        <Topbar />
        <Navbar />
        <div className='offcanvas-wrapper'>
          <PageTitle title='Cart' />
          <div className='container padding-bottom-3x mb-1'>
            <div className='table-responsive shopping-cart'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th className='text-center'>Quantity</th>
                    <th className='text-center'>Subtotal</th>
                    <th className='text-center'>Discount</th>
                    <th className='text-center'>
                      <a className='btn btn-sm btn-outline-danger' href='#'>
                        Clear Cart
                      </a>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className='product-item'>
                        <a className='product-thumb' href='shop-single.html'>
                          <img
                            src={require('../../../../assets/img/shop/cart/01.jpg')}
                            alt='Product'
                          />
                        </a>
                        <div className='product-info'>
                          <h4 className='product-title'>
                            <a href='shop-single.html'>Unionbay Park</a>
                          </h4>
                          <span>
                            <em>Size:</em> 10.5
                          </span>
                          <span>
                            <em>Color:</em> Dark Blue
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='text-center'>
                      <div className='count-input'>
                        <select className='form-control'>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </td>
                    <td className='text-center text-lg text-medium'>$43.90</td>
                    <td className='text-center text-lg text-medium'>$18.00</td>
                    <td className='text-center'>
                      <a
                        className='remove-from-cart'
                        href='#'
                        data-toggle='tooltip'
                        title='Remove item'
                      >
                        <i className='icon-cross'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='product-item'>
                        <a className='product-thumb' href='shop-single.html'>
                          <img
                            src={require('../../../../assets/img/shop/cart/02.jpg')}
                            alt='Product'
                          />
                        </a>
                        <div className='product-info'>
                          <h4 className='product-title'>
                            <a href='shop-single.html'>Daily Fabric Cap</a>
                          </h4>
                          <span>
                            <em>Size:</em> XL
                          </span>
                          <span>
                            <em>Color:</em> Black
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='text-center'>
                      <div className='count-input'>
                        <select className='form-control'>
                          <option>1</option>
                          <option selected>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </td>
                    <td className='text-center text-lg text-medium'>$24.89</td>
                    <td className='text-center'>&mdash;</td>
                    <td className='text-center'>
                      <a
                        className='remove-from-cart'
                        href='#'
                        data-toggle='tooltip'
                        title='Remove item'
                      >
                        <i className='icon-cross'></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className='product-item'>
                        <a className='product-thumb' href='shop-single.html'>
                          <img
                            src={require('../../../../assets/img/shop/cart/03.jpg')}
                            alt='Product'
                          />
                        </a>
                        <div className='product-info'>
                          <h4 className='product-title'>
                            <a href='shop-single.html'>Cole Haan Crossbody</a>
                          </h4>
                          <span>
                            <em>Size:</em> -
                          </span>
                          <span>
                            <em>Color:</em> Turquoise
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='text-center'>
                      <div className='count-input'>
                        <select className='form-control'>
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </td>
                    <td className='text-center text-lg text-medium'>$200.00</td>
                    <td className='text-center'>&mdash;</td>
                    <td className='text-center'>
                      <a
                        className='remove-from-cart'
                        href='#'
                        data-toggle='tooltip'
                        title='Remove item'
                      >
                        <i className='icon-cross'></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='shopping-cart-footer'>
              <div className='column'>
                <form className='coupon-form' method='post'>
                  <input
                    className='form-control form-control-sm'
                    type='text'
                    placeholder='Coupon code'
                    required
                  />
                  <button
                    className='btn btn-outline-primary btn-sm'
                    type='submit'
                  >
                    Apply Coupon
                  </button>
                </form>
              </div>
              <div className='column text-lg'>
                Subtotal: <span className='text-medium'>$289.68</span>
              </div>
            </div>
            <div className='shopping-cart-footer'>
              <div className='column'>
                <a
                  className='btn btn-outline-secondary'
                  href='shop-grid-ls.html'
                >
                  <i className='icon-arrow-left'></i>&nbsp;Back to Shopping
                </a>
              </div>
              <div className='column'>
                <a
                  className='btn btn-primary'
                  href='#'
                  data-toast
                  data-toast-type='success'
                  data-toast-position='topRight'
                  data-toast-icon='icon-circle-check'
                  data-toast-title='Your cart'
                  data-toast-message='is updated successfully!'
                >
                  Update Cart
                </a>
                <a className='btn btn-success' href='checkout-address.html'>
                  Checkout
                </a>
              </div>
            </div>
            <h3 className='text-center padding-top-2x mt-2 padding-bottom-1x'>
              You May Also Like
            </h3>
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
          </div>
          <Footer />
        </div>
        <ScrollTop />
      </div>
    )
  }
}

export default Cart
