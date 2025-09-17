import { useState } from "react";
import { useDispatch } from "react-redux";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../firebase";
import { setUser } from "../store/authSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const Auth = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();

    const isSignup = location.pathname === "/signup";
    const [email, setEmail] = useState("info@gmail.com");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailAuth = async (e) => {
        e.preventDefault();
        try {
            const userCred = isSignup
                ? await createUserWithEmailAndPassword(auth, email, password)
                : await signInWithEmailAndPassword(auth, email, password);

            const user = userCred.user;
            dispatch(setUser({
                uid: user.uid,
                email: user.email,
                photoURL: user.photoURL || "/p1.png",
                provider: "email",
            }));

            navigate("/dashboard");
        } catch (err) {
            console.error("Auth error:", err.message);
        }
    };

    const handleGoogleAuth = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            dispatch(setUser({
                uid: user.uid,
                email: user.email,
                photoURL: user.photoURL,
                provider: "google",
            }));

            navigate("/dashboard");
        } catch (err) {
            console.error("Google login error:", err.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 lg:px-4 md:px-4 p-2">
            <div className="max-w-md w-full bg-white lg:p-8 md:p-8 p-4 rounded-xl shadow-2xl">
                <h2 className="lg:text-3xl md:text-3xl text-[20px] text-center font-bold text-[#de8628] mb-2">
                    {isSignup ? "Create an Account for DevXcript Portal" : "Login to DevXcript Portal"}
                </h2>
                <p className="text-sm text-center text-gray-500 mb-6">
                    {isSignup
                        ? "Sign up with dummy email and password"
                        : "Enter dummy email password to access dashboard"}
                </p>

                <form onSubmit={handleEmailAuth} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="info@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#de8628]"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#de8628]"
                            />
                            <span
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-3 cursor-pointer text-gray-500"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`w-full lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-1 rounded-md text-white font-semibold transition ${isSignup ? "bg-[#de8628] hover:bg-[#b76309]" : "bg-[#de8628] hover:bg-[#b76309]"
                            }`}
                    >
                        {isSignup ? "Sign Up" : "Sign In"}
                    </button>
                </form>

                <div className="mt-1 py-5">
                    <div className="text-center border-b border-gray-200 " style={{ lineHeight: "0px" }} >
                        <span className="p-2 text-xs font-semibold tracking-wide lh-0 text-gray-600 uppercase bg-white" style={{ lineHeight: "0px" }}  >Or</span>
                    </div>
                    <button
                        onClick={handleGoogleAuth}
                        className="mt-6 flex items-center justify-center gap-2 border border-gray-300 w-full lg:px-4 md:px-4 px-2 lg:py-2 md:py-2 py-1 rounded-md hover:bg-gray-50"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                            <path fill="#ffc107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917" stroke-width="1" stroke="#ffc107" />
                            <path fill="#ff3d00" d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691" stroke-width="1" stroke="#ff3d00" />
                            <path fill="#4caf50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44" stroke-width="1" stroke="#4caf50" />
                            <path fill="#1976d2" d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917" stroke-width="1" stroke="#1976d2" />
                        </svg>

                        <span>{isSignup ? "Continue" : "Continue"} with Google</span>
                    </button>
                </div>

                <p className="text-sm text-center text-gray-500  lg:mt-4 md:mt-4">
                    {isSignup ? (
                        <>
                            Already have an account?{" "}
                            <a href="/login" className="text-[#de8628] font-medium hover:underline">Sign in</a>
                        </>
                    ) : (
                        <>
                            Don’t have an account?{" "}
                            <a href="/signup" className="text-[#de8628] font-medium hover:underline">Sign up</a>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Auth;