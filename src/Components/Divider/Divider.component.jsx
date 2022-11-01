import React from 'react'
import './Divider.styles.scss';

const Divider = ({ title }) => {
  return (
    <div className='d-flex justify-content-center align-items-center my-4'>
      <div className='line'></div>
      <h2 className='mx-3'>{title}</h2>
      <div className='line'></div>
    </div>
  )
}

export default Divider