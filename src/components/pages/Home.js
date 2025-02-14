import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import banner from '../../images/home-banner.png'
import { useNavigate } from "react-router-dom";
function Home(onLogin) {
  const navigate = useNavigate();
  function goToRestaurant() {
    navigate('/restaurants')
  }

  const icons = {
    home: '../../../public/images/icons/home.png',
    cart: '../../images/icons/cart.png',
    service: '../../images/icons/best-service.png',
    kunai: '../../images/icons/kunai.png'
  }

  const { home, cart, service, kunai } = icons;
  return (

    <div>
      <div className='home-welcome'>
        <h1 className="title-home1">Welcome To Foodie!</h1>
        <div className="title-para">
          Your Ultimate Destination for Food, Grocery, E-commerce, Pharmacy,Parcel Delivery in Sagwara, Kuppam
        </div>
        <img className="home-banner" src={banner} alt="home-banner" />
      </div>
      <div className="special-about ">
        <div className="total-special">
          <h2 className="sl">What Special in Foodie!<span className="colort"> color text</span></h2>
        </div>
        <div className="spl-divs row">
          <div className="col-4 col-div">
            <img src={home} alt="home-png" className="h-jpg" />
          </div>
          <div className="col-4 col-div2">master</div>
          <div className="col-4 col-div3">how r u</div>
        </div>
      </div>
    </div>

  );
}

export default Home;