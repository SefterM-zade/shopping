import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  state = {
    searchVisible: false,
    search: '',
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  searchFormClassName = () => {
    return this.state.searchVisible === true
      ? 'site-search search-visible'
      : 'site-search'
  }

  showSearchInput = () => {
    this.setState({ searchVisible: true })
  }

  hideSearchInput = () => {
    this.setState({ searchVisible: false })
  }

  clearSearhcInput = () => {
    this.setState({ search: '' })
  }

  onSearchSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.search)
  }

  activeNavLink = (path) => {
    return path === this.props.pathname ? 'active' : ''
  }

  render() {
    return (
      <div>
        <div>
          <header className='navbar navbar-sticky'>
            <form
              className={this.searchFormClassName()}
              onSubmit={this.onSearchSubmit}
            >
              <input
                type='text'
                name='search'
                value={this.state.search}
                onChange={this.onChange}
                placeholder='Type to search...'
              />
              <div className='search-tools'>
                <span className='clear-search' onClick={this.clearSearhcInput}>
                  Clear
                </span>
                <span className='close-search' onClick={this.hideSearchInput}>
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
                <li className={this.activeNavLink('/')}>
                  <Link to='/'>
                    <span>Home</span>
                  </Link>
                </li>
                <li className={this.activeNavLink('/shop')}>
                  <Link to='/shop'>
                    <span>Shop</span>
                  </Link>
                </li>
                <li className={this.activeNavLink('/about')}>
                  <Link to='/about'>
                    <span>About</span>
                  </Link>
                </li>
                <li className={this.activeNavLink('/contact')}>
                  <Link to='/contact'>
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className='toolbar'>
              <div className='inner'>
                <div className='tools'>
                  <div className='search' onClick={this.showSearchInput}>
                    <i className='icon-search'></i>
                  </div>
                  {/* <div className='account'>
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
                  </div> */}
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

export default Navbar
