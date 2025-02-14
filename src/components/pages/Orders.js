import emptyOrder from '../../images/icons/empty.png'
function Orders() {
  return (
    <div className="order-container">
        <h2 className='empty-cart'>Oops! Cart is Empty</h2>
        <img src={emptyOrder} alt='ordersEmpty' className='ordersEmpty'></img>
    </div>
  );
}

export default Orders;