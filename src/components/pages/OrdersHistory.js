import React from 'react'
import '../../styles/OrdersHistory.css'
import { useSelector } from 'react-redux';

const OrderHistory = () => {

  const {orders} = useSelector(state => state.orders)
  console.log(orders,'here')
//   const orders = [
//   {
//     orderId: "ORD123456",
//     date: "2025-05-15",
//     status: "Completed",
//     total: 450,
//     items: [
//       { name: "Pizza", quantity: 2, price: 150 },
//       { name: "Cold Drink", quantity: 1, price: 150 },
//     ],
//   },
// ];

  if (!orders || orders.length === 0) {
    return <div className="empty">No orders found.</div>;
  }

  return (
    <div className="order-history-container">
      <h2 className="title">Order History</h2>
      {orders.map((order, index) => (
        <div key={index} className="order-card">
          <div className="order-header">
            <div>
              <h3 className="order-id">Order #{order.orderId}</h3>
              <p className="order-date">Date: {order.date}</p>
            </div>
            <div className="order-status">
              <span>Status:</span>
              <strong className="status-text">{order.status}</strong>
            </div>
          </div>

          <div className="items-section">
            <h4>Items:</h4>
            <ul>
              {order.items.map((item, idx) => (
                <li key={idx} className="item">
                  <span>{item.name} (x{item.quantity})</span>
                  <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <div className="total">Total: ₹{order.total}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
