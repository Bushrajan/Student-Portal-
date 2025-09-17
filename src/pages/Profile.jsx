import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../store/authSlice"; // Ensure this is a named export

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

motion
export const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { email, provider, photoURL } = useSelector((state) => state.user);

    const name = email
        ? email.split("@")[0].charAt(0).toUpperCase() + email.split("@")[0].slice(1).toLowerCase()
        : "John Doe";

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white flex items-center justify-center p-6">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="max-w-md w-full bg-white shadow-xl rounded-xl p-6 text-center border border-gray-200"
            >
                <motion.img
                    src={photoURL || "/p1.png"}
                    alt="Profile"
                    className="w-32 h-32 mx-auto rounded-full shadow-md mb-4 border-4 border-white"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />

                <h2 className="text-3xl font-bold text-gray-800 drop-shadow-sm mb-2">{name}</h2>
                <p className="text-sm text-gray-600 mb-1">{email}</p>
                <p className="text-gray-500 mb-4">Welcome to DevXcript Portal. You're logged in via {provider}.</p>

                <button
                    onClick={handleLogout}
                    className="px-6 py-2 bg-[#de8628] text-white rounded-full shadow hover:bg-[#b76309] transition"
                >
                    Logout
                </button>
            </motion.div>
        </div>
    );
};