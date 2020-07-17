import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrencyDropdown from './CurrencyDropdown'

export class Topbar extends Component {
  state = {
    showDropdown: false,
  }

  toggleDropdown = () => {
    this.setState((prevState, props) => {
      return { showDropdown: !prevState.showDropdown }
    })
  }

  onBlur = () => {
    console.log('blur')
  }

  render() {
    return (
      <div className='topbar'>
        <div className='topbar-column'>
          <Link className='hidden-md-down' to='mailto:support@unishop.com'>
            <i className='icon-mail'></i>&nbsp; support@unishop.com
          </Link>
          <Link className='hidden-md-down' to='tel:00331697720'>
            <i className='icon-bell'></i>&nbsp; 00 33 169 7720
          </Link>
          <Link
            className='social-button sb-facebook shape-none sb-dark'
            to='#'
            target='_blank'
          >
            <i className='socicon-facebook'></i>
          </Link>
          <Link
            className='social-button sb-twitter shape-none sb-dark'
            to='#'
            target='_blank'
          >
            <i className='socicon-twitter'></i>
          </Link>
          <Link
            className='social-button sb-instagram shape-none sb-dark'
            to='#'
            target='_blank'
          >
            <i className='socicon-instagram'></i>
          </Link>
          <Link
            className='social-button sb-pinterest shape-none sb-dark'
            to='#'
            target='_blank'
          >
            <i className='socicon-pinterest'></i>
          </Link>
        </div>
        <div className='topbar-column'>
          <div
            className='lang-currency-switcher-wrap'
            onClick={this.toggleDropdown}
          >
            <div className='lang-currency-switcher dropdown-toggle'>
              <span className='language'>
                <img
                  alt='English'
                  src={require('../assets/img/flags/GB.png')}
                />
              </span>
              <span className='currency'>$ USD</span>
            </div>
            <CurrencyDropdown
              show={this.state.showDropdown}
              langs={this.props.langs}
              currency={this.props.currency}
              onBlur={this.onBlur}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Topbar
