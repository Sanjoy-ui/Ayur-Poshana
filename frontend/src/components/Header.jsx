import React from 'react'
import { useNavigate } from 'react-router-dom'

function Header() {
    const navigate = useNavigate()
  return (
    <div>
      <header className="py-6 px-8 sm:px-12 md:px-20 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-800 tracking-wide">AyurMitra</h1>
        <button className="px-6 cursor-pointer py-2 font-semibold text-green-900 bg-gradient-to-r from-green-200 to-white rounded-full shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out" onClick={()=>navigate("/signup")}>
            Login / Signup
        </button>
    </header>
    </div>
  )
}

export default Header
