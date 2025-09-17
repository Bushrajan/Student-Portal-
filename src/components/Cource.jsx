
import { motion } from "framer-motion";
import { FiCalendar, FiUser } from "react-icons/fi";
import { LuBookOpen, LuChartColumn, LuCreditCard, } from "react-icons/lu";
import { Link } from "react-router-dom"; 

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


    const getBadgeStyle = (value) => {
        const percentage = typeof value === "number" ? value : 0;
        if (percentage >= 81) return "bg-green-100 text-green-500";
        if (percentage >= 65) return "bg-yellow-100 text-yellow-500";
        if (percentage >= 55) return "bg-red-100 text-red-500";
        return "bg-gray-100 text-gray-500";
    };

   

   
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
            <div className="bg-white rounded-xl shadow-md p-2 pt-8 mt-5 w-full mx-auto">
                <div className="flex gap-3 lg:justify-start  mx-auto ms-5 items-center mb-4">

                    <div className="p-2 bg-[#ebc9a489] rounded-xl shadow-lg">
                        <LuBookOpen color="#de8628" className=" w-5 h-5" />
                    </div>
                    <div className="text-center">
                        <h2 className="text-xl font-bold text-left text-black">Current Courses</h2>
                        <ul className="flex gap-2 text-sm  lg:text-[15px] text-[12px]">
                            <li>{summary.semester}</li>
                            <li>• {summary.totalCourses} Enrolled Cources</li>
                        </ul>
                    </div>
                </div>
                {/* Course Cards */}
                <div className="space-y-4 flex flex-wrap gap-5 mx-auto  lg:justify-start justify-center items-center md:p-5 pt-5">
                    {courseData.map((course, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="lg:w-[360px]   md:w-[300px]   w-[300px] h-full border overflow-hidden border-gray-200 rounded-lg hover:shadow-lg transition duration-300"
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

                            <div className="flex flex-col gap-4 p-2 mb-3 pb-3 mt-1 text-sm text-gray-700">
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


            </div>
        </motion.div>
    );
};

export default Cources;