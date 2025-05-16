import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import banner from '../../images/home-banner.png'
import home from '../../images/icons/home.png'
import cartIcon from '../../images/icons/cart.png'
import kunai from '../../images/icons/kunai.png'
import dbox from '../../images/icons/empty.png'
import { useNavigate } from "react-router-dom";
import '../../styles/Home.css'
import { useSelector } from "react-redux";
import useHeader from "../../hooks/useHeader";
import { useHeaderContext } from "../../context/HeaderContext";

function Home(onLogin) {
  const navigate = useNavigate();
  const {isAuthenticated} =useSelector(state => state.auth)

  const {handleLogin,mo}=useHeaderContext()
  function goToRestaurant() {
    navigate('/restaurants')
  }

  const goToHome = () => {
    handleLogin()
  }
  return (

    <div>
      <div className='home-welcome'>
        <h1 className="title-home1">Welcome To Foodie!</h1>
        <div className="title-para">
          Your Ultimate Destination for Food, Grocery, E-commerce, Pharmacy,Parcel Delivery in Sagwara, Kuppam
        </div>
        <div className="go-to-home" onClick={goToHome}>Restaurant</div>
        <div className="home-img">
        <img className="home-banner" src={banner} alt="home-banner" />
        </div>
      </div>
      <div className="special-about ">
        <div className="total-special">
          <h2 className="sl">What Special in Foodie!<span className="colort"> color text</span></h2>
        </div>
        <div className="spl-divs row">
          <div className="col-4 col-div">
            <img src={home} alt="home-png" className="h-jpg" />
            <h4 className="subtitle">
              Store<br></br>
              are easily<br></br>
              manage!
            </h4>
          </div>
          <div className="col-4 col-div2">
            <img src={cartIcon} alt="home-png" className="h-jpg" />
            <h4 className="subtitle2">
              Easy<br></br>
              to order via<br></br>
              Foodie
            </h4>
          </div>
          <div className="col-4 col-div3">
          <img src={kunai} alt="home-png" className="h-jpg" />
            <h4 className="subtitle">
              Live<br></br>
              location tracking<br></br>
              system
            </h4>
          </div><br></br>
          <div className="col-4 col-div3">
          <img src={dbox} alt="home-png" className="h-jpg" />
            <h4 className="subtitle4">
              Fast<br></br>
              and best service<br></br>
              app
            </h4>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Home;