import React, { Component } from 'react'
import ScrollTop from '../../../ScrollTop'
import ShopCategories from '../../../ShopCategories'
import MobileMenu from '../../../MobileMenu'
import Topbar from '../../../Topbar'
import Navbar from '../../../Navbar'
import Footer from '../../../Footer'
import PageTitle from '../../../PageTitle'
import http from '../../../../services/http'
// import { Redirect } from 'react-router-dom'

export class Login extends Component {
  state = {
    password: '',
    username: '',
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  login = (event) => {
    event.preventDefault()
    // console.log(this.state.username, this.state.password)

    http
      .authenticate(this.state.username, this.state.password)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('token', res.data.jwt)
        this.props.history.push('/admin/shop')
      })
      .catch((err) => console.log(err))
  }

  render() {
    return (
      <div>
        <ShopCategories />
        <MobileMenu />
        <Topbar />
        <Navbar />
        <div class='offcanvas-wrapper'>
          <PageTitle title='Login' />
          <div class='container padding-bottom-3x mb-2'>
            <div class='row'>
              <div class='col-md-6 m-auto'>
                <form class='login-box'>
                  <h4 class='margin-bottom-1x text-center'>Login</h4>
                  <div class='form-group input-group'>
                    <input
                      class='form-control'
                      type='text'
                      placeholder='Username'
                      required
                      value={this.state.username}
                      onChange={this.onChange}
                      name='username'
                    />
                    <span class='input-group-addon'>
                      <i class='icon-head'></i>
                    </span>
                  </div>
                  <div class='form-group input-group'>
                    <input
                      class='form-control'
                      type='password'
                      placeholder='Password'
                      required
                      value={this.state.password}
                      onChange={this.onChange}
                      name='password'
                    />
                    <span class='input-group-addon'>
                      <i class='icon-lock'></i>
                    </span>
                  </div>
                  <div class='text-center text-sm-right'>
                    <button
                      class='btn btn-primary margin-bottom-none'
                      onClick={this.login}
                      type='submit'
                    >
                      Login
                    </button>
                  </div>
                </form>
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

export default Login
