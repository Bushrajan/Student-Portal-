import { motion } from "framer-motion";
import { FiCalendar, FiClock, FiMapPin, FiUser } from "react-icons/fi";

const examData = [
  {
    course: "OOP",
    instructor: "Babar Azam",
    date: "2024-07-13",
    time: "10:00 - 12:00",
    venue: "A - 010",
    num:"#1"
  },
  {
    course: "COAL",
    instructor: "Virat Kohli",
    date: "2024-07-15",
    time: "12:00 - 14:00",
    venue: "A - 010",
    num:"#3"
  },
  {
    course: "MVC",
    instructor: "Haris Rauf",
    date: "2024-07-16",
    time: "10:00 - 12:00",
    venue: "B - 108",
    num:"#3"
  },
  {
    course: "ISL",
    instructor: "Rizwan",
    date: "2024-07-16",
    time: "15:00 - 17:00",
    venue: "A - 010",
    num:"#4"
  },
  {
    course: "DS",
    instructor: "Starc",
    date: "2024-07-17",
    time: "12:00 - 14:00",
    venue: "C - 112",
    num:"#5"
  },
];

const DateSheet = () => {
  motion
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto"
    >
      <h2 className="text-xl font-bold text-[#de8628] mb-4">DateSheet</h2>
      <p className="text-gray-500">datesheet for upcomming spring 2025 exams</p>

      <div className="space-y-4 mt-5 flex gap-5 flex-wrap lg:justify-start md:justify-start justify-center items-center ">
        {examData.map((exam, index) => (
          <div
            key={index}
            className="w-[280px] h-[300px] bg-white rounded-xl shadow-md lg:p-6 p-4 hover:shadow-md transition duration-300"
          >
            <div className="flex justify-between gap-5  ">
              <span className="text-sm font-semibold px-3 py-1 text-[#de8628] bg-[#ebc9a47f] rounded-full mb-2">{exam.course}</span>
              <span className="text-lg font-semibold ">{exam.num}</span>
            </div>
            <div className= "flex flex-col gap-2 text-sm text-gray-700">
              <p className="flex items-center gap-4 mb-2">
                <FiUser className="text-[#de8628]" />
                <span className="font-medium text-[12px] text-gray-500">Instructor <br /> <span className="text-gray-500 text-[14px]">{exam.instructor}</span></span> 
              </p>
              <p className="flex items-center gap-4 mb-2">
                <FiCalendar className="text-[#de8628]" />
                <span className="font-medium text-[12px] text-gray-500">Date <br /> <span className="text-gray-500 text-[14px]">{exam.date}</span></span> 
              </p>
              <p className="flex items-center gap-4 mb-2">
                <FiClock className="text-[#de8628]" />
                <span className="font-medium text-[12px] text-gray-500">Time <br /> <span className="text-gray-500 text-[14px]">{exam.time}</span></span> 
              </p>
              <p className="flex items-center gap-4 mb-2">
                <FiMapPin className="text-[#de8628]" />
                <span className="font-medium text-[12px] text-gray-500">Venue <br /> <span className="text-gray-500 text-[14px]">{exam.venue}</span></span> 
              </p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default DateSheet;