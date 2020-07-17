import React, { Component } from 'react'

export class Product extends Component {
  formatPrice = (price) => {
    return price.toFixed(2)
  }

  state = {
    product: {
      name: '',
      price: 0,
      finalPrice: 0,
      brand: [],
      categories: [],
      sizes: [],
      colors: [],
    },
  }

  static getDerivedStateFromProps(props, state) {
    if (props.product !== state.product && props.product != null) {
      return {
        product: props.product,
      }
    }

    return null
  }

  productStars = (product) => {
    if (product.rating > 0) {
      return (
        <div class='rating-stars'>
          <i class='icon-star filled'></i>
          <i class='icon-star filled'></i>
          <i class='icon-star filled'></i>
          <i class='icon-star filled'></i>
          <i class='icon-star'></i>
        </div>
      )
    } else return <></>
  }

  productPrice = (product) => {
    if (product.finalPrice !== 0) {
      return (
        <h4 className='product-price'>
          <del>${this.formatPrice(product.price)}</del>$
          {this.formatPrice(product.finalPrice)}
        </h4>
      )
    } else {
      return (
        <h4 className='product-price'>${this.formatPrice(product.price)}</h4>
      )
    }
  }

  render() {
    return (
      <div className='grid-item'>
        <div className='product-card'>
          <div className='product-badge text-danger'>50% Off</div>
          {this.productStars(this.state.product)}
          <a className='product-thumb' href='shop-single.html'>
            <img
              src={require('../assets/img/shop/products/01.jpg')}
              alt='Product'
            />
          </a>
          <h3 className='product-title'>
            <a href='shop-single.html'>{this.state.product.name}</a>
          </h3>
          {this.productPrice(this.state.product)}
          <div className='product-buttons'>
            {/* <a class='btn btn-outline-danger btn-sm' href='#'>
              <i class='icon-trash' style={{ fontSize: '1.3em' }}></i>
            </a> */}
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
    )
  }
}

export default Product
