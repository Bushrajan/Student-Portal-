
import Cources from '../components/Cource'
import Classes from '../components/Classes'
import { motion } from "framer-motion";
import { LuBookOpen, LuGraduationCap } from "react-icons/lu";
import { useSelector } from "react-redux";
import Chart from '../components/Chart'; 

const Home = () => {
    const user = useSelector((state) => state.auth.user);

    motion
    return (
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className=" rounded-xl py-6 flex flex-wrap justify-between gap-5 w-full bg-white shadow-md  mt-6"
            >
                {/* Header */}
                <div className="flex lg:gap-3 md:gap-3  flex-wrap lg:justify-between justify-center lg:items-start md:items-start items-center  mx-auto">
                    <div className="p-2 lg:px-5 md:px-5 lg:py-5 md:py-5 bg-[#de8628] rounded-xl shadow-lg">
                        <LuBookOpen color="white" className="w-7  h-7 " />
                    </div>
                    <div className="text-center m">
                        <h2 className="text-xl mb-1 font-bold lg:text-left text-black">
                            {user?.email
                                ? user.email.split('@')[0].charAt(0).toUpperCase() + user.email.split('@')[0].slice(1).toLowerCase():"John Doe"}
                        </h2>
                        <h2 className="flex lg:text-left lg:text-[15px] lg:justify-start  justify-center font-medium  gap-2 text-sm  text-[12px] mx-auto rounded-full px-1">
                            L1PCBCS56
                        </h2>
                        <p className="flex  lg:text-[15px] font-medium gap-2 text-sm  border-gray-500 text-[12px] mx-auto rounded-full px-1 mb-1 text-gray-500"> Faculty of Information Technology and Computer Science
                        </p>
                        <span className="w-[150px] flex gap-2 justify-center items-center lg:mx-0 mx-auto text-sm border bg-[#ebc9a453] border-[#de8628] text-[12px] rounded-full px-1 py-1 mb-1 text-[#de8628]">
                            <LuGraduationCap color="#de8628" />BS Computer Science
                        </span>
                    </div>
                </div>


                {/* Stats Grid */}
                <div className="flex flex-wrap justify-center items-center mx-auto gap-4 text-sm text-gray-700">
                    <div className=" bg-gray-50 lg:w-[120px] md:w-[120px]   hover:bg-gray-50 p-3 rounded-md text-center">
                        <p className='text-[12px]'>CGPA</p>
                        <p className="font-semibold text-[15px] text-gray-700 lg:text-[21px]">3.23</p>
                    </div>
                    <div className=" bg-gray-50 lg:w-[120px] md:w-[120px]   hover:bg-green-50 p-3 rounded-md text-center">
                        <p className='text-[12px]'>Earned Credits</p>
                        <p className="font-semibold text-[15px] text-green-600 lg:text-[21px]">69</p>
                    </div>
                    <div className=" bg-gray-50 lg:w-[120px] md:w-[120px]  text-gray-700 hover:bg-gray-50 p-3 rounded-md text-center">
                        <p className='text-[12px]'>Total Credits</p>
                        <p className="font-semibold text-[15px]  lg:text-[21px]">133</p>
                    </div>
                    <div className=" bg-gray-50 lg:w-[120px] md:w-[120px]   hover:bg-red-50 p-3 rounded-md text-center">
                        <p className='text-[12px]'>In Progress</p>
                        <p className="font-semibold text-[15px] text-red-500 lg:text-[21px]">10</p>
                    </div>

                </div>
            </motion.div>

            <Chart />
            <Classes />
            <Cources />
        </div>
    )
}

export default Home