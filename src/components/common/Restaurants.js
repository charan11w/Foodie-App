const restaurantList = [{
  name: 'Five Star Chicken',
  rating: 3.8,
  address: "New gudupalli link road, near Babu nagar, Kuppam, Andhra Pradesh 517425",
  delivaryTime: `${20}-${40} min`,
  reviews: 17,
  positiveReview: `${72}%`,
  image: '../../images/nimage.png'
}]


const styles = {
  image: {
    width: '258.4px',
    height: '130px'
  }
}


function Restaurants() {

  return (
    <div className="total-respage">
      <div className="restaurant-page">
        <div className=" popular-res container">
          <h3 className="popular">Popular Stores</h3>
          <div className="btn-container">
            <button className="selection1">All</button>
            <button className="selection2">Veg</button>
            <button className="selection3">Non-Veg</button>
          </div>
          <div className="cord">
            <div className="row">
              <div className="col-3">
                <div className="final-cord">
                  <img src={restaurantList[0].image} style={styles.image} />
                  <h3>{restaurantList[0].name}</h3>
                  <div>{restaurantList[0].address}</div>
                  <div>{restaurantList[0].delivaryTime}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Restaurants;