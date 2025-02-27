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
    height: '130px',
    padding: '10px'
  },
  restrnt: {
    padding: '24px 0px 0px 24px',
  },
  finalcord: {
    padding: '10px'
  },
  address: {
    margin: '0px',
    fontSize: '0.75rem',
    fontWeight: '400',
    lineHeight: '11.8px',
    fontFamily: "sans-serif",
    color: 'rgb(147, 162, 174)'
  },
  resName: {
    margin: '0px',
    fontSize: '14px',
    fontWeight: '500'
  }
  ,
  totalCard:{
    display:'flex',
    flexDirection:'column'
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
              <div className="col-3 " style={styles.restrnt}>
                <div className="final-cord" style={styles.finalcord}>
                  <img src={restaurantList[0].image} style={styles.image} />
                  <h3>{restaurantList[0].name}</h3>
                  <div>{restaurantList[0].address}</div>
                  <div>{restaurantList[0].delivaryTime}</div>
                </div>
              </div>
              <div className="col-3 " style={styles.restrnt}>
                <div className="final-cord">
                  <img src={restaurantList[0].image} style={styles.image} />
                  <h3>{restaurantList[0].name}</h3>
                  <div>{restaurantList[0].address}</div>
                  <div>{restaurantList[0].delivaryTime}</div>
                </div>
              </div>
              <div className="col-3 " style={styles.restrnt}>
                <div className="final-cord">
                  <img src={restaurantList[0].image} style={styles.image} />
                  <h3>{restaurantList[0].name}</h3>
                  <div>{restaurantList[0].address}</div>
                  <div>{restaurantList[0].delivaryTime}</div>
                </div>
              </div>
              <div className="col-3 " style={styles.restrnt}>
                <div className="total-card" style={styles.totalCard}>
                  <div className="final-cord">
                    <img src={restaurantList[0].image} style={styles.image} />
                  </div>
                  <div className="final-cord2">
                    <div style={styles.resName}>{restaurantList[0].name}</div>
                    <div style={styles.address}>{restaurantList[0].address}</div>
                    <div>{restaurantList[0].delivaryTime}</div>
                  </div>
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