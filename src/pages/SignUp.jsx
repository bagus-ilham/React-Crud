  import React, { useState } from 'react'
import { auth } from '../config/Firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';


const SignUp = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [hai, setHai] = useState('')
  const navigate = useNavigate()

  const handeleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        if (user) {
          setHai(user.email)
        } else {
          console.log("SIA SAHA")
        }
        console.log(`success SignUp  with account ${user.email}`)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
        // ..
      });
  }

  return (
    <div>
      <h2>hai {hai}</h2>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handeleSignUp}>Sign Up</button>
      <br />
      <Link to="/">If you're already have an account continue to SignIn</Link>
    </div>
  )
}

export default SignUp