import ForgotPassword from './pages/ForgotPassword'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import {Navigate, Route, Routes } from 'react-router-dom'
import Deshboard from './pages/deshboard'
import UseGetCurrentUser from './hooks/UseGetCurrentUser'
import { useSelector } from 'react-redux'
import LandingPage from './pages/LandingPage'
import Calculator from './pages/Calculator'
import FoodSearch from './pages/FoodSearch'

export const serverUrl = "http://localhost:8000"

function App() {
  UseGetCurrentUser()
  const { userData } = useSelector(state => state.user)
  return (
    <Routes>
      <Route path="/signup" element={!userData ? <SignUp /> : <Navigate to={"/deshboard"} />} />
      <Route path="/signin" element={!userData ? <SignIn /> : <Navigate to={"/deshboard"} />} />
      <Route path="/forgot-passowrd" element={!userData ? <ForgotPassword /> : <Navigate to={"/deshboard"} />} />
      <Route path="/" element={!userData ? <LandingPage /> : <Navigate to={"/deshboard"} />} />
      <Route path="/deshboard" element={userData ? <Deshboard /> : <Navigate to={"/signin"} />} />
      <Route path="/calculator" element={userData ? <Calculator /> : <Navigate to={"/signin"} />} />
      <Route path="/search" element={userData ? <FoodSearch /> : <Navigate to={"/signin"} />} />
    </Routes>
  )
}

export default App
