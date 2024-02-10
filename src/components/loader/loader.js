import './loader.css';
import React from 'react'

const loader = () => {
  return (
    <div className='loader'>
        <div class="lds-ripple">
        <div></div>
        <div></div>
        </div>
    </div>
  )
}

export default loader

