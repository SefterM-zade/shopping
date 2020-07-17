import React, { Component } from 'react'

import ShopCategories from '../../../ShopCategories'
import MobileMenu from '../../../MobileMenu'
import Topbar from '../../../Topbar'
import Navbar from '../../../Navbar'
import PageTitle from '../../../PageTitle'
import Footer from '../../../Footer'
import ScrollTop from '../../../ScrollTop'

export class Product extends Component {
  render() {
    return (
      <div>
        <ShopCategories />

        <MobileMenu />

        <Topbar />

        <Navbar />

        <div className='offcanvas-wrapper'>
          <PageTitle title='Product' />

          <div className='container padding-bottom-3x mb-1'>
            <div className='row'>
              <div className='col-md-6'>
                <div className='product-gallery'>
                  <span className='product-badge text-danger'>30% Off</span>
                  <div className='gallery-wrapper'>
                    <div className='gallery-item video-btn text-center'>
                      <a
                        href='#'
                        data-toggle='tooltip'
                        data-type='video'
                        data-video='&lt;div className="wrapper"&gt;&lt;div className="video-wrapper"&gt;&lt;iframe className="pswp__video" width="960" height="640" src="//www.youtube.com/embed/B81qd2v6alw?rel=0" frameborder="0" allowfullscreen&gt;&lt;/iframe&gt;&lt;/div&gt;&lt;/div&gt;'
                        title='Watch video'
                      ></a>
                    </div>
                  </div>
                  <div className='product-carousel owl-carousel gallery-wrapper'>
                    <div className='gallery-item' data-hash='one'>
                      <a href='img/shop/single/01.jpg' data-size='1000x667'>
                        <img
                          src={require('../../../../assets/img/shop/single/01.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='gallery-item' data-hash='two'>
                      <a href='img/shop/single/02.jpg' data-size='1000x667'>
                        <img
                          src={require('../../../../assets/img/shop/single/02.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='gallery-item' data-hash='three'>
                      <a href='img/shop/single/03.jpg' data-size='1000x667'>
                        <img
                          src={require('../../../../assets/img/shop/single/03.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='gallery-item' data-hash='four'>
                      <a href='img/shop/single/04.jpg' data-size='1000x667'>
                        <img
                          src={require('../../../../assets/img/shop/single/04.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                    <div className='gallery-item' data-hash='five'>
                      <a href='img/shop/single/05.jpg' data-size='1000x667'>
                        <img
                          src={require('../../../../assets/img/shop/single/05.jpg')}
                          alt='Product'
                        />
                      </a>
                    </div>
                  </div>
                  <ul className='product-thumbnails'>
                    <li className='active'>
                      <a href='#one'>
                        <img
                          src={require('../../../../assets/img/shop/single/th01.jpg')}
                          alt='Product'
                        />
                      </a>
                    </li>
                    <li>
                      <a href='#two'>
                        <img
                          src={require('../../../../assets/img/shop/single/th02.jpg')}
                          alt='Product'
                        />
                      </a>
                    </li>
                    <li>
                      <a href='#three'>
                        <img
                          src={require('../../../../assets/img/shop/single/th03.jpg')}
                          alt='Product'
                        />
                      </a>
                    </li>
                    <li>
                      <a href='#four'>
                        <img
                          src={require('../../../../assets/img/shop/single/th04.jpg')}
                          alt='Product'
                        />
                      </a>
                    </li>
                    <li>
                      <a href='#five'>
                        <img
                          src={require('../../../../assets/img/shop/single/th05.jpg')}
                          alt='Product'
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='padding-top-2x mt-2 hidden-md-up'></div>
                <div className='rating-stars'>
                  <i className='icon-star filled'></i>
                  <i className='icon-star filled'></i>
                  <i className='icon-star filled'></i>
                  <i className='icon-star filled'></i>
                  <i className='icon-star'></i>
                </div>
                <span className='text-muted align-middle'>
                  &nbsp;&nbsp;4.2 | 3 customer reviews
                </span>
                <h2 className='padding-top-1x text-normal'>
                  Reebok Royal CL Jogger 2
                </h2>
                <span className='h2 d-block'>
                  <del className='text-muted text-normal'>$68.00</del>&nbsp;
                  $47.60
                </span>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dicta voluptatibus quos ea dolore rem, molestias laudantium et
                  explicabo assumenda fugiat deserunt in, facilis laborum
                  excepturi aliquid nobis ipsam deleniti aut? Aliquid sit hic id
                  velit qui fuga nemo suscipit obcaecati. Officia nisi quaerat
                  minus nulla saepe aperiam sint possimus magni veniam
                  provident.
                </p>
                <div className='row margin-top-1x'>
                  <div className='col-sm-4'>
                    <div className='form-group'>
                      <label for='size'>Men's size</label>
                      <select className='form-control' id='size'>
                        <option>Chooze size</option>
                        <option>11.5</option>
                        <option>11</option>
                        <option>10.5</option>
                        <option>10</option>
                        <option>9.5</option>
                        <option>9</option>
                        <option>8.5</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-sm-5'>
                    <div className='form-group'>
                      <label for='color'>Choose color</label>
                      <select className='form-control' id='color'>
                        <option>White/Red/Blue</option>
                        <option>Black/Orange/Green</option>
                        <option>Gray/Purple/White</option>
                      </select>
                    </div>
                  </div>
                  <div className='col-sm-3'>
                    <div className='form-group'>
                      <label for='quantity'>Quantity</label>
                      <select className='form-control' id='quantity'>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='pt-1 mb-2'>
                  <span className='text-medium'>SKU:</span> #21457832
                </div>
                <div className='padding-bottom-1x mb-2'>
                  <span className='text-medium'>Categories:&nbsp;</span>
                  <a className='navi-link' href='#'>
                    Men’s shoes,
                  </a>
                  <a className='navi-link' href='#'>
                    {' '}
                    Snickers,
                  </a>
                  <a className='navi-link' href='#'>
                    {' '}
                    Sport shoes
                  </a>
                </div>
                <hr className='mb-3' />
                <div className='d-flex flex-wrap justify-content-between'>
                  <div className='entry-share mt-2 mb-2'>
                    <span className='text-muted'>Share:</span>
                    <div className='share-links'>
                      <a
                        className='social-button shape-circle sb-facebook'
                        href='#'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Facebook'
                      >
                        <i className='socicon-facebook'></i>
                      </a>
                      <a
                        className='social-button shape-circle sb-twitter'
                        href='#'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Twitter'
                      >
                        <i className='socicon-twitter'></i>
                      </a>
                      <a
                        className='social-button shape-circle sb-instagram'
                        href='#'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Instagram'
                      >
                        <i className='socicon-instagram'></i>
                      </a>
                      <a
                        className='social-button shape-circle sb-google-plus'
                        href='#'
                        data-toggle='tooltip'
                        data-placement='top'
                        title='Google +'
                      >
                        <i className='socicon-googleplus'></i>
                      </a>
                    </div>
                  </div>
                  <div className='sp-buttons mt-2 mb-2'>
                    {/* <button
                      className='btn btn-outline-secondary btn-sm btn-wishlist'
                      data-toggle='tooltip'
                      title='Whishlist'
                    >
                      <i className='icon-heart'></i>
                    </button> */}
                    <button
                      className='btn btn-primary'
                      data-toast
                      data-toast-type='success'
                      data-toast-position='topRight'
                      data-toast-icon='icon-circle-check'
                      data-toast-title='Product'
                      data-toast-message='successfuly added to cart!'
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <i className='icon-bag mr-1'></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className='row padding-top-3x mb-3'>
              <div className='col-lg-10 offset-lg-1'>
                <ul className='nav nav-tabs' role='tablist'>
                  <li className='nav-item'>
                    <a
                      className='nav-link active'
                      href='#description'
                      data-toggle='tab'
                      role='tab'
                    >
                      Description
                    </a>
                  </li>
                  {/* <li className='nav-item'>
                    <a
                      className='nav-link'
                      href='#reviews'
                      data-toggle='tab'
                      role='tab'
                    >
                      Reviews (3)
                    </a>
                  </li> */}
                </ul>
                <div className='tab-content'>
                  <div
                    className='tab-pane fade show active'
                    id='description'
                    role='tabpanel'
                  >
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Error blanditiis a, deserunt magnam pariatur quam suscipit
                      quae. Veniam, deserunt reprehenderit quasi hic recusandae
                      itaque omnis fugiat animi architecto facilis repellendus.
                      Commodi dolorem, eius consectetur. Amet maiores nemo at
                      nobi s aspernatur velit, sequi odio, a veritatis inventore
                      autem esse provident in? Placeat, sunt!
                    </p>
                    <p className='mb-30'>
                      Iste assumenda, vitae, aliquam excepturi libero quia ullam
                      quisquam tenetur id sint labore. Pariatur praesentium
                      velit, fugit facere maxime voluptates optio qui? Quidem
                      obcaecati necessitatibus rem aspernatur, mollitia,
                      assumenda explicabo numquam minus eos sapiente totam
                      dicta, laborum dolorum! Vitae distinctio quos non ut
                      fugiat.
                    </p>
                    <div className='row'>
                      <div className='col-sm-6'>
                        <dl>
                          <dt>Materials:</dt>
                          <dd>Leather, Cotton, Rubber, Foam</dd>
                          <dt>Available Sizes:</dt>
                          <dd>8.5, 9.0, 9.5, 10.0, 10.5, 11.0, 11.5</dd>
                          <dt>Available Colors:</dt>
                          <dd>White/Red/Blue, Black/Orange/Green</dd>
                        </dl>
                      </div>
                      <div className='col-sm-6'>
                        <dl>
                          <dt>Model Year:</dt>
                          <dd>2016</dd>
                          <dt>Manufacturer:</dt>
                          <dd>Reebok Inc.</dd>
                          <dt>Made In:</dt>
                          <dd>Taiwan</dd>
                        </dl>
                      </div>
                    </div>
                  </div>
                  {/* <div className='tab-pane fade' id='reviews' role='tabpanel'>
                    <div className='comment'>
                      <div className='comment-author-ava'>
                        <img
                          src={require('../../../../assets/img/reviews/01.jpg')}
                          alt='Review author'
                        />
                      </div>
                      <div className='comment-body'>
                        <div className='comment-header d-flex flex-wrap justify-content-between'>
                          <h4 className='comment-title'>
                            Average quality for the price
                          </h4>
                          <div className='mb-2'>
                            <div className='rating-stars'>
                              <i className='icon-star filled'></i>
                              <i className='icon-star filled'></i>
                              <i className='icon-star filled'></i>
                              <i className='icon-star'></i>
                              <i className='icon-star'></i>
                            </div>
                          </div>
                        </div>
                        <p className='comment-text'>
                          At vero eos et accusamus et iusto odio dignissimos
                          ducimus qui blanditiis praesentium voluptatum deleniti
                          atque corrupti quos dolores et quas molestias
                          excepturi sint occaecati cupiditate non provident,
                          similique sunt in culpa qui officia deserunt mollitia
                          animi, id est laborum et dolorum fuga.
                        </p>
                        <div className='comment-footer'>
                          <span className='comment-meta'>Francis Burton</span>
                        </div>
                      </div>
                    </div>

                    <div className='comment'>
                      <div className='comment-author-ava'>
                        <img
                          src={require('../../../../assets/img/reviews/02.jpg')}
                          alt='Review author'
                        />
                      </div>
                      <div className='comment-body'>
                        <div className='comment-header d-flex flex-wrap justify-content-between'>
                          <h4 className='comment-title'>
                            My husband love his new...
                          </h4>
                          <div className='mb-2'>
                            <div className='rating-stars'>
                              <i className='icon-star filled'></i>
                              <i className='icon-star filled'></i>
                              <i className='icon-star filled'></i>
                              <i className='icon-star filled'></i>
                              <i className='icon-star filled'></i>
                            </div>
                          </div>
                        </div>
                        <p className='comment-text'>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat.
                        </p>
                        <div className='comment-footer'>
                          <span className='comment-meta'>Maggie Scott</span>
                        </div>
                      </div>
                    </div>

                    <div className='comment'>
                      <div className='comment-author-ava'>
                        <img
                          src={require('../../../../assets/img/reviews/03.jpg')}
                          alt='Review author'
                        />
                      </div>
                      <div className='comment-body'>
                        <div className='comment-header d-flex flex-wrap justify-content-between'>
                          <h4 className='comment-title'>
                            Soft, comfortable, quite durable...
                          </h4>
                          <div className='mb-2'>
                            <div className='rating-stars'>
                              <i className='icon-star filled'></i>
                              <i className='icon-star filled'></i>
                              <i className='icon-star filled'></i>
                              <i className='icon-star filled'></i>
                              <i className='icon-star'></i>
                            </div>
                          </div>
                        </div>
                        <p className='comment-text'>
                          Sed ut perspiciatis unde omnis iste natus error sit
                          voluptatem accusantium doloremque laudantium, totam
                          rem aperiam, eaque ipsa quae ab illo inventore
                          veritatis et quasi architecto beatae vitae dicta sunt
                          explicabo. Nemo enim ipsam voluptatem quia voluptas
                          sit aspernatur aut odit aut fugit, sed quia
                          consequuntur magni dolores eos qui ratione voluptatem
                          sequi nesciunt.
                        </p>
                        <div className='comment-footer'>
                          <span className='comment-meta'>Jacob Hammond</span>
                        </div>
                      </div>
                    </div>

                    <h5 className='mb-30 padding-top-1x'>Leave Review</h5>
                    <form className='row' method='post'>
                      <div className='col-sm-6'>
                        <div className='form-group'>
                          <label for='review_name'>Your Name</label>
                          <input
                            className='form-control form-control-rounded'
                            type='text'
                            id='review_name'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='form-group'>
                          <label for='review_email'>Your Email</label>
                          <input
                            className='form-control form-control-rounded'
                            type='email'
                            id='review_email'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='form-group'>
                          <label for='review_subject'>Subject</label>
                          <input
                            className='form-control form-control-rounded'
                            type='text'
                            id='review_subject'
                            required
                          />
                        </div>
                      </div>
                      <div className='col-sm-6'>
                        <div className='form-group'>
                          <label for='review_rating'>Rating</label>
                          <select
                            className='form-control form-control-rounded'
                            id='review_rating'
                          >
                            <option>5 Stars</option>
                            <option>4 Stars</option>
                            <option>3 Stars</option>
                            <option>2 Stars</option>
                            <option>1 Star</option>
                          </select>
                        </div>
                      </div>
                      <div className='col-12'>
                        <div className='form-group'>
                          <label for='review_text'>Review </label>
                          <textarea
                            className='form-control form-control-rounded'
                            id='review_text'
                            rows='8'
                            required
                          ></textarea>
                        </div>
                      </div>
                      <div className='col-12 text-right'>
                        <button
                          className='btn btn-outline-primary'
                          type='submit'
                        >
                          Submit Review
                        </button>
                      </div>
                    </form>
                  </div> */}
                </div>
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

        <div className='pswp' tabindex='-1' role='dialog' aria-hidden='true'>
          <div className='pswp__bg'></div>
          <div className='pswp__scroll-wrap'>
            <div className='pswp__container'>
              <div className='pswp__item'></div>
              <div className='pswp__item'></div>
              <div className='pswp__item'></div>
            </div>
            <div className='pswp__ui pswp__ui--hidden'>
              <div className='pswp__top-bar'>
                <div className='pswp__counter'></div>
                <button
                  className='pswp__button pswp__button--close'
                  title='Close (Esc)'
                ></button>
                <button
                  className='pswp__button pswp__button--share'
                  title='Share'
                ></button>
                <button
                  className='pswp__button pswp__button--fs'
                  title='Toggle fullscreen'
                ></button>
                <button
                  className='pswp__button pswp__button--zoom'
                  title='Zoom in/out'
                ></button>
                <div className='pswp__preloader'>
                  <div className='pswp__preloader__icn'>
                    <div className='pswp__preloader__cut'>
                      <div className='pswp__preloader__donut'></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='pswp__share-modal pswp__share-modal--hidden pswp__single-tap'>
                <div className='pswp__share-tooltip'></div>
              </div>
              <button
                className='pswp__button pswp__button--arrow--left'
                title='Previous (arrow left)'
              ></button>
              <button
                className='pswp__button pswp__button--arrow--right'
                title='Next (arrow right)'
              ></button>
              <div className='pswp__caption'>
                <div className='pswp__caption__center'></div>
              </div>
            </div>
          </div>
        </div>

        <ScrollTop />
      </div>
    )
  }
}

export default Product
