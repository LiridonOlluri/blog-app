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
    <div class="login-box">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div class="user-box">
                <input ref={userRef} type="text" name="" required=""></input>
                <label>Username</label>
              </div>
              <div class="user-box">
                <input ref={passwordRef} type="password" name="" required=""></input>
                <label>Password</label>
              </div>
              <button className="button" type="submit" disabled={isFetching}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
              </button>
              
            </form>
            
                   
          </div>
  );
}