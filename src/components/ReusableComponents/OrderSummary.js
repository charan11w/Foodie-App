import React from 'react'
import Img from '../../images/nimage.png'
import '../../styles/OrderSummary.css'

export default function OrderSummary() {
  return (
    <div className='order-summary'>
      <div className='title-order'>Order Summary</div>
      <div className='order-items'>
        <div className='orders-cont'>
          <div className='item-image-name'>
            <img src={Img} width={30} height={30} />
            <div>name</div>
          </div>
          <div className='item-price-div'>
            2082.0 &#8377;
          </div>
        </div>
        <div className='orders-cont'>
          <div className='item-image-name'>
            <img src={Img} width={30} height={30} />
            <div>name</div>
          </div>
          <div className='item-price-div'>
            2082.0 &#8377;
          </div>
        </div>
        <div className='orders-cont'>
          <div className='item-image-name'>
            <img src={Img} width={30} height={30} />
            <div>name</div>
          </div>
          <div className='item-price-div'>
            2082.0 &#8377;
          </div>
        </div>

      </div>
      <div className='coupon-div'>
        <input type='text' className='coupon-input' placeholder='Enter your Coupon code' />
        <button className='coupon-apply'>Apply</button>
      </div>
      <div className='not-available'>
        <div>If Any product is not available</div>
        <div>&gt;&gt;</div>
      </div>
      <div className='not-available'>
        <div>Add More Delivery Instructions</div>
        <div>&gt;&gt;</div>
      </div>

    </div>
  )
}
