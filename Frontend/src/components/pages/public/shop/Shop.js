import React, { Component } from 'react'
import './Shop.css'
import ScrollTop from '../../../ScrollTop'
import Footer from '../../../Footer'
import PageTitle from '../../../PageTitle'
import MobileMenu from '../../../MobileMenu'
import Topbar from '../../../Topbar'
import Navbar from '../../../Navbar'
import ShopCategories from '../../../ShopCategories'
import Product from '../../../Product'

export class Shop extends Component {
  state = {
    products: [],
    brands: [],
    sizes: [],
    colors: [],
    categories: [],
    search: '',
    currentSort: '',
    currentSortDir: '',
    sorts: [
      {
        name: 'rating',
        dir: 'desc',
      },
      {
        name: 'name',
        dir: 'asc',
      },
      {
        name: 'name',
        dir: 'desc',
      },
      {
        name: 'price',
        dir: 'asc',
      },
      {
        name: 'price',
        dir: 'desc',
      },
    ],
    filterSizes: [],
    filterBrands: [],
    filterColors: [],
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  onClickSort = (sort) => {
    console.log(sort)
  }

  sortDropItem = (sort) => {
    if (sort.name === 'name') {
      if (sort.dir === 'asc') {
        return (
          <button
            class='dropdown-item'
            style={{ fontWeight: '500' }}
            onClick={() => this.sortProducts(sort)}
          >
            {sort.name.toUpperCase()} (A-Z)
          </button>
        )
      } else {
        return (
          <button
            class='dropdown-item'
            style={{ fontWeight: '500' }}
            onClick={() => this.sortProducts(sort)}
          >
            {sort.name.toUpperCase()} (Z-A)
          </button>
        )
      }
    } else if (sort.name === 'price') {
      if (sort.dir === 'asc') {
        return (
          <button
            class='dropdown-item'
            style={{ fontWeight: '500' }}
            onClick={() => this.sortProducts(sort)}
          >
            {sort.name.toUpperCase()} (LOW - HIGH)
          </button>
        )
      } else {
        return (
          <button
            class='dropdown-item'
            style={{ fontWeight: '500' }}
            onClick={() => this.sortProducts(sort)}
          >
            {sort.name.toUpperCase()} (HIGH - LOW)
          </button>
        )
      }
    } else {
      return (
        <button
          class='dropdown-item'
          style={{ fontWeight: '500' }}
          onClick={() => this.sortProducts(sort)}
        >
          {sort.name.toUpperCase()}
        </button>
      )
    }
  }

  onSizesChange = (s) => {
    let isExists = false
    let sizes = this.state.filterSizes

    for (let size of this.state.filterSizes) {
      if (size === s) {
        isExists = true
        break
      }
    }

    if (isExists) {
      sizes = sizes.filter((size) => size !== s)
    } else {
      sizes.push(s)
    }
    this.setState({ filterSizes: sizes })
  }

  onBrandsChange = (b) => {
    let isExists = false
    let brands = this.state.filterBrands

    for (let brand of this.state.filterBrands) {
      if (brand === b) {
        isExists = true
        break
      }
    }

    if (isExists) {
      brands = brands.filter((brand) => brand !== b)
    } else {
      brands.push(b)
    }

    this.setState({ filterBrands: brands })

    this.filterProductsByBrands(this.state.products, brands)
  }

  onColorsChange = (c) => {
    let isExists = false

    let colors = this.state.filterColors

    for (const color of this.state.filterColors) {
      if (color === c) {
        isExists = true
        break
      }
    }

    if (isExists) {
      colors = colors.filter((color) => color !== c)
    } else {
      colors.push(c)
    }

    this.setState({ filterColors: colors })

    this.filterProductsByColors(this.state.products, colors)
  }

  sortProducts = (sort) => {
    this.setState({ currentSort: sort.name, currentSortDir: sort.dir })
  }

  static getDerivedStateFromProps(props, state) {
    if (props.products !== state.products && props.products != null) {
      if (props.brands !== state.brands && props.brands != null) {
        if (props.sizes !== state.sizes && props.sizes !== null) {
          if (props.colors !== state.colors && props.colors !== null) {
            return {
              brands: props.brands,
              products: props.products,
              sizes: props.sizes,
              colors: props.colors,
            }
          }
          return {
            brands: props.brands,
            products: props.products,
            sizes: props.sizes,
          }
        }

        return {
          brands: props.brands,
          products: props.products,
        }
      }

      return {
        products: props.products,
      }
    }

    return null
  }

  filterProductsByCategory = (products, category) => {
    let returnValue = products.filter((product) =>
      this.isIncludes(product.categories, category)
    )

    return returnValue
  }

  filterProductsBySizes = (products, sizes) => {
    let returnValue = products.filter((product) => {
      for (const size of product.sizes) {
        if (this.isIncludes(sizes, size)) return product
      }
    })

    return returnValue
  }

  filterProductsByBrands = (products, brands) => {
    let returnValue = products.filter((product) =>
      this.isIncludes(brands, product.brand)
    )

    return returnValue
  }

  filterProductsByColors = (products, colors) => {
    let returnValue = products.filter((product) => {
      for (const color of product.colors) {
        if (this.isIncludes(colors, color)) return product
      }
    })

    return returnValue
  }

  isIncludes = (array, item) => {
    for (const i of array) {
      if (i.publicId === item.publicId) return true
    }
    return false
  }

  render() {
    let sortedProducts = this.state.products.sort((a, b) => {
      let modifier = 1

      if (this.state.currentSortDir === 'desc') modifier = -1

      if (a[this.state.currentSort] < b[this.state.currentSort])
        return -1 * modifier

      if (a[this.state.currentSort] > b[this.state.currentSort])
        return 1 * modifier

      return 0
    })

    let filteredProductsBySearch = sortedProducts.filter((product) => {
      if (
        product.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !==
        -1
      )
        return product
    })

    // let filteredProductsBySizes = filteredProductsBySearch.filter

    let showedSort = this.state.sorts.filter((sort) => {
      if (sort.name === this.state.currentSort) {
        if (sort.dir !== this.state.currentSortDir) {
          return sort
        }
      } else return sort
    })

    return (
      <div>
        <div className='modal fade' id='modalShopFilters' tabindex='-1'>
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h4 className='modal-title'>Shop Filters</h4>
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
                {/* <!-- Widget Categories--> */}
                <section className='widget widget-categories'>
                  <h3 className='widget-title'>Shop Categories</h3>
                  <ul>
                    <li className='has-children expanded'>
                      <a href='#'>Shoes</a>
                      <span>(1138)</span>
                      <ul>
                        <li>
                          <a href='#'>Women's</a>
                          <span>(508)</span>
                          <ul>
                            <li>
                              <a href='#'>Sneakers</a>
                            </li>
                            <li>
                              <a href='#'>Heels</a>
                            </li>
                            <li>
                              <a href='#'>Loafers</a>
                            </li>
                            <li>
                              <a href='#'>Sandals</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='#'>Men's</a>
                          <span>(423)</span>
                          <ul>
                            <li>
                              <a href='#'>Boots</a>
                            </li>
                            <li>
                              <a href='#'>Oxfords</a>
                            </li>
                            <li>
                              <a href='#'>Loafers</a>
                            </li>
                            <li>
                              <a href='#'>Sandals</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='#'>Boy's Shoes</a>
                          <span>(97)</span>
                        </li>
                        <li>
                          <a href='#'>Girl's Shoes</a>
                          <span>(110)</span>
                        </li>
                      </ul>
                    </li>
                    <li className='has-children'>
                      <a href='#'>Clothing</a>
                      <span>(2356)</span>
                      <ul>
                        <li>
                          <a href='#'>Women's</a>
                          <span>(1032)</span>
                          <ul>
                            <li>
                              <a href='#'>Dresses</a>
                            </li>
                            <li>
                              <a href='#'>Shirts &amp; Tops</a>
                            </li>
                            <li>
                              <a href='#'>Swimwear</a>
                            </li>
                            <li>
                              <a href='#'>Shorts</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='#'>Men's</a>
                          <span>(937)</span>
                          <ul>
                            <li>
                              <a href='#'>Shirts &amp; Tops</a>
                            </li>
                            <li>
                              <a href='#'>Shorts</a>
                            </li>
                            <li>
                              <a href='#'>Swimwear</a>
                            </li>
                            <li>
                              <a href='#'>Pants</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href='#'>Kid's Clothing</a>
                          <span>(386)</span>
                        </li>
                      </ul>
                    </li>
                    <li className='has-children'>
                      <a href='#'>Bags</a>
                      <span>(420)</span>
                      <ul>
                        <li>
                          <a href='#'>Handbags</a>
                          <span>(180)</span>
                        </li>
                        <li>
                          <a href='#'>Backpacks</a>
                          <span>(132)</span>
                        </li>
                        <li>
                          <a href='#'>Wallets &amp; Accessories</a>
                          <span>(47)</span>
                        </li>
                        <li>
                          <a href='#'>Luggage</a>
                          <span>(61)</span>
                        </li>
                      </ul>
                    </li>
                    <li className='has-children'>
                      <a href='#'>Accessories</a>
                      <span>(874)</span>
                      <ul>
                        <li>
                          <a href='#'>Sunglasses</a>
                          <span>(211)</span>
                        </li>
                        <li>
                          <a href='#'>Hats</a>
                          <span>(195)</span>
                        </li>
                        <li>
                          <a href='#'>Watches</a>
                          <span>(159)</span>
                        </li>
                        <li>
                          <a href='#'>Jewelry</a>
                          <span>(203)</span>
                        </li>
                        <li>
                          <a href='#'>Belts</a>
                          <span>(106)</span>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </section>
                {/* <!-- Widget Price Range--> */}
                {/* <section className='widget widget-categories'>
                  <h3 className='widget-title'>Price Range</h3>
                  <form
                    className='price-range-slider'
                    method='post'
                    data-start-min='250'
                    data-start-max='650'
                    data-min='0'
                    data-max='1000'
                    data-step='1'
                  >
                    <div className='ui-range-slider'></div>
                    <footer className='ui-range-slider-footer'>
                      <div className='column'>
                        <button
                          className='btn btn-outline-primary btn-sm'
                          type='submit'
                        >
                          Filter
                        </button>
                      </div>
                      <div className='column'>
                        <div className='ui-range-values'>
                          <div className='ui-range-value-min'>
                            $<span></span>
                            <input type='hidden' />
                          </div>
                          &nbsp;-&nbsp;
                          <div className='ui-range-value-max'>
                            $<span></span>
                            <input type='hidden' />
                          </div>
                        </div>
                      </div>
                    </footer>
                  </form>
                </section> */}
                {/* <!-- Widget Brand Filter--> */}
                <section className='widget'>
                  <h3 className='widget-title'>Filter by Brand</h3>
                  <div className='custom-control custom-checkbox'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      id='adidas2'
                    />
                    <label className='custom-control-label' for='adidas2'>
                      Adidas&nbsp;<span className='text-muted'>(254)</span>
                    </label>
                  </div>
                  <div className='custom-control custom-checkbox'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      id='bilabong2'
                    />
                    <label className='custom-control-label' for='bilabong2'>
                      Bilabong&nbsp;<span className='text-muted'>(39)</span>
                    </label>
                  </div>
                  <div className='custom-control custom-checkbox'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      id='klein2'
                    />
                    <label className='custom-control-label' for='klein2'>
                      Calvin Klein&nbsp;
                      <span className='text-muted'>(128)</span>
                    </label>
                  </div>
                  <div className='custom-control custom-checkbox'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      id='nike2'
                    />
                    <label className='custom-control-label' for='nike2'>
                      Nike&nbsp;<span className='text-muted'>(310)</span>
                    </label>
                  </div>
                  <div className='custom-control custom-checkbox'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      id='bahama2'
                    />
                    <label className='custom-control-label' for='bahama2'>
                      Tommy Bahama&nbsp;<span className='text-muted'>(42)</span>
                    </label>
                  </div>
                </section>
                {/* <!-- Widget Size Filter--> */}
                <section className='widget'>
                  <h3 className='widget-title'>Filter by Size</h3>
                  <div className='custom-control custom-checkbox'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      id='xl2'
                    />
                    <label className='custom-control-label' for='xl2'>
                      XL&nbsp;<span className='text-muted'>(208)</span>
                    </label>
                  </div>
                  <div className='custom-control custom-checkbox'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      id='l2'
                    />
                    <label className='custom-control-label' for='l2'>
                      L&nbsp;<span className='text-muted'>(311)</span>
                    </label>
                  </div>
                  <div className='custom-control custom-checkbox'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      id='m2'
                    />
                    <label className='custom-control-label' for='m2'>
                      M&nbsp;<span className='text-muted'>(485)</span>
                    </label>
                  </div>
                  <div className='custom-control custom-checkbox'>
                    <input
                      className='custom-control-input'
                      type='checkbox'
                      id='s2'
                    />
                    <label className='custom-control-label' for='s2'>
                      S&nbsp;<span className='text-muted'>(213)</span>
                    </label>
                  </div>
                </section>
                {/* <!-- Promo Banner--> */}
                <section id='promo-box-1' className='promo-box'>
                  {/* <!-- Choose between .overlay-dark (#000) or .overlay-light (#fff) with default opacity of 50%. You can overrride default color and opacity values via 'style' attribute.--> */}
                  <span
                    className='overlay-dark'
                    style={{ opacity: '.45' }}
                  ></span>
                  <div className='promo-box-content text-center padding-top-3x padding-bottom-2x'>
                    <h4 className='text-light text-thin text-shadow'>
                      New Collection of
                    </h4>
                    <h3 className='text-bold text-light text-shadow'>
                      Sunglassess
                    </h3>
                    <a className='btn btn-sm btn-primary' href='#'>
                      Shop Now
                    </a>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Off-Canvas Category Menu--> */}
        <ShopCategories />
        {/* <!-- Off-Canvas Mobile Menu--> */}
        <MobileMenu />
        {/* <!-- Topbar--> */}
        <Topbar />
        {/* <!-- Navbar--> */}
        {/* <!-- Remove "navbar-sticky" className to make navigation bar scrollable with the page.--> */}
        <Navbar pathname={this.props.location.pathname} />
        {/* <!-- Off-Canvas Wrapper--> */}
        <div className='offcanvas-wrapper'>
          <PageTitle title='Shop' />
          {/* <!-- Page Content--> */}
          <div className='container padding-bottom-3x mb-1'>
            <div className='row'>
              {/* <!-- Products--> */}
              <div className='col-xl-9 col-lg-8 order-lg-2'>
                {/* <!-- Shop Toolbar--> */}
                <div className='shop-toolbar padding-bottom-1x mb-2'>
                  <div className='column'>
                    <div className='shop-sorting'>
                      <div class='btn-group'>
                        <button
                          class='btn btn-outline-secondary dropdown-toggle'
                          type='button'
                          data-toggle='dropdown'
                        >
                          Sorting By {this.state.currentSort.toUpperCase()}
                        </button>
                        <div class='dropdown-menu'>
                          {showedSort.map((sort) => this.sortDropItem(sort))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='column'>
                    <div className='shop-sorting'>
                      <label
                        for='search'
                        style={{
                          color: '#606975',
                          fontWeight: '500',
                          textTransform: 'uppercase',
                        }}
                      >
                        Search:
                      </label>
                      <input
                        class='form-control'
                        type='text'
                        id='search'
                        value={this.state.search}
                        onChange={this.onChange}
                        name='search'
                        placeholder='Type Product Name...'
                      />
                    </div>
                  </div>
                </div>
                {/* <!-- Products Grid--> */}
                <div className='isotope-grid cols-3 mb-2'>
                  <div className='gutter-sizer'></div>
                  <div className='grid-sizer'></div>
                  {filteredProductsBySearch.map((product) => (
                    <Product product={product} />
                  ))}
                </div>
                {/* <!-- Pagination--> */}
                <nav className='pagination'>
                  <div className='column'>
                    <ul className='pages'>
                      <li className='active'>
                        <a href='#'>1</a>
                      </li>
                      <li>
                        <a href='#'>2</a>
                      </li>
                      <li>
                        <a href='#'>3</a>
                      </li>
                      <li>
                        <a href='#'>4</a>
                      </li>
                      <li>...</li>
                      <li>
                        <a href='#'>12</a>
                      </li>
                    </ul>
                  </div>
                  <div className='column text-right hidden-xs-down'>
                    <a className='btn btn-outline-secondary btn-sm' href='#'>
                      Next&nbsp;<i className='icon-arrow-right'></i>
                    </a>
                  </div>
                </nav>
              </div>
              {/* <!-- Sidebar          --> */}
              <div className='col-xl-3 col-lg-4 order-lg-1'>
                <button
                  className='sidebar-toggle position-left'
                  data-toggle='modal'
                  data-target='#modalShopFilters'
                >
                  <i className='icon-layout'></i>
                </button>
                <aside className='sidebar sidebar-offcanvas'>
                  {/* <!-- Widget Categories--> */}
                  <section className='widget widget-categories'>
                    <h3 className='widget-title'>Shop Categories</h3>
                    <ul>
                      <li className='has-children expanded'>
                        <a href='#'>Shoes</a>
                        <span>(1138)</span>
                        <ul>
                          <li>
                            <a href='#'>Women's</a>
                            <span>(508)</span>
                            <ul>
                              <li>
                                <a href='#'>Sneakers</a>
                              </li>
                              <li>
                                <a href='#'>Heels</a>
                              </li>
                              <li>
                                <a href='#'>Loafers</a>
                              </li>
                              <li>
                                <a href='#'>Sandals</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>Men's</a>
                            <span>(423)</span>
                            <ul>
                              <li>
                                <a href='#'>Boots</a>
                              </li>
                              <li>
                                <a href='#'>Oxfords</a>
                              </li>
                              <li>
                                <a href='#'>Loafers</a>
                              </li>
                              <li>
                                <a href='#'>Sandals</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>Boy's Shoes</a>
                            <span>(97)</span>
                          </li>
                          <li>
                            <a href='#'>Girl's Shoes</a>
                            <span>(110)</span>
                          </li>
                        </ul>
                      </li>
                      <li className='has-children'>
                        <a href='#'>Clothing</a>
                        <span>(2356)</span>
                        <ul>
                          <li>
                            <a href='#'>Women's</a>
                            <span>(1032)</span>
                            <ul>
                              <li>
                                <a href='#'>Dresses</a>
                              </li>
                              <li>
                                <a href='#'>Shirts &amp; Tops</a>
                              </li>
                              <li>
                                <a href='#'>Swimwear</a>
                              </li>
                              <li>
                                <a href='#'>Shorts</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>Men's</a>
                            <span>(937)</span>
                            <ul>
                              <li>
                                <a href='#'>Shirts &amp; Tops</a>
                              </li>
                              <li>
                                <a href='#'>Shorts</a>
                              </li>
                              <li>
                                <a href='#'>Swimwear</a>
                              </li>
                              <li>
                                <a href='#'>Pants</a>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a href='#'>Kid's Clothing</a>
                            <span>(386)</span>
                          </li>
                        </ul>
                      </li>
                      <li className='has-children'>
                        <a href='#'>Bags</a>
                        <span>(420)</span>
                        <ul>
                          <li>
                            <a href='#'>Handbags</a>
                            <span>(180)</span>
                          </li>
                          <li>
                            <a href='#'>Backpacks</a>
                            <span>(132)</span>
                          </li>
                          <li>
                            <a href='#'>Wallets &amp; Accessories</a>
                            <span>(47)</span>
                          </li>
                          <li>
                            <a href='#'>Luggage</a>
                            <span>(61)</span>
                          </li>
                        </ul>
                      </li>
                      <li className='has-children'>
                        <a href='#'>Accessories</a>
                        <span>(874)</span>
                        <ul>
                          <li>
                            <a href='#'>Sunglasses</a>
                            <span>(211)</span>
                          </li>
                          <li>
                            <a href='#'>Hats</a>
                            <span>(195)</span>
                          </li>
                          <li>
                            <a href='#'>Watches</a>
                            <span>(159)</span>
                          </li>
                          <li>
                            <a href='#'>Jewelry</a>
                            <span>(203)</span>
                          </li>
                          <li>
                            <a href='#'>Belts</a>
                            <span>(106)</span>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </section>
                  {/* <!-- Widget Price Range--> */}
                  <section className='widget widget-categories'>
                    <h3 className='widget-title'>Price Range</h3>
                    <form
                      className='price-range-slider'
                      method='post'
                      data-start-min='250'
                      data-start-max='650'
                      data-min='0'
                      data-max='1000'
                      data-step='1'
                    >
                      <div className='ui-range-slider'></div>
                      <footer className='ui-range-slider-footer'>
                        <div className='column'>
                          <button
                            className='btn btn-outline-primary btn-sm'
                            type='submit'
                          >
                            Filter
                          </button>
                        </div>
                        <div className='column'>
                          <div className='ui-range-values'>
                            <div className='ui-range-value-min'>
                              $<span></span>
                              <input type='hidden' />
                            </div>
                            &nbsp;-&nbsp;
                            <div className='ui-range-value-max'>
                              $<span></span>
                              <input type='hidden' />
                            </div>
                          </div>
                        </div>
                      </footer>
                    </form>
                  </section>
                  {/* <!-- Widget Brand Filter--> */}
                  <section className='widget'>
                    <h3 className='widget-title'>Filter by Brand</h3>

                    {this.state.brands.map((brand) => (
                      <div className='custom-control custom-checkbox'>
                        <input
                          className='custom-control-input'
                          type='checkbox'
                          id={brand.publicId}
                          onChange={() => this.onBrandsChange(brand)}
                        />
                        <label
                          className='custom-control-label'
                          htmlFor={brand.publicId}
                        >
                          {brand.name}&nbsp;
                          <span className='text-muted'>(254)</span>
                        </label>
                      </div>
                    ))}
                  </section>
                  {/* <!-- Widget Size Filter--> */}
                  <section className='widget'>
                    <h3 className='widget-title'>Filter by Size</h3>

                    {this.state.sizes.map((size) => (
                      <div className='custom-control custom-checkbox'>
                        <input
                          className='custom-control-input'
                          type='checkbox'
                          id={size.publicId}
                          onChange={() => this.onSizesChange(size)}
                        />
                        <label
                          className='custom-control-label'
                          htmlFor={size.publicId}
                        >
                          {size.name}&nbsp;
                          <span className='text-muted'>(208)</span>
                        </label>
                      </div>
                    ))}
                  </section>
                  <section className='widget'>
                    <h3 className='widget-title'>Filter by Color</h3>

                    {this.state.colors.map((color) => (
                      <div className='custom-control custom-checkbox'>
                        <input
                          className='custom-control-input'
                          type='checkbox'
                          id={color.publicId}
                          onChange={() => this.onColorsChange(color)}
                        />
                        <label
                          className='custom-control-label'
                          htmlFor={color.publicId}
                        >
                          {color.name}&nbsp;
                          <span className='text-muted'>(208)</span>
                        </label>
                      </div>
                    ))}
                  </section>
                  {/* <!-- Promo Banner--> */}
                  <section className='promo-box' id='promo-box-4'>
                    {/* <!-- Choose between .overlay-dark (#000) or .overlay-light (#fff) with default opacity of 50%. You can overrride default color and opacity values via 'style' attribute.--> */}
                    <span
                      className='overlay-dark'
                      style={{ opacity: '.45' }}
                    ></span>
                    <div className='promo-box-content text-center padding-top-3x padding-bottom-2x'>
                      <h4 className='text-light text-thin text-shadow'>
                        New Collection of
                      </h4>
                      <h3 className='text-bold text-light text-shadow'>
                        Sunglassess
                      </h3>
                      <a className='btn btn-sm btn-primary' href='#'>
                        Shop Now
                      </a>
                    </div>
                  </section>
                </aside>
              </div>
            </div>
          </div>
          {/* <!-- Site Footer--> */}
          <Footer />
        </div>
        <ScrollTop />
        //{' '}
      </div>
    )
  }
}

export default Shop
