import { Link } from 'react-router-dom'
import React, { Component } from 'react'

export class CurrencyDropdown extends Component {
  onBlur = () => {
    console.log('blur')
  }

  render() {
    if (this.props.show) {
      return (
        <div className='dropdown-menu' style={{ display: 'block' }}>
          <div className='currency-select'>
            <select className='form-control  form-control-sm'>
              {this.props.currency.map((cur, index) => (
                <option value='usd' key={index}>
                  $ {cur.name}
                </option>
              ))}
            </select>
          </div>

          {this.props.langs.map((lang, index) => (
            <Link className='dropdown-item' to='#' key={index}>
              <img
                src={require(`../assets/img/flags/${lang.logoSrc}`)}
                alt={lang.name}
              />
              {lang.name}
            </Link>
          ))}
        </div>
      )
    } else {
      return <></>
    }
  }
}

export default CurrencyDropdown
