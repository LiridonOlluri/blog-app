import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    // <div className="register">
    //   <span className="registerTitle">Register</span>
    //   <form className="registerForm" onSubmit={handleSubmit}>
    //     <label>Username</label>
    //     <input
    //       type="text"
    //       className="registerInput"
    //       placeholder="Enter your username..."
    //       onChange={(e) => setUsername(e.target.value)}
    //     />
    //     <label>Email</label>
    //     <input
    //       type="text"
    //       className="registerInput"
    //       placeholder="Enter your email..."
    //       onChange={(e) => setEmail(e.target.value)}
    //     />
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       className="registerInput"
    //       placeholder="Enter your password..."
    //       onChange={(e) => setPassword(e.target.value)}
    //     />
    //     <button className="registerButton" type="submit">
    //       Register
    //     </button>
    //   </form>
    //   <button className="registerLoginButton">
    //     <Link className="link" to="/login">
    //       Login
    //     </Link>
    //   </button>
    //   {error && <span style={{color:"red", marginTop:"10px"}}>Exist this username or email, Try another!</span>}
    // </div>

    <div class="register-box">
          <h2>Register</h2>
          <form className="registerForm" onSubmit={handleSubmit}>
      <div class="user-box">
        <input type="text"
               className="registerInput"
               placeholder="Enter your username..."
               onChange={(e) => setUsername(e.target.value)}></input>
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="text"
               className="registerInput"
               placeholder="Enter your email..."
               onChange={(e) => setEmail(e.target.value)}></input>
        <label>Email Address</label>
      </div>
      <div class="user-box">
        <input  type="password"
                className="registerInput"
                placeholder="Enter your password..."
                onChange={(e) => setPassword(e.target.value)}></input>
        <label>Password</label>
      </div>
      
      <button  className="registerButton" type="submit">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
            Submit
    
      </button>
    </form>
    <button className="login_button">
         <Link className="link" to="/login">
            Login
         </Link>
    </button>
    
              {error && <span style={{color:"red", marginTop:"10px"}}>Exist this username or email, Try another!</span>}
  </div>
  
    
  );
}