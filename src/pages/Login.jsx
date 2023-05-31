import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { auth } from '../config/Firebase'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [hai, setHai] = useState('')
  const navigate = useNavigate()

  const handleLogin = () => {
    setError('')


    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Pengguna berhasil masuk
        const user = userCredential.user
        if (user) {
          setHai(`hai ${user.email}`)
        } else {
          "SIA SAHA"
        }
        console.log(`success login with account ${user.email}`)
        // Lakukan tindakan lanjutan setelah masuk sukses
      })
      .catch((error) => {
        const errorCode = error.code;
        setError(error.message)
      })
  }

  return (
    <div>
      <h2>{hai}</h2>
      <h2>Login</h2>
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
      <button onClick={() => { handleLogin; navigate('/DisplayCountdown'); }}>Login</button>
      <button onClick={handleLogin}>Login</button>
      <br />
      <Link to="/SignUp">If you havn't an account sign up here</Link>
    </div>
  )
}

export default Login
