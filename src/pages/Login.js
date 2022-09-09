import React, { useState } from 'react';
import { auth, provider, db } from "../firebase";
import { signInWithPopup } from "firebase/auth";

import './Login.css';

const Login = () => {

  const [login, setLogin] = useState(false)

  auth.onAuthStateChanged((user) => {
    if (user) {
      window.location.replace('./')
    } else {
      setLogin(true)
    }
  })

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
    .catch(() => {
      alert('Something went wrong.')
    })
  }

  return (
    <>
      {login && <div className='login'>
        <h1>Skydek™</h1>
        <div className='googleAuthButton' onClick={signInWithGoogle}>
          Continue with&nbsp;
          <span style={{color:"#4285F4"}}>G</span>
          <span style={{color:"#DB4437"}}>o</span>
          <span style={{color:"#F4B400"}}>o</span>
          <span style={{color:"#4285F4"}}>g</span>
          <span style={{color:"#0F9D58"}}>l</span>
          <span style={{color:"#DB4437"}}>e</span>
        </div>
      </div>}
    </>
  )
}

export default Login