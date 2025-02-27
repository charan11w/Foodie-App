import Footer from "../layouts/Footer";
import playstore from '../../images/playstore.png';
import microsoft from '../../images/microsoft.png';
import { useState } from "react";

function Login({ onLogin }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const captureUser = (e) => setUserName(e.target.value);
  const capturePassword = (e) => setPassword(e.target.value);

  const validateUsername = (input) => {
    const phoneRegex = /^[6-9]\d{9}$/; // Starts with 6-9 and must be 10 digits
    if (!input.match(phoneRegex)) {
      return "Invalid phone number. It should start with 6-9 and have exactly 10 digits.";
    }
    return "";
  };

  const validatePassword = (input) => {
    if (input.length < 7) {
      return "Password must be at least 7 characters long.";
    }
    return "";
  };

  const handleSubmit = () => {
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    if (!username || !password) {
      setError("Sorry! Username and password should not be empty.");
    } else if (usernameError) {
      setError(usernameError);
    } else if (passwordError) {
      setError(passwordError);
    } else {
      setError(""); // Clear errors if validation passes
      onLogin(); // Call the login function
    }
  };

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
            value={username}
          />
          <input
            type="password"
            className="inputs"
            placeholder="Password"
            onChange={capturePassword}
            value={password}
          />
          <button className="submit-button" onClick={handleSubmit}>
            Log in
          </button>
          {error && <div className="error">{error}</div>}
          <div className="or">
            <div className="nothing"><hr /></div>
            <div className="and">OR</div>
            <div className="nothing"><hr /></div>
          </div>
          <div className="flog">Log in with Email</div>
          <div className="fpass">Forgotten password?</div>
        </div>
        <div className="second">
          <div className="second-one">
            Don't have an account? <span className="signup">Sign up</span>
          </div>
        </div>
        <div className="get">Get the App</div>
        <div className="icons">
          <div className="imgs">
            <img src={playstore} alt="Playstore" />
          </div>
          <div className="imgs">
            <img src={microsoft} alt="Microsoft" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
