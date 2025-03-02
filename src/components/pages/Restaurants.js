import { useState } from "react";
import RestaurantImage from '../../images/nimage.png'
function Restaurants() {

  const [activeFood, setActiveFood] = useState(0)
  const showTypes = [{
    type: 'all-btn',
    name: 'All'
  },
  {
    type: 'veg-btn',
    name: 'Veg'
  },
  {
    type: 'non-btn',
    name: 'Non-Veg'
  }
  ];
  return (
    <div className="resPage">
      <div className="container mtl">
        <div className="resCont">
          <h3>Popular Restaurants</h3>
          <div className="res-type">
            <div className="store-type">
              {showTypes.map((type, index) => {
                return (

                  <button
                    key={index}
                    className={`${type.type} ${activeFood === index ? 'activeFood' : ''}`}
                    onClick={() => setActiveFood(index)} // Set activeFood on click
                  >
                    {type.name}
                  </button>
                )
              })}
            </div>
            <div className="types-R row">
              <div className="eatPlace col-3">
                <div className="center-div">
                  <div className="img-cont">
                    <img src={RestaurantImage} className="image-res" />
                  </div>
                  <div className="detail-res">
                    <div className="res-name">
                      Bangarpet Panipuri& Chaat
                    </div>
                    <div className="star-btn">5.1</div>
                    <div className="res-details">
                      <p className="adrs-res">
                        palace road rs pet kuppam
                      </p>
                      <p className="delivery-time">
                        20 - 30 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eatPlace col-3">
                <div className="center-div">
                  <div className="img-cont">
                    <img src={RestaurantImage} className="image-res" />
                  </div>
                  <div className="detail-res">
                    <div className="res-name">
                      Bangarpet Panipuri& Chaat
                    </div>
                    <div className="star-btn">5.1</div>
                    <div className="res-details">
                      <p className="adrs-res">
                        palace road rs pet kuppam
                      </p>
                      <p className="delivery-time">
                        20 - 30 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eatPlace col-3">
                <div className="center-div">
                  <div className="img-cont">
                    <img src={RestaurantImage} className="image-res" />
                  </div>
                  <div className="detail-res">
                    <div className="res-name">
                      Bangarpet Panipuri& Chaat
                    </div>
                    <div className="star-btn">5.1</div>
                    <div className="res-details">
                      <p className="adrs-res">
                        palace road rs pet kuppam
                      </p>
                      <p className="delivery-time">
                        20 - 30 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eatPlace col-3">
                <div className="center-div">
                  <div className="img-cont">
                    <img src={RestaurantImage} className="image-res" />
                  </div>
                  <div className="detail-res">
                    <div className="res-name">
                      Bangarpet Panipuri& Chaat
                    </div>
                    <div className="star-btn">5.1</div>
                    <div className="res-details">
                      <p className="adrs-res">
                        palace road rs pet kuppam
                      </p>
                      <p className="delivery-time">
                        20 - 30 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eatPlace col-3">
                <div className="center-div">
                  <div className="img-cont">
                    <img src={RestaurantImage} className="image-res" />
                  </div>
                  <div className="detail-res">
                    <div className="res-name">
                      Bangarpet Panipuri& Chaat
                    </div>
                    <div className="star-btn">5.1</div>
                    <div className="res-details">
                      <p className="adrs-res">
                        palace road rs pet kuppam
                      </p>
                      <p className="delivery-time">
                        20 - 30 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eatPlace col-3">
                <div className="center-div">
                  <div className="img-cont">
                    <img src={RestaurantImage} className="image-res" />
                  </div>
                  <div className="detail-res">
                    <div className="res-name">
                      Bangarpet Panipuri& Chaat
                    </div>
                    <div className="star-btn">5.1</div>
                    <div className="res-details">
                      <p className="adrs-res">
                        palace road rs pet kuppam
                      </p>
                      <p className="delivery-time">
                        20 - 30 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eatPlace col-3">
                <div className="center-div">
                  <div className="img-cont">
                    <img src={RestaurantImage} className="image-res" />
                  </div>
                  <div className="detail-res">
                    <div className="res-name">
                      Bangarpet Panipuri& Chaat
                    </div>
                    <div className="star-btn">5.1</div>
                    <div className="res-details">
                      <p className="adrs-res">
                        palace road rs pet kuppam
                      </p>
                      <p className="delivery-time">
                        20 - 30 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eatPlace col-3">
                <div className="center-div">
                  <div className="img-cont">
                    <img src={RestaurantImage} className="image-res" />
                  </div>
                  <div className="detail-res">
                    <div className="res-name">
                      Bangarpet Panipuri& Chaat
                    </div>
                    <div className="star-btn">5.1</div>
                    <div className="res-details">
                      <p className="adrs-res">
                        palace road rs pet kuppam
                      </p>
                      <p className="delivery-time">
                        20 - 30 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eatPlace col-3">
                <div className="center-div">
                  <div className="img-cont">
                    <img src={RestaurantImage} className="image-res" />
                  </div>
                  <div className="detail-res">
                    <div className="res-name">
                      Bangarpet Panipuri& Chaat
                    </div>
                    <div className="star-btn">5.1</div>
                    <div className="res-details">
                      <p className="adrs-res">
                        palace road rs pet kuppam
                      </p>
                      <p className="delivery-time">
                        20 - 30 min
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="eatPlace col-3">
                <div className="center-div">
                  <div className="img-cont">
                    <img src={RestaurantImage} className="image-res" />
                  </div>
                  <div className="detail-res">
                    <div className="res-name">
                      Bangarpet Panipuri& Chaat
                    </div>
                    <div className="star-btn">5.1</div>
                    <div className="res-details">
                      <p className="adrs-res">
                        palace road rs pet kuppam
                      </p>
                      <p className="delivery-time">
                        20 - 30 min
                      </p>
                    </div>
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