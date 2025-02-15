import { useState } from "react";
import '../../styles/form.css'// Import CSS for styling

const FloatingLabelInput = ({ label, type, value, setValue }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`input-container ${isFocused || value ? "active" : ""}`}>
      <label className="floating-label">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <FloatingLabelInput label="Email" type="email" value={email} setValue={setEmail} />
      <FloatingLabelInput label="Password" type="password" value={password} setValue={setPassword} />
    </div>
  );
};

export default Form;
