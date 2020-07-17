import React from 'react'

export default function ScrollTop() {
  return (
    <div>
      <a className='scroll-to-top-btn visible' href='#'>
        <i className='icon-arrow-up'></i>
      </a>
      <div className='site-backdrop'></div>
    </div>
  )
}
