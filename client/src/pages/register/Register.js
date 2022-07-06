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
 
  <div class="log">
  <h2>Register</h2>
  <form onSubmit={handleSubmit}>
    <div class="input-cont">
      <input  placeholder="Enter your username..." type="text" onChange={(e) => setUsername(e.target.value)} />
      <label>Username</label>
      <div class="border1"></div>
    </div>
    <div class="input-cont">
      <input type="text" placeholder="Enter your email..." onChange={(e) => setEmail(e.target.value)} />
      <label>Email Address</label>
      <div class="border2"></div>
    </div>
    <div class="input-cont">
    <input  placeholder="Enter your password..." type="password" onChange={(e) => setPassword(e.target.value)} />
    <label>Password</label>
    <div class="border1"></div>
  </div>
    <span class="check">
      <input type="checkbox" /> <label>Remember Me</label>
    </span>
    <a href="#">Forgot Password</a>
    <div class="clear"></div>
    <input type="submit"  value="Register" />  
    <div class="registerAcc">
       <a href="/login">Or Login</a>
    </div> 
  </form>
</div>
    
  );
}