import React from 'react'
import img4 from '../Assests/img4.webp'
import img5 from '../Assests/img5.webp'
import img6 from '../Assests/img6.webp'
import img7 from '../Assests/img7.webp'
import img8 from '../Assests/img8.webp'
import img9 from '../Assests/img9.webp'
import img10 from '../Assests/img10.webp'
import img11 from '../Assests/img11.webp'
import img12 from '../Assests/img12.webp'
import '../Gallery/gallery.css'

const Gallery = () => {
  return (
    <div className='about'>
    <div className="header">
        <h1>Gallery <hr /> </h1>
      </div>
      <div className='img'>
        <div className='img1'>
          <img src={img4} alt="" />
          <img src={img5} alt="" />
          <img src={img6} alt="" />
        </div>
        <div className='img2'>
          <img src={img7} alt="" />
          <img src={img8} alt="" />
          <img src={img9} alt="" />
        </div>
        <div className='img3'>
          <img src={img10} alt="" />
          <img src={img11} alt="" />
          <img src={img12} alt="" />
        </div>
        
      </div>
    </div>
  )
}

export default Gallery