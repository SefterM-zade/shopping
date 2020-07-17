import React from 'react'

export default function PageTitle(props) {
  return (
    <div>
      <div className='page-title'>
        <div className='container'>
          <div className='column'>
            <h1>{props.title}</h1>
          </div>
          <div className='column'>
            <ul className='breadcrumbs'>
              <li>
                <a href='index.html'>Home</a>
              </li>
              <li className='separator'>&nbsp;</li>
              <li>{props.title}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
