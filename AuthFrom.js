import React, { useState } from 'react'

export default function AuthFrom() {
    const [isLogin, setIsLogin]= useState(true);
  return (
    <div className='container'> 
      <div className='form-container'>
        <div className='form-toggle'>
            <button className={isLogin ? 'active' : ""} onClick={()=> setIsLogin
                (true)}> login </button>
            <button className={!isLogin ? 'active' : ""} onClick={()=> setIsLogin
                (false)}>Sign up</button>
            
        </div>
        
            {isLogin ? <>
            <div className='form'>
                  <h2>Login Form</h2>

                 <input type='email' placeholder='Email'></input>
                <input type='password' placeholder='Password'></input>
                <a href='#'>  Forgot password?</a>
                <buttton>login</buttton>
                <p>Not a member?  <a href='#' onClick={()=> setIsLogin(false)}>Signup Now</a></p>
            </div>
            </> : <>
            <div className='form'>
             <h2>Signup Form</h2>

                 <input type='email' placeholder='Email'></input>
                 <input type='password' placeholder='Password'></input>
                 <input type='Confirm password' placeholder='Confirm Password'></input>
                 <button>sign up</button>
            
            </div>
            
            
            
            </>}
        
      </div>
    </div>
  )
}

