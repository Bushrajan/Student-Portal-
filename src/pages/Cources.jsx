import { useState } from "react";
import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { FiCalendar, FiUser } from "react-icons/fi";
import { LuBookOpen, LuChartColumn, LuCreditCard, LuGraduationCap } from "react-icons/lu";
import { Link } from "react-router-dom";
import { CiCalendar } from "react-icons/ci";

const Cources = () => {
    const courseData = [
        {
            title: "Web Application Development",
            code: "CSC3543",
            instructor: "Asad Kamal",
            credits: 3.0,
            attendance: 86.0,
            status: "Active",
        },
        {
            title: "Operating Systems - Lab",
            code: "CSC3551",
            instructor: "Qaisar Aslam",
            credits: 1.0,
            attendance: 92.0,
            status: "Active",
        },
        {
            title: "Software Engineering",
            code: "CSC3813",
            instructor: "M. Basit Ali Gillani",
            credits: 3.0,
            attendance: 79.0,
            status: "Active",
        },
        {
            title: "Operating Systems",
            code: "CSC3553",
            instructor: "Dr Adnan Ghafoor",
            credits: 3.0,
            attendance: 81.0,
            status: "Active",
        },
        {
            title: "Withdrawn Course",
            code: "CSC9999",
            instructor: "Mr Javed Khan",
            credits: 1.0,
            attendance: 15.8,
            status: "Withdraw",
        },
    ];

    const [filter, setFilter] = useState("All");

    const getBadgeStyle = (value) => {
        const percentage = typeof value === "number" ? value : 0;
        if (percentage >= 81) return "bg-green-100 text-green-500";
        if (percentage >= 65) return "bg-yellow-100 text-yellow-500";
        if (percentage >= 55) return "bg-red-100 text-red-500";
        return "bg-gray-100 text-gray-500";
    };

    const filteredCourses = courseData.filter((course) => {
        if (filter === "All") return true;
        return course.status === filter;
    });

    const activeCount = courseData.filter((c) => c.status === "Active").length;
    const withdrawCount = courseData.filter((c) => c.status === "Withdraw").length;

    const summary = {
        program: "BS Computer Science",
        semester: "Spring 2025",
        totalCourses: 4,
        activeCourses: 4,
        withdrawnCourses: 0,
        currentCredits: 10,
        totalCredits: 10,
    };

    motion
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-6 flex flex-wrap justify-between gap-5 w-full shadow-md mx-auto mt-6"
            >
                {/* Header */}
                <div className="flex gap-3 justify-center items-center mb-4">

                    <div className="p-2 px-5 py-5 bg-[#de8628] rounded-xl shadow-lg">
                        <LuBookOpen color="white" className=" w-7 h-7" />
                    </div>
                    <div className="text-center ">
                        <h2 className="text-xl mb-1 font-bold text-left text-black">All Courses</h2>
                        <h2 className="flex gap-2 text-sm border bg-[#ebc9a453]  border-[#de8628] text-[12px] mx-auto   rounded-full px-1 mb-1  text-[#de8628]"><LuGraduationCap color="#de8628" />  {summary.program}</h2>
                        <p className="flex gap-2 text-sm border  bg-[#8080803a] border-gray-500  text-[12px]  mx-auto rounded-full px-1 mb-1 text-gray-500"><CiCalendar className="text-gray-500" />  {summary.semester}</p>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="flex flex-wrap  gap-4 text-sm text-gray-700">
                    <div className=" bg-gray-50 w-[120px]   hover:bg-gray-50 p-3 rounded-md text-center">
                        <p>Total Courses</p>
                        <p className="font-semibold text-[15px] text-[#00A4EF] lg:text-[21px]">{summary.totalCourses}</p>
                    </div>
                    <div className=" bg-gray-50 w-[120px]   hover:bg-green-50 p-3 rounded-md text-center">
                        <p>Active</p>
                        <p className="font-semibold text-[15px] text-green-600 lg:text-[21px]">{summary.activeCourses}</p>
                    </div>
                    <div className=" bg-gray-50 w-[120px]   hover:bg-red-50 p-3 rounded-md text-center">
                        <p>Withdrawn</p>
                        <p className="font-semibold text-[15px] text-red-500 lg:text-[21px]">{summary.withdrawnCourses}</p>
                    </div>
                    <div className=" bg-gray-50 w-[120px]   hover:bg-yellow-50 p-3 rounded-md text-center">
                        <p>Current Credits</p>
                        <p className="font-semibold text-[15px] text-yellow-600 lg:text-[21px]">{summary.currentCredits}</p>
                    </div>
                    <div className=" bg-gray-50 w-[120px]   hover:bg-blue-50 p-3 rounded-md text-center col-span-2 sm:col-span-1">
                        <p>Total Credits</p>
                        <p className="font-semibold text-[15px] text-blue-600 lg:text-[21px]">{summary.totalCredits}</p>
                    </div>
                </div>
            </motion.div>

            <div className="bg-white rounded-xl shadow-md p-2 mt-5 w-full mx-auto">
                {/* Header + Filter Buttons */}
                <div className="flex flex-wrap justify-between items-center mt-5 gap-3">
                    <h2 className="text-xl font-bold text-[#de8628] mt-5 ps-5 mb-4">Course List</h2>
                    <div className="flex flex-wrap gap-3 lg:me-3">
                        {["All", "Active", "Withdraw"].map((type) => (
                            <button
                                key={type}
                                onClick={() => setFilter(type)}
                                className={`border p-2 rounded text-sm ${filter === type
                                    ? "border-[#de8628] text-[#de8628]"
                                    : "text-gray-500 hover:text-[#de8628] hover:border-[#de8628]"
                                    }`}
                            >
                                {type} Courses
                            </button>
                        ))}
                    </div>
                </div>

                {/* Course Cards */}
                <div className="space-y-4 flex flex-wrap gap-5 mx-auto justify-start md:p-5  pt-5">
                    {filteredCourses.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="lg:w-[360px]  md:w-[300px]   w-[300px] h-full border overflow-hidden border-gray-200 rounded-lg hover:shadow-lg transition duration-300"
                        >
                            <div className="bg-[#ebc9a489] ps-2 p-2">
                                <h3 className="text-lg font-semibold text-[#de8628]">{course.title}</h3>
                                <div className="mt-2 py-2 flex justify-between items-center">
                                    <p className="text-sm text-[#de8628]">{course.code}</p>
                                    <span
                                        className={`text-xs font-semibold px-2 py-1 rounded-full ${course.status === "Active"
                                            ? "bg-[#ebc9a47d] border text-[#de8628]"
                                            : "bg-red-100 border text-red-500"
                                            }`}
                                    >
                                        {course.status}
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col gap-4 p-2 mb-1 mt-1 text-sm text-gray-700">
                                <p className="flex items-center gap-1">
                                    <FiUser className="text-gray-500 me-2" />
                                    <span className="font-medium text-gray-500">{course.instructor}</span>
                                </p>
                                <p className="flex items-center gap-1">
                                    <LuCreditCard className="text-gray-500 me-2" />
                                    <span className="font-medium text-gray-500">Credits: {course.credits}</span>
                                </p>
                                <p className="flex items-center gap-1">
                                    <LuChartColumn className="text-gray-500 me-2" />
                                    <span className="font-medium text-gray-500">
                                        Grades:
                                        <button className="ms-1 text-[#de8628] text-sm font-medium hover:underline">
                                            <Link to="/Courses">view progress</Link>
                                        </button>
                                    </span>
                                </p>
                                <p className="flex items-center gap-1">
                                    <FiCalendar className="text-gray-500 me-2" />
                                    <span className="font-medium text-gray-500">Attendance:</span>
                                    <span
                                        className={`border p-1 ms-2 rounded-full px-5 lg:text-[12px] md:text-[12px] text-[10px] font-bold ${getBadgeStyle(
                                            course.attendance
                                        )}`}
                                    >
                                        {course.attendance !== "—" ? `${course.attendance}%` : "—"}
                                    </span>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Footer Summary */}
                <div className="p-2 flex flex-wrap gap-2 border-t justify-between border-gray-200 text-sm text-gray-600">
                    <div className="flex gap-4 items-center">
                        <span className="flex gap-2 items-center">
                            <Circle color="#de8628" fill="#de8628" className="w-3" />
                            Active Classes ({activeCount})
                        </span>
                        <span className="flex gap-2 items-center">
                            <Circle color="red" fill="red" className="w-3" />
                            Withdraw ({withdrawCount})
                        </span>
                    </div>
                    <div>
                        Showing {filteredCourses.length} of {courseData.length} courses
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Cources;