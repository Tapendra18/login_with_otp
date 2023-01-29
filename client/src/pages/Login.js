import React, { useState } from 'react'
import "../styles/mix.css";
import {NavLink} from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

  const [email , setEmail] =useState("");

//send OTP

  const sendOtp = (e) =>{
    e.preventDefault();

    if(email === ""){
      toast.error("Enter Your Email!");
    }else if(!email.includes("@")){
      toast.error("Enter Your Email!");
    }else{
      toast.success("Login done")
    }
  }

  return (
    <>
    <section>
      <div className='form_data'>
        <div className='form_heading'>
          <h1>Welcome Back , Login</h1>
          <p>Hi , we are you glad you are back. please Login.</p>
        </div>
        <form>
          <div className='form_input'>
            <label htmlFor='email'>Email</label>
            <input type="input" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email address'/>
          </div>
          <button className='btn' onClick={sendOtp}>Login</button>
          <p>don't Have and  account <NavLink to="/register">Sign up</NavLink></p>
        </form>
      </div>
      <ToastContainer/>
    </section>
    </>
  )
}

export default Login