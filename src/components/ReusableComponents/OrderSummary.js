import React from 'react'
import Img from '../../images/nimage.png'
import '../../styles/OrderSummary.css'
import { useSelector } from 'react-redux';

export default function OrderSummary() {

  const { cart } = useSelector(state => state.cart)
  console.log(cart)
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
      key: "rzp_test_2reBI6brxXggiQ", // Your test key
      amount: 100, // ₹1 = 100 paise
      currency: "INR",
      name: "Foodie App",
      description: "₹1 Test Payment",
      image: "https://your-logo-url.com/logo.png", // Optional
      handler: function (response) {
        alert("Payment successful! ID: " + response.razorpay_payment_id);
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

  const amountTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  const overallAmount = amountTotal + 23 + 3;

  return (
    <div className='order-summary'>
      <div className='title-order'>Order Summary</div>
      <div className='order-items'>
        {cart.map((item) => (
          <div className='orders-cont' key={item.id}>
            <div className='item-image-name'>
              <img src={Img} width={30} height={30} />
              <div>{item.name}</div>
            </div>
            <div className='item-price-div'>
              {item.price * item.quantity}.0 &#8377;
            </div>
          </div>
        ))}
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
      <div className='totalAmt'>
        <div>Items Price</div>
        <div>{amountTotal}.0 &#8377;</div>
      </div>
      <div className='totalAmt'>
        <div>Discount</div>
        <div>(-)0.0&#8377;</div>
      </div>
      <div className='totalAmt'>
        <div>Deliveryman Tips</div>
        <div>(+)0.0&#8377;</div>
      </div>
      <div className='totalAmt'>
        <div>Platform Fees</div>
        <div>(-)3.0&#8377;</div>
      </div>
      <div className='totalAmt t-last'>
        <div>Delivery Fee</div>
        <div>(+)23.0&#8377;</div>
      </div>
      <div className='totalAmt total-all'>
        <div>Total</div>
        <div>{overallAmount}.0&#8377;</div>
      </div>


      <button className="place-order-btn" onClick={handlePayment}>
        Place Order & Pay
      </button>

    </div>
  )
}
