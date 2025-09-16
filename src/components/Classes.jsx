 

import { motion } from "framer-motion"; 
import { CiCalendar } from "react-icons/ci";
import { FiBook } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import { LuClock } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";

const Classes = () => {
    const courseData = [
        {
            title: "Web Application Development",
            code: "CSC3543",
            instructor: "Asad Kamal",
            time: "09:00 AM - 10:30 AM",
            location: "Lab 1",
            class: "Lab",
            icon: <FiBook color="#de8628" className="w-3 h-3" />
        },
        {
            title: "Operating Systems - Lab",
            code: "CSC3551",
            instructor: "Qaisar Aslam",
            time: "11:00 AM - 12:30 PM",
            location: "Room 301",
            class: "Lecture",
            icon: <TbUsers color="#de8628" className="w-3 h-3" />
        },
        {
            title: "Software Engineering",
            code: "CSC3813",
            instructor: "M. Basit Ali Gillani",
            time: "02:00 PM - 03:30 PM",
            location: "Room 205",
            class: "Lecture",
            icon: <TbUsers color="#de8628" className="w-3 h-3" />
        },
    ];

    const currentDate = new Date().toLocaleDateString("en-US", {
        weekday: "long",
        day: "2-digit",
        month: "short",
    });

    motion
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-md p-4 pt-6 mt-5 w-full  mx-auto"
        >
            {/* Header */}
            <div className="flex gap-3 lg:justify-start justify-center items-center mb-4">
                <div className="p-2 bg-[#ebc9a489] rounded-xl shadow">
                    <CiCalendar color="#de8628" className="w-5 h-5" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-black">Today's Classes</h2>
                    <p className="text-sm text-gray-500">{currentDate}</p>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="h-[300px] overflow-y-auto px-2">
                <div className="space-y-4 flex flex-col pt-2">
                    {courseData.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="w-full hover:bg-gray-50 p-4 border border-gray-200 rounded-lg hover:shadow-md transition duration-300"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex gap-3 lg:justify-start justify-center items-center mb-4">
                                    <div className="py-3 bg-[#ebc9a489] rounded-xl shadow px-3 ">
                                         {course.icon}
                                    </div>
                                    <div>
                                        <h2 className="text-sm font-medium text-black">{course.title}</h2>
                                        <p className="text-sm text-gray-500">{course.code}</p>
                                    </div>
                                </div>
                                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-[#DBEAFE] border text-[#5447E6]">
                                    {course.class}
                                </span>
                            </div>

                            <div className="flex flex-col gap-1 mt-2 text-sm text-gray-700">
                                <span className="flex items-center gap-1 text-gray-500">
                                    <TbUsers className="text-gray-500 me-2" />
                                    {course.instructor}
                                </span>
                                <span className="flex items-center gap-1 text-gray-500">
                                    <LuClock className="text-gray-500 me-2" />
                                    {course.time}
                                </span>
                                <span className="flex items-center gap-1 text-gray-500">
                                    <IoLocationOutline className="text-gray-500 me-2" />
                                    {course.location}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Footer Summary */}
            <div className="mt-4 p-2 flex justify-between border-t border-gray-200 text-sm text-gray-600">
                <div className="flex gap-2 items-center">
                    <span>{courseData.length} classes scheduled</span>
                </div>
                <div className="text-[#de8628] font-medium cursor-pointer hover:underline">
                    View Full Schedule
                </div>
            </div>
        </motion.div>
    );
};

export default Classes;