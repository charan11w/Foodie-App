const restaurantList=[{
  name:'Five Star Chicken',
  rating:3.8,
  address:"New gudupalli link road, near Babu nagar, Kuppam, Andhra Pradesh 517425",
  delivaryTime:`${20}-${40} min`,
  reviews:17,
  positiveReview:`${72}%`,

}]

function Restaurants() {

  return (
    <div className="restarent">
      <div className="container rant-cont">
        <h3>Popular Stores</h3>
      </div>
    </div>
  )
}

export default Restaurants;