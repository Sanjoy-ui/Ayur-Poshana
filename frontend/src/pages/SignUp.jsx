import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../App';
import axios from 'axios';
import { setUserData } from '../redux/userSlice';
import { useDispatch } from 'react-redux';
import { FcGoogle } from "react-icons/fc";
import { ClipLoader } from "react-spinners";
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';

export default function SignUp() {

  const primaryColor = "#159c71";
  const navigate = useNavigate();
  const [role, setRole] = useState("Patient");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const result = await axios.post(
        `${serverUrl}/api/auth/signup`,
        { fullName, email, password, role },
        { withCredentials: true }
      );
      dispatch(setUserData(result.data));
      setErr("");
      setLoading(false);
      navigate('/');
    } catch (error) {
      setErr(error?.response?.data?.message || 'Something went wrong');
      setLoading(false);
    }
  };

  const handleGoogleAuth = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    try {
      const { data } = await axios.post(`${serverUrl}/api/auth/google-auth`, {
        fullName: result.user.displayName,
        email: result.user.email,
        role,
      }, { withCredentials: true });
      dispatch(setUserData(data));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-green-50 text-gray-800 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-green-200">

        <h3 className="text-2xl font-semibold text-green-800 text-center mb-6">Create Your AyurPoshana Account</h3>

        <form className="flex flex-col gap-4" onSubmit={handleSignUp} autoComplete="on">

          <label className="text-sm font-medium text-green-700">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Your full name"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            className="w-full p-3 rounded-lg border border-green-300 bg-green-50 focus:ring-2 focus:ring-green-400 outline-none"
          />

          <label className="text-sm font-medium text-green-700">Email</label>
          <input
            name="signupEmail"
            type="email"
            placeholder="example@domain.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-3 rounded-lg border border-green-300 bg-green-50 focus:ring-2 focus:ring-green-400 outline-none"
          />

          <div className='mb-4'>
            <label htmlFor="role" className='block text-green-700 font-medium mb-1'>Role</label>
            <div className='flex gap-2'>
              {["Patient", "Doctor"].map((r) => (
                <button
                  type="button"
                  key={r}
                  className="flex-1 px-3 py-2 rounded-lg font-medium transition-colors"
                  style={
                    role === r
                      ? { backgroundColor: primaryColor, color: 'white' }
                      : { border: `1px solid ${primaryColor}`, color: primaryColor }
                  }
                  onClick={() => setRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <label className="text-sm font-medium text-green-700">Password</label>
          <input
            name="signupPassword"
            type="password"
            placeholder="Minimum 8 characters"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className="w-full p-3 rounded-lg border border-green-300 bg-green-50 focus:ring-2 focus:ring-green-400 outline-none"
          />

          {/* Sign Up Button */}
          <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
            {loading ? <ClipLoader color='white' size={20} /> : "Sign Up"}
          </button>

          {/* Or Separator */}
          <div className="flex items-center my-4">
            <div className="flex-grow h-[1px] bg-green-300"></div>
            <span className="mx-3 text-green-500 font-medium">or</span>
            <div className="flex-grow h-[1px] bg-green-300"></div>
          </div>

          {/* Google Auth Button */}
          <button type="button" className="flex items-center justify-center gap-3 w-full p-3 border border-green-300 rounded-lg bg-white hover:bg-green-100 transition"
            onClick={handleGoogleAuth}
          >
            <FcGoogle size={22} /> Continue with Google
          </button>

          {err && <p className='text-red-500 text-center my-2'>* {err}</p>}

          <p className="text-center mt-6 text-green-700 cursor-pointer" onClick={() => navigate('/signin')}>
            Already have an account? <span className="font-semibold hover:underline">Sign In</span>
          </p>

        </form>
      </div>
    </div>
  );
}
