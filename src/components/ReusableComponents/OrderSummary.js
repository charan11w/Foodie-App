import React from 'react'
import Img from '../../images/nimage.png'
import '../../styles/OrderSummary.css'

export default function OrderSummary() {
  function loadRazorpayScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }
  
  const handlePayment = async () => {
    const res = await loadRazorpayScript("https://checkout.razorpay.com/v1/checkout.js");
  
    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }
  
    const options = {
      key: "YOUR_PUBLIC_KEY_HERE", // Replace with Razorpay test/public key
      amount: 2082 * 3 * 100, // amount in paise
      currency: "INR",
      name: "Foodie App",
      description: "Order Payment",
      image: "https://your-logo-url.com/logo.png",
      handler: function (response) {
        alert("Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Charan Kumar",
        email: "charan@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };
  
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
    
  const totalAmount = 2082 * 3 * 100; // ₹2082 × 3 items × 100 (to convert to paise)

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
      <button className="place-order-btn" onClick={handlePayment}>
        Place Order & Pay
      </button>

    </div>
  )
}
