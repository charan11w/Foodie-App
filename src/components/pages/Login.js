import Footer from "../layouts/Footer";
import playstore from '../../images/playstore.png'
import microsoft from '../../images/microsoft.png'
import { useState } from "react";
function Login({ onLogin }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('')

  const captureUser = (e) => { setUserName(e.target.value) }
  const capturePassword = (e) => { setPassword(e.target.value) }



  const handleSubmit = () => {
    if (username === '' || password === '') {
      setError('sorry ! username and password should not be empty') 
    } else {
      onLogin();
    }
  }

  return (
    <div className="login-page">
      <div className="login-form">
        <div className="first">
          <h1 className="login-header">Foodie</h1>
          <input
            type="text"
            className="inputs"
            placeholder="Enter Phone Number .."
            onChange={captureUser}
          />
          <input
            type="password"
            className="inputs"
            placeholder="Password"
            onChange={capturePassword}
          />
          <button className="submit-button" onClick={handleSubmit}>
            Log in
          </button>
          {error && <div className="error">{error}</div>}
          <div className="or">
            <div className="nothing">
              <hr></hr>
            </div>
            <div className="and">
              OR
            </div>
            <div className="nothing">
              <hr />
            </div>
          </div>
          <div className="flog">
            Log in with Email
          </div>
          <div className="fpass">
            Forgotten password?
          </div>
        </div>
        <div className="second">
          <div className="second-one">
            Don't have an account?<span className="signup">Sign up</span>
          </div>
        </div>
        <div className="get">
          Get the App
        </div>
        <div className="icons">
          <div className="imgs">
            <img src={playstore} alt={playstore}/>
          </div>
          <div className="imgs" >
            <img src={playstore}  alt={microsoft}/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;