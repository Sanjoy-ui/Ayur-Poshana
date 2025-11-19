import React, { useState } from 'react';

// A simple Google Icon SVG component.
const GoogleIcon = () => (
  <svg className="w-5 h-5 mr-3" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039L38.804 8.841C34.524 4.962 29.626 2.5 24 2.5C11.93 2.5 2.5 11.93 2.5 24s9.43 21.5 21.5 21.5c11.196 0 20.202-8.664 20.202-20.202c0-1.09-.092-2.162-.259-3.215z" />
    <path fill="#FF3D00" d="M6.306 14.691c-1.56 3.12-2.484 6.699-2.484 10.513c0 3.813.924 7.393 2.484 10.513l6.732-5.228C8.389 28.632 8 26.392 8 24c0-2.392.389-4.632 1.038-6.786l-6.732-5.228z" />
    <path fill="#4CAF50" d="M24 45.5c5.626 0 10.524-1.962 14.804-5.696l-6.732-5.228C29.676 36.368 27.025 38 24 38c-4.408 0-8.219-2.589-9.962-6.214l-6.732 5.228C11.094 42.124 17.025 45.5 24 45.5z" />
    <path fill="#1976D2" d="M44.241 20.083L43.611 20H24v8h11.303c-.792 2.447-2.24 4.545-4.162 6.083l6.732 5.228C41.332 36.608 44 30.684 44 24c0-2.162-.259-4.24-.759-6.215z" />
  </svg>
);

// This is the main React functional component for the login page.
const LoginPage = () => {
  // We use the React 'useState' hook to manage component state.
  const [activeTab, setActiveTab] = useState('patient');
  const [isLogin, setIsLogin] = useState(true);

  // The 'return' statement contains JSX, which is transpiled to JavaScript.
  // All 'className' attributes contain Tailwind CSS utility classes.
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center p-4 font-sans">
      <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl w-full max-w-md">
        
        <h1 className="text-4xl font-bold text-green-800 tracking-wide text-center mb-6">
          AyurMitra
        </h1>

        <div className="flex bg-green-50 rounded-full p-1 mb-8">
          <button
            onClick={() => setActiveTab('patient')}
            className={`w-1/2 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'patient' ? 'bg-white text-green-800 shadow-md' : 'text-gray-500'
            }`}
          >
            Patient
          </button>
          <button
            onClick={() => setActiveTab('practitioner')}
            className={`w-1/2 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeTab === 'practitioner' ? 'bg-white text-green-800 shadow-md' : 'text-gray-500'
            }`}
          >
            Practitioner
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-700 text-center mb-1">
          {/* {isLogin ? Welcome Back, ${activeTab === 'patient' ? 'Patient' : 'Practitioner'} : 'Create Your Account'} */}
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">{isLogin ? 'Please enter your details to sign in.' : 'Let\'s get you started.'}</p>

        <form className="space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="fullName">
                Full Name
              </label>
              <input 
                id="fullName"
                type="text" 
                placeholder="Priya Sharma"
                className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="email">
              Email Address
            </label>
            <input 
              id="email"
              type="email" 
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1" htmlFor="password">
              Password
            </label>
            <input 
              id="password"
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400 focus:border-transparent outline-none transition"
            />
          </div>
          
          {/* START: Added section for "Remember me" and "Forgot password?" */}
          {isLogin && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-green-700 hover:underline">
                  Forgot password?
                </a>
              </div>
            </div>
          )}
          {/* END: Added section */}

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-teal-400 text-white font-bold py-3 rounded-lg hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            {isLogin ? 'Login' : 'Create Account'}
          </button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-200" />
          <span className="mx-4 text-xs text-gray-400 font-semibold">OR</span>
          <hr className="flex-grow border-gray-200" />
        </div>

        <button
          className="w-full flex items-center justify-center py-2.5 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50 transition-colors"
        >
          <GoogleIcon />
          {isLogin ? 'Login' : 'Sign up'} with Google
        </button>

        <p className="text-center text-sm text-gray-600 mt-8">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button onClick={() => setIsLogin(!isLogin)} className="font-semibold text-green-700 hover:underline ml-1">
            {isLogin ? 'Sign up' : 'Login'}
          </button>
        </p>

        <p className="text-xs text-gray-500 text-center mt-8">
            By signing in, you agree to our{' '}
            <a href="#" className="font-semibold bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent hover:opacity-80">
                terms
            </a> and{' '}
            <a href="#" className="font-semibold bg-gradient-to-r from-green-400 to-teal-300 bg-clip-text text-transparent hover:opacity-80">
                policy
            </a>.
        </p>
      </div>
    </div>
  );
};
export default LoginPage;


// import React from 'react'

// function Test() {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default Test

