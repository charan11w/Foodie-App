import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import noImage from '../../images/nimage.png'

export const SelectedRes=() => {
  const navigate=useNavigate();
  const {name}=useSelector((globaldata) => globaldata.login.restaurant)
  console.log(name)
  return(
    <div className="selected"> 
      <div className=" container first-one">
        <div className="row mainRes">
          <div className="detailes col-6">
            <div className="selectedName">{name}</div>
          </div>
          <div className="imagi col-6">
            <img src={noImage} className="resImage"/>
          </div>
        </div>
      </div>
    </div>
  )
}
console.log("ee")

