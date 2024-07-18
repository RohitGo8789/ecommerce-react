import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-navbox">Description</div>
        <div className="descriptionbox-navbox fade">Reviews (156)</div>
      </div>
      <div className="descriptionbox-desc">
        <p>Our eCommerce platform offers a seamless shopping experience with a user-friendly interface and secure payment options. Enjoy a vast selection of products, from fashion to electronics, all at competitive prices. Our advanced search and filtering tools make finding the perfect item quick and easy. Benefit from fast shipping and reliable customer service to ensure a smooth transaction every time. Personalized recommendations and exclusive deals keep you coming back for more. </p>
        <p>Our eCommerce platform provides a seamless shopping experience with secure payments and fast shipping. Discover a vast selection of products, personalized recommendations, and exclusive deals. Enjoy a user-friendly interface and reliable customer service for a smooth transaction every time.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
