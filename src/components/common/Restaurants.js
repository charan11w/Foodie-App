const restaurantList = [{
  name: 'Five Star Chicken',
  rating: 3.8,
  address: "New gudupalli link road, near Babu nagar, Kuppam, Andhra Pradesh 517425",
  delivaryTime: `${20}-${40} min`,
  reviews: 17,
  positiveReview: `${72}%`,

}]

function Restaurants() {

  return (
    <div className="total-respage">
      <div className="restaurant-page">
        <div className=" popular-res">
          <h2 className="popular">Popular Stores</h2>
        </div>
      </div>
    </div>


  )
}

export default Restaurants;