import { useSelector, useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logoutUser from "../store/authSlice"; // Make sure this action exists
import { LogOut } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


export const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);

    const name = user?.email
        ? user.email.split("@")[0].charAt(0).toUpperCase() + user.email.split("@")[0].slice(1).toLowerCase()
        : "John Doe";

    const handleLogout = () => {
        dispatch(logoutUser()); // Clear Redux state
        navigate("/login");     // Redirect to login
    };

    motion
    return (
        <div className="lg:min-h-screen md:lg:min-h-screen sm:lg:min-h-screen lg:p-10 md:p-6 p-2 pt-15 pb-15 lg:mt-0 md:mt-0 sm:mt-5  mt-10 bg-gradient-to-br from-[#EBC9A4] to-white flex items-center justify-center ">
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="max-w-md w-full bg-white shadow-xl rounded-xl lg:p-6 md:p-4 p-2 text-center border border-gray-200"
            >
                <motion.img
                    src={user?.photoURL || "/p1.png"}
                    alt="Profile"
                    className="w-32 h-32 mx-auto rounded-full shadow-md mb-4 mt-4 border-4 border-[#f38e22]"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
              
                <h2 className="lg:text-3xl md:text-3xl text-xl font-bold text-gray-800 drop-shadow-sm mb-2">{name}</h2>
                <p className="text-sm text-gray-600 mb-1">{user?.email}</p> 
                <p className="text-gray-500 text-[15px] mb-4">Welcome to DevXcript Portal. You're logged in via {user?.provider}.</p>

                <button
                    onClick={handleLogout}
                    className="px-6 flex mb-4 gap-2 mx-auto py-2 bg-[#de8628] text-white rounded-full shadow hover:bg-[#b76309] transition"
                ><LogOut className="w-5" />
                    Logout
                </button>
            </motion.div>
        </div>
    );
}