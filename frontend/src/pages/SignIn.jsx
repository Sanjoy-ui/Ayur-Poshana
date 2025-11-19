import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { serverUrl } from '../App';
import { setUserData } from '../redux/userSlice';
import axios from "axios";
import { useDispatch } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { auth } from '../../firebase.js';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export default function SignIn() {

    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await axios.post(`${serverUrl}/api/auth/signin`, { email, password }, { withCredentials: true });
            dispatch(setUserData(result.data));
            setError("");
            setLoading(false);
        } catch (error) {
            setError(error?.response?.data?.message);
            setLoading(false);
        }
    };

    const handleGoogleAuth = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        try {
            const { data } = await axios.post(`${serverUrl}/api/auth/google-auth`, {
                email: result.user.email,
            }, { withCredentials: true });
            dispatch(setUserData(data));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-8 bg-green-50 text-gray-800 font-sans">
            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8 border border-green-200">

                <h3 className="text-2xl font-semibold text-green-800 text-center mb-6">Welcome to AyurPoshana — Sign In</h3>

                <form className="flex flex-col gap-4" onSubmit={handleSignIn} autoComplete="on">
                    
                    <label className="text-sm font-medium text-green-700">Email</label>
                    <input
                        name="email"
                        type="email"
                        placeholder="example@domain.com"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                        className="w-full p-3 rounded-lg border border-green-300 bg-green-50 focus:ring-2 focus:ring-green-400 outline-none"
                    />

                    <label className="text-sm font-medium text-green-700">Password</label>
                    <input
                        name="password"
                        type="password"
                        placeholder="Your password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        required
                        className="w-full p-3 rounded-lg border border-green-300 bg-green-50 focus:ring-2 focus:ring-green-400 outline-none"
                    />

                    <p className='text-green-600 text-sm cursor-pointer hover:underline' onClick={() => navigate("/forgot-passowrd")}>
                        Forgot password?
                    </p>

                    {error && <p className='text-red-500 text-center my-2'>* {error}</p>}

                    {/* Sign In Button */}
                    <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition">
                        {loading ? <ClipLoader color='white' size={20} /> : "Sign In"}
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

                    <p className='text-center mt-6 text-green-700 cursor-pointer' onClick={() => navigate('/signup')}>
                        Don't have an account? <span className='font-semibold hover:underline'>Sign Up</span>
                    </p>

                    <p className='text-center text-xs text-green-600 mt-4'>
                        By signing in, you agree to our Terms and Privacy Policy
                    </p>

                </form>
            </div>
        </div>
    );
}
