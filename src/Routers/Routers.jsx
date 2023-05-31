import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../pages/login'
import SignUp from '../pages/SignUp'
import DisplayCountdown from '../TesComponent/DisplayCoundown'

const Routers = () => {
  return (
    <Routes>
        <Route
        exact
        path='/'
        element = {<Login />}
        />

        <Route
        path='/SignUp'
        element = {<SignUp/>}
         />

        <Route 
        path='/DisplayCountdown'
        element = {<DisplayCountdown/>}
        />
    </Routes>
  )
}

export default Routers