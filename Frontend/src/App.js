import React, { Component } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './assets/css/vendor.min.css'
import './assets/css/styles.min.css'

// PUBLIC PAGES
import Index from './components/pages/public/index/Index'
import Shop from './components/pages/public/shop/Shop'
import Category from './components/pages/public/category/Category'
import ProductDetails from './components/pages/public/product-details/ProductDetails'
import Cart from './components/pages/public/cart/Cart'
import About from './components/pages/public/about/About'
import Contact from './components/pages/public/contact/Contact'
import NotFound from './components/pages/public/404/NotFound'
import Login from './components/pages/public/login/Login'

// ADMIN PAGES
import AdminShop from './components/pages/admin/shop/AdminShop'
import AdminProductDetails from './components/pages/admin/product-details/AdminProductDetails'

import Test from './components/Test'
import ProtectedRoute from './components/ProtectedRoute'

import http from './services/http'

export class App extends Component {
  state = {
    products: [],
    brands: [],
    categories: [],
    colors: [],
    sizes: [],
    langs: [
      {
        name: 'English',
        logoSrc: 'FR.png',
      },
      {
        name: 'Russian',
        logoSrc: 'FR.png',
      },
      {
        name: 'Azerbaijan',
        logoSrc: 'FR.png',
      },
    ],
    currency: [
      {
        name: 'USD',
      },
      {
        name: 'AZN',
      },
      {
        name: 'RUB',
      },
    ],
  }

  componentDidMount() {
    // Axios.get('http://localhost:7070/init')
    //   .then((res) => {
    //     this.setState({
    //       products: res.data.products,
    //       brands: res.data.brands,
    //       categories: res.data.categories,
    //       colors: res.data.colors,
    //       sizes: res.data.sizes,
    //     })
    //   })
    //   .catch((err) => console.log(err))

    http
      .getInitialData()
      .then((res) => {
        this.setState({
          products: res.data.products,
          brands: res.data.brands,
          categories: res.data.categories,
          colors: res.data.colors,
          sizes: res.data.sizes,
        })
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route
            path='/'
            exact
            render={(props) => (
              <Index
                {...props}
                langs={this.state.langs}
                currency={this.state.currency}
              />
            )}
          />
          <Route
            path='/shop'
            exact
            render={(props) => (
              <Shop
                {...props}
                products={this.state.products}
                brands={this.state.brands}
                sizes={this.state.sizes}
                colors={this.state.colors}
              />
            )}
          ></Route>
          <Route path='/login' exact component={Login} />
          <Route
            path='/shop-categories'
            exact
            component={Category}
            brands={this.state.brands}
          ></Route>
          <Route path='/shop-product' exact component={ProductDetails}></Route>
          <Route path='/cart' exact component={Cart}></Route>
          <Route path='/about' exact component={About}></Route>
          <Route path='/contact' exact component={Contact}></Route>

          <Route path='/login' exact component={Login} />

          <ProtectedRoute
            path='/admin/shop'
            exact
            component={AdminShop}
            products={this.state.products}
            brands={this.state.brands}
            sizes={this.state.sizes}
            colors={this.state.colors}
          />

          <ProtectedRoute
            path='/admin/product'
            exact
            component={AdminProductDetails}
            products={this.state.products}
            brands={this.state.brands}
            sizes={this.state.sizes}
            colors={this.state.colors}
          />
          <Route path='/test' component={Test} />
          <Route path='*' component={NotFound}></Route>
        </Switch>
      </Router>
    )
  }
}

export default App
