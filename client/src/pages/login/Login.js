import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./Login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
  
        
    <div class="log">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
          <div class="input-cont">
            <input ref={userRef} type="text" name="" required="" />
            <label>Username</label>
            <div class="border1"></div>
          </div>
          <div class="input-cont">
            <input ref={passwordRef} type="password" name="" required="" />
            <label>Password</label>
            <div class="border2"></div>
          </div>
              <span class="check">
                <input type="checkbox" /> <label>Remember Me</label>
              </span>
              <a href="#">Forgot Password</a>
              <div class="clear"></div>
          <input type="submit" disabled={isFetching} value="Log In"/>
         </form>
        <div class="loginAcc">
             
                   <a href="register">Don't have an account!, Please Register</a>
            
          
        </div> 
     
    </div>

  );
}