import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class AdminNavbar extends Component {
  render() {
    return (
      <div>
        <div>
          <header className='navbar navbar-sticky'>
            <form className='site-search' method='get'>
              <input
                type='text'
                name='site_search'
                placeholder='Type to search...'
              />
              <div className='search-tools'>
                <span className='clear-search'>Clear</span>
                <span className='close-search'>
                  <i className='icon-cross'></i>
                </span>
              </div>
            </form>
            <div className='site-branding'>
              <div className='inner'>
                <a
                  className='offcanvas-toggle cats-toggle'
                  href='#shop-categories'
                  data-toggle='offcanvas'
                ></a>

                <a
                  className='offcanvas-toggle menu-toggle'
                  href='#mobile-menu'
                  data-toggle='offcanvas'
                ></a>
                <a className='site-logo' href='index.html'>
                  <img
                    src={require('../assets/img/logo/logo.png')}
                    alt='Unishop'
                  />
                </a>
              </div>
            </div>
            <nav className='site-menu'>
              <ul>
                <li className='has-megamenu'>
                  <NavLink to='/'>
                    <span>Home</span>
                  </NavLink>
                  <ul className='mega-menu'>
                    <li>
                      <a
                        className='d-block img-thumbnail text-center navi-link'
                        href='index.html'
                      >
                        <img
                          alt='Featured Products Slider'
                          src={require('../assets/img/mega-menu-home/01.jpg')}
                        />
                        <h6 className='mt-3'>Featured Products Slider</h6>
                      </a>
                    </li>
                    <li>
                      <a
                        className='d-block img-thumbnail text-center navi-link'
                        href='home-featured-categories.html'
                      >
                        <img
                          alt='Featured Categories'
                          src={require('../assets/img/mega-menu-home/02.jpg')}
                        />
                        <h6 className='mt-3'>Featured Categories</h6>
                      </a>
                    </li>
                    <li>
                      <a
                        className='d-block img-thumbnail text-center navi-link'
                        href='home-collection-showcase.html'
                      >
                        <img
                          alt='Products Collection Showcase'
                          src={require('../assets/img/mega-menu-home/03.jpg')}
                        />
                        <h6 className='mt-3'>Products Collection Showcase</h6>
                      </a>
                    </li>
                    <li>
                      <a
                        className='d-block img-thumbnail text-center navi-link'
                        href='home-dark-header.html'
                      >
                        <img
                          alt='Dark Header'
                          src={require('../assets/img/mega-menu-home/04.jpg')}
                        />
                        <h6 className='mt-3'>Dark Header</h6>
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href='shop-grid-ls.html'>
                    <span>Shop</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='shop-categories.html'>Shop Categories</a>
                    </li>
                    <li className='has-children'>
                      <a href='shop-grid-ls.html'>
                        <span>Shop Grid</span>
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='shop-grid-ls.html'>Grid Left Sidebar</a>
                        </li>
                        <li>
                          <a href='shop-grid-rs.html'>Grid Right Sidebar</a>
                        </li>
                        <li>
                          <a href='shop-grid-ns.html'>Grid No Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li className='has-children'>
                      <a href='shop-list-ls.html'>
                        <span>Shop List</span>
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='shop-list-ls.html'>List Left Sidebar</a>
                        </li>
                        <li>
                          <a href='shop-list-rs.html'>List Right Sidebar</a>
                        </li>
                        <li>
                          <a href='shop-list-ns.html'>List No Sidebar</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href='shop-single.html'>Single Product</a>
                    </li>
                    <li>
                      <a href='cart.html'>Cart</a>
                    </li>
                    <li className='has-children'>
                      <a href='checkout-address.html'>
                        <span>Checkout</span>
                      </a>
                      <ul className='sub-menu'>
                        <li>
                          <a href='checkout-address.html'>Address</a>
                        </li>
                        <li>
                          <a href='checkout-shipping.html'>Shipping</a>
                        </li>
                        <li>
                          <a href='checkout-payment.html'>Payment</a>
                        </li>
                        <li>
                          <a href='checkout-review.html'>Review</a>
                        </li>
                        <li>
                          <a href='checkout-complete.html'>Complete</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className='active'>
                  <a href='#'>
                    <span>Pages</span>
                  </a>
                  <ul className='sub-menu'>
                    <li>
                      <a href='about.html'>About Us</a>
                    </li>
                    <li>
                      <a href='contacts.html'>Contacts</a>
                    </li>
                    <li>
                      <a href='faq.html'>Help / FAQ</a>
                    </li>
                    <li>
                      <a href='order-tracking.html'>Order Tracking</a>
                    </li>
                    <li>
                      <a href='search-results.html'>Search Results</a>
                    </li>
                    <li className='active'>
                      <a href='404.html'>404 Not Found</a>
                    </li>
                    <li>
                      <a href='coming-soon.html'>Coming Soon</a>
                    </li>
                    <li>
                      <a className='text-danger' href='docs/dev-setup.html'>
                        Documentation
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='has-megamenu'>
                  <a href='components/accordion.html'>
                    <span>Components</span>
                  </a>
                  <ul className='mega-menu'>
                    <li>
                      <span className='mega-menu-title'>A - F</span>
                      <ul className='sub-menu'>
                        <li>
                          <a href='components/accordion.html'>Accordion</a>
                        </li>
                        <li>
                          <a href='components/alerts.html'>Alerts</a>
                        </li>
                        <li>
                          <a href='components/buttons.html'>Buttons</a>
                        </li>
                        <li>
                          <a href='components/cards.html'>Cards</a>
                        </li>
                        <li>
                          <a href='components/carousel.html'>Carousel</a>
                        </li>
                        <li>
                          <a href='components/countdown.html'>Countdown</a>
                        </li>
                        <li>
                          <a href='components/forms.html'>Forms</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className='mega-menu-title'>G - M</span>
                      <ul className='sub-menu'>
                        <li>
                          <a href='components/gallery.html'>Gallery</a>
                        </li>
                        <li>
                          <a href='components/google-maps.html'>Google Maps</a>
                        </li>
                        <li>
                          <a href='components/images.html'>
                            Images &amp; Figures
                          </a>
                        </li>
                        <li>
                          <a href='components/list-group.html'>List Group</a>
                        </li>
                        <li>
                          <a href='components/market-social-buttons.html'>
                            Market &amp; Social Buttons
                          </a>
                        </li>
                        <li>
                          <a href='components/media.html'>Media Object</a>
                        </li>
                        <li>
                          <a href='components/modal.html'>Modal</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className='mega-menu-title'>P - T</span>
                      <ul className='sub-menu'>
                        <li>
                          <a href='components/pagination.html'>Pagination</a>
                        </li>
                        <li>
                          <a href='components/pills.html'>Pills</a>
                        </li>
                        <li>
                          <a href='components/progress-bars.html'>
                            Progress Bars
                          </a>
                        </li>
                        <li>
                          <a href='components/shop-items.html'>Shop Items</a>
                        </li>
                        <li>
                          <a href='components/spinners.html'>Spinners</a>
                        </li>
                        <li>
                          <a href='components/steps.html'>Steps</a>
                        </li>
                        <li>
                          <a href='components/tables.html'>Tables</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <span className='mega-menu-title'>T - W</span>
                      <ul className='sub-menu'>
                        <li>
                          <a href='components/tabs.html'>Tabs</a>
                        </li>
                        <li>
                          <a href='components/team.html'>Team</a>
                        </li>
                        <li>
                          <a href='components/toasts.html'>
                            Toast Notifications
                          </a>
                        </li>
                        <li>
                          <a href='components/tooltips-popovers.html'>
                            Tooltips &amp; Popovers
                          </a>
                        </li>
                        <li>
                          <a href='components/typography.html'>Typography</a>
                        </li>
                        <li>
                          <a href='components/video-player.html'>
                            Video Player
                          </a>
                        </li>
                        <li>
                          <a href='components/widgets.html'>Widgets</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            <div className='toolbar'>
              <div className='inner'>
                <div className='tools'>
                  <div className='search'>
                    <i className='icon-search'></i>
                  </div>
                  <div className='account'>
                    <a href='account-orders.html'></a>
                    <i className='icon-head'></i>
                    <ul className='toolbar-dropdown'>
                      <li className='sub-menu-user'>
                        <div className='user-ava'>
                          <img
                            alt='Daniel Adams'
                            src={require('../assets/img/account/user-ava-sm.jpg')}
                          />
                        </div>
                        <div className='user-info'>
                          <h6 className='user-name'>Daniel Adams</h6>
                          <span className='text-xs text-muted'>
                            290 Reward points
                          </span>
                        </div>
                      </li>
                      <li>
                        <a href='account-profile.html'>My Profile</a>
                      </li>
                      <li>
                        <a href='account-orders.html'>Orders List</a>
                      </li>
                      <li>
                        <a href='account-wishlist.html'>Wishlist</a>
                      </li>
                      <li className='sub-menu-separator'></li>
                      <li>
                        <a href='#'>
                          {' '}
                          <i className='icon-unlock'></i>Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className='cart'>
                    <a href='cart.html'></a>
                    <i className='icon-bag'></i>
                    <span className='count'>3</span>
                    <span className='subtotal'>$289.68</span>
                    <div className='toolbar-dropdown'>
                      <div className='dropdown-product-item'>
                        <span className='dropdown-product-remove'>
                          <i className='icon-cross'></i>
                        </span>
                        <a
                          className='dropdown-product-thumb'
                          href='shop-single.html'
                        >
                          <img
                            src={require('../assets/img/cart-dropdown/01.jpg')}
                            alt='Product'
                          />
                        </a>
                        <div className='dropdown-product-info'>
                          <a
                            className='dropdown-product-title'
                            href='shop-single.html'
                          >
                            Unionbay Park
                          </a>
                          <span className='dropdown-product-details'>
                            1 x $43.90
                          </span>
                        </div>
                      </div>
                      <div className='dropdown-product-item'>
                        <span className='dropdown-product-remove'>
                          <i className='icon-cross'></i>
                        </span>
                        <a
                          className='dropdown-product-thumb'
                          href='shop-single.html'
                        >
                          <img
                            src={require('../assets/img/cart-dropdown/02.jpg')}
                            alt='Product'
                          />
                        </a>
                        <div className='dropdown-product-info'>
                          <a
                            className='dropdown-product-title'
                            href='shop-single.html'
                          >
                            Daily Fabric Cap
                          </a>
                          <span className='dropdown-product-details'>
                            2 x $24.89
                          </span>
                        </div>
                      </div>
                      <div className='dropdown-product-item'>
                        <span className='dropdown-product-remove'>
                          <i className='icon-cross'></i>
                        </span>
                        <a
                          className='dropdown-product-thumb'
                          href='shop-single.html'
                        >
                          <img
                            src={require('../assets/img/cart-dropdown/03.jpg')}
                            alt='Product'
                          />
                        </a>
                        <div className='dropdown-product-info'>
                          <a
                            className='dropdown-product-title'
                            href='shop-single.html'
                          >
                            Haan Crossbody
                          </a>
                          <span className='dropdown-product-details'>
                            1 x $200.00
                          </span>
                        </div>
                      </div>
                      <div className='toolbar-dropdown-group'>
                        <div className='column'>
                          <span className='text-lg'>Total:</span>
                        </div>
                        <div className='column text-right'>
                          <span className='text-lg text-medium'>
                            $289.68&nbsp;
                          </span>
                        </div>
                      </div>
                      {/* <div className='toolbar-dropdown-group'>
                        <div className='column'>
                          <a
                            className='btn btn-sm btn-block btn-secondary'
                            href='cart.html'
                          >
                            View Cart
                          </a>
                        </div>
                        <div className='column'>
                          <a
                            className='btn btn-sm btn-block btn-success'
                            href='checkout-address.html'
                          >
                            Checkout
                          </a>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
    )
  }
}

export default AdminNavbar
