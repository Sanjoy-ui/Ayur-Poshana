import React, { useState } from 'react';
import { FaArrowLeft, FaKey, FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { serverUrl } from '../App';
import { ClipLoader } from 'react-spinners';

function ForgotPassword() {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [otp, setOtp] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSendOtp = async () => {
        setLoading(true);
        try {
            const result = await axios.post(`${serverUrl}/api/auth/send-otp`, { email }, { withCredentials: true });
            console.log(result);
            setError("");
            setStep(2);
            setLoading(false);
        } catch (error) {
            setError(error?.response?.data?.message);
            setLoading(false);
        }
    };

    const handleVerifyOtp = async () => {
        setLoading(true);
        try {
            const result = await axios.post(`${serverUrl}/api/auth/verify-otp`, { email, otp }, { withCredentials: true });
            console.log(result);
            setError("");
            setStep(3);
            setLoading(false);
        } catch (error) {
            setError(error?.response?.data?.message);
            setLoading(false);
        }
    };

    const handleResetPassword = async () => {
        setLoading(true);
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match.");
            setLoading(false);
            return;
        }
        try {
            const result = await axios.post(`${serverUrl}/api/auth/reset-password`, { email, newPassword }, { withCredentials: true });
            console.log(result);
            navigate("/signin");
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    return (
        <div className="flex w-full items-center justify-center min-h-screen p-4 bg-green-50">
            <div className="bg-white rounded-xl shadow-lg w-full max-w-md p-8 border border-green-200">

                {/* Header with Back Arrow */}
                <div className="flex items-center gap-4 mb-6">
                    <FaArrowLeft size={28} className="text-green-600 cursor-pointer" onClick={() => navigate("/signin")} />
                    <h1 className="text-2xl font-bold text-green-700">Forgot Password</h1>
                </div>

                {step === 1 && (
                    <div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-1">Email</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400">
                                <FaEnvelope className="text-green-400 mr-2" />
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    className="w-full outline-none"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            className="w-full mt-4 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
                            onClick={handleSendOtp}
                        >
                            {loading ? <ClipLoader color="white" size={20} /> : "Send OTP"}
                        </button>
                        {error && <p className="text-red-500 text-center my-2">* {error}</p>}
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-1">OTP</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400">
                                <FaKey className="text-green-400 mr-2" />
                                <input
                                    type="text"
                                    placeholder="Enter OTP"
                                    onChange={(e) => setOtp(e.target.value)}
                                    value={otp}
                                    className="w-full outline-none"
                                    required
                                />
                            </div>
                        </div>
                        <button
                            className="w-full mt-4 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
                            onClick={handleVerifyOtp}
                        >
                            {loading ? <ClipLoader color="white" size={20} /> : "Verify OTP"}
                        </button>
                        {error && <p className="text-red-500 text-center my-2">* {error}</p>}
                    </div>
                )}

                {step === 3 && (
                    <div>
                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-1">New Password</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400">
                                <FaLock className="text-green-400 mr-2" />
                                <input
                                    type="password"
                                    placeholder="New Password"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    value={newPassword}
                                    className="w-full outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-1">Confirm Password</label>
                            <div className="flex items-center border rounded-lg px-3 py-2 focus-within:ring-2 focus-within:ring-green-400">
                                <FaLock className="text-green-400 mr-2" />
                                <input
                                    type="password"
                                    placeholder="Confirm Password"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    value={confirmPassword}
                                    className="w-full outline-none"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            className="w-full mt-4 flex items-center justify-center gap-2 bg-green-500 text-white font-semibold py-2 rounded-lg hover:bg-green-600 transition"
                            onClick={handleResetPassword}
                        >
                            {loading ? <ClipLoader color="white" size={20} /> : "Reset Password"}
                        </button>

                        {error && <p className="text-red-500 text-center my-2">* {error}</p>}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ForgotPassword;
