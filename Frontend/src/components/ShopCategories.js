import React from 'react'
import { Link } from 'react-router-dom'

import './ShopCategories.css'
export default function ShopCategories() {
  return (
    <div>
      <div className='offcanvas-container' id='shop-categories'>
        <div className='offcanvas-header'>
          <h3 className='offcanvas-title'>Shop Categories</h3>
        </div>
        <nav className='offcanvas-menu'>
          <ul className='menu'>
            <li className='has-children'>
              <span>
                <Link to='/'>Men's Shoes</Link>
                <span className='sub-menu-toggle'></span>
              </span>
              <ul className='offcanvas-submenu'>
                {/* <li className='back-btn'>
                  <button>Back</button>
                </li> */}
                <li>
                  <Link href='#'>Sneakers</Link>
                </li>
                <li>
                  <Link href='#'>Loafers</Link>
                </li>
                <li>
                  <Link href='#'>Boat Shoes</Link>
                </li>
                <li>
                  <Link href='#'>Sandals</Link>
                </li>
                <li>
                  <Link href='#'>View All</Link>
                </li>
              </ul>
            </li>
            <li className='has-children'>
              <span>
                <Link href='#'>Women's Shoes</Link>
                <span className='sub-menu-toggle'></span>
              </span>
              <ul className='offcanvas-submenu'>
                <li className='back-btn'>
                  <Link href='#'>Back</Link>
                </li>
                <li>
                  <Link href='#'>Sandals</Link>
                </li>
                <li>
                  <Link href='#'>Flats</Link>
                </li>
                <li>
                  <Link href='#'>Sneakers</Link>
                </li>
                <li>
                  <Link href='#'>Heels</Link>
                </li>
                <li>
                  <Link href='#'>View All</Link>
                </li>
              </ul>
            </li>
            <li className='has-children'>
              <span>
                <Link href='#'>Men's Clothing</Link>
                <span className='sub-menu-toggle'></span>
              </span>
              <ul className='offcanvas-submenu'>
                <li className='back-btn'>
                  <Link href='#'>Back</Link>
                </li>
                <li>
                  <Link href='#'>Shirts &amp; Tops</Link>
                </li>
                <li>
                  <Link href='#'>Pants</Link>
                </li>
                <li>
                  <Link href='#'>Jackets</Link>
                </li>
                <li>
                  <Link href='#'>View All</Link>
                </li>
              </ul>
            </li>
            <li className='has-children'>
              <span>
                <Link href='#'>Women's Clothing</Link>
                <span className='sub-menu-toggle'></span>
              </span>
              <ul className='offcanvas-submenu'>
                <li className='back-btn'>
                  <Link href='#'>Back</Link>
                </li>
                <li>
                  <Link href='#'>Dresses</Link>
                </li>
                <li>
                  <Link href='#'>Shirts &amp; Tops</Link>
                </li>
                <li>
                  <Link href='#'>Shorts</Link>
                </li>
                <li>
                  <Link href='#'>Swimwear</Link>
                </li>
                <li>
                  <Link href='#'>View All</Link>
                </li>
              </ul>
            </li>
            <li className='has-children'>
              <span>
                <Link href='#'>Kid's Shoes</Link>
                <span className='sub-menu-toggle'></span>
              </span>
              <ul className='offcanvas-submenu'>
                <li className='back-btn'>
                  <Link href='#'>Back</Link>
                </li>
                <li>
                  <Link href='#'>Boots</Link>
                </li>
                <li>
                  <Link href='#'>Sandals</Link>
                </li>
                <li>
                  <Link href='#'>Crib Shoes</Link>
                </li>
                <li>
                  <Link href='#'>Loafers</Link>
                </li>
                <li>
                  <Link href='#'>View All</Link>
                </li>
              </ul>
            </li>
            <li className='has-children'>
              <span>
                <Link href='#'>Bags</Link>
                <span className='sub-menu-toggle'></span>
              </span>
              <ul className='offcanvas-submenu'>
                <li className='back-btn'>
                  <Link href='#'>Back</Link>
                </li>
                <li>
                  <Link href='#'>Handbags</Link>
                </li>
                <li>
                  <Link href='#'>Backpacks</Link>
                </li>
                <li>
                  <Link href='#'>Luggage</Link>
                </li>
                <li>
                  <Link href='#'>Wallets</Link>
                </li>
                <li>
                  <Link href='#'>View All</Link>
                </li>
              </ul>
            </li>
            <li className='has-children'>
              <span>
                <Link href='#'>Accessories</Link>
                <span className='sub-menu-toggle'></span>
              </span>
              <ul className='offcanvas-submenu'>
                <li className='back-btn'>
                  <Link href='#'>Back</Link>
                </li>
                <li>
                  <Link href='#'>Sunglasses</Link>
                </li>
                <li>
                  <Link href='#'>Hats</Link>
                </li>
                <li>
                  <Link href='#'>Watches</Link>
                </li>
                <li>
                  <Link href='#'>Jewelry</Link>
                </li>
                <li>
                  <Link href='#'>Belts</Link>
                </li>
                <li>
                  <Link href='#'>View All</Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}
