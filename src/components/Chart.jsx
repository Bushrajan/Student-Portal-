import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LuBookOpen } from "react-icons/lu";
import { Circle } from "lucide-react";

const Chart = () => {
    const totalCredits = 133;
    const completedCredits = 69;
    const remainingCredits = totalCredits - completedCredits;
    const creditTarget = ((completedCredits / totalCredits) * 100).toFixed(0);

    const gpa = 3.37;
    const maxGPA = 4;
    const gpaTarget = ((gpa / maxGPA) * 100).toFixed(0);
    const grade = "B+";

    const [creditCount, setCreditCount] = useState(0);
    const [gpaCount, setGpaCount] = useState(0);

    useEffect(() => {
        let creditInterval = setInterval(() => {
            setCreditCount((prev) => {
                if (prev < creditTarget) return prev + 1;
                clearInterval(creditInterval);
                return prev;
            });
        }, 20);

        let gpaInterval = setInterval(() => {
            setGpaCount((prev) => {
                if (prev < gpaTarget) return prev + 1;
                clearInterval(gpaInterval);
                return prev;
            });
        }, 20);

        return () => {
            clearInterval(creditInterval);
            clearInterval(gpaInterval);
        };
    }, [creditTarget, gpaTarget]);

    motion
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5"
        >
            <div className="flex lg:flex-row flex-wrap gap-3  lg:gap-3 lg:justify-between justify-center items-center mb-4">
                {/* Credit Hours Card */}
                <div className="lg:w-[49%]  w-full rounded-xl lg:p-5 p-2 shadow-lg bg-white lg:h-[400px] h-full flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex gap-3 items-center mb-4">
                        <div className="p-2 bg-[#ebc9a489] rounded-xl shadow">
                            <LuBookOpen color="#de8628" className="w-5 h-5" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-black">Credit Hours</h2>
                            <p className="text-sm text-gray-500">Academic Progress</p>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="text-center relative">
                        <svg
                            className="w-[200px] h-[200px] mx-auto rotate-[180deg]"
                            viewBox="0 0 200 200"
                        >
                            <circle
                                cx="100"
                                cy="100"
                                r="70"
                                stroke="#e5e7eb"
                                strokeWidth="20"
                                fill="none"
                            />
                            <circle
                                cx="100"
                                cy="100"
                                r="70"
                                stroke="#de8628"
                                strokeWidth="20"
                                fill="none"
                                strokeDasharray={439.6} // 2πr ≈ 2 * 3.14 * 70
                                strokeDashoffset={439.6 - (439.6 * creditCount) / 100}
                            // strokeLinecap="round"
                            />
                        </svg>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[28px] font-bold text-[#de8628]">
                            {creditCount}%
                            <p className="mt-2 text-sm text-gray-600">
                                {completedCredits} | {totalCredits} <br /> Credits
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 p-2 flex flex-col gap-2 border-t border-gray-200 text-sm text-gray-600">
                        <div className="flex justify-between items-center">
                            <span className="flex gap-2 items-center">
                                <Circle color="#de8628" fill="#de8628" className="w-3" />
                                Completed
                            </span>
                            <span>{completedCredits} hrs</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="flex gap-2 items-center">
                                <Circle color="gray" fill="gray" className="w-3" />
                                Remaining
                            </span>
                            <span>{remainingCredits} hrs</span>
                        </div>
                    </div>
                </div>

                {/* GPA Card */}
                <div className="lg:w-[49%]  w-full rounded-xl lg:p-5 p-2 shadow-lg bg-white lg:h-[400px] h-full flex flex-col justify-between">
                    {/* Header */}
                    <div className="flex gap-3 items-center mb-4">
                        <div className="p-2 bg-[#ebc9a489] rounded-xl shadow">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-[#de8628] w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 7h6v6"></path>
                                <path d="m22 7-8.5 8.5-5-5L2 17"></path>
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-black">GPA</h2>
                            <p className="text-sm text-gray-500">Academic Performance</p>
                        </div>
                    </div>

                    {/* Chart */}
                    <div className="relative w-[200px] h-[200px] mx-auto">
                        <svg className="w-full h-full rotate-[90deg]" viewBox="0 0 200 200">
                            <circle
                                cx="100"
                                cy="100"
                                r="70"
                                stroke="#e5e7eb"
                                strokeWidth="20"
                                fill="none"
                            />
                            <circle
                                cx="100"
                                cy="100"
                                r="70"
                                stroke="#de8628"
                                strokeWidth="20"
                                fill="none"
                                strokeDasharray={439.6} // 2πr = 2 * 3.14 * 70
                                strokeDashoffset={439.6 - (439.6 * gpaCount) / 100}
                            // strokeLinecap="round"
                            />
                        </svg>

                        {/* Centered Text */}
                        <div className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[28px] font-bold text-[#de8628]">
                            {gpaCount}%
                            <p className="mt-2 text-sm text-center text-gray-600">
                                {gpa} | {maxGPA} <br /> GPA
                            </p>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="mt-4 p-2 flex flex-col gap-2 border-t border-gray-200 text-sm text-gray-600">
                        <div className="flex justify-between items-center">
                            <span className="flex gap-2 items-center">
                                <Circle color="#de8628" fill="#de8628" className="w-3" />
                                Current GPA
                            </span>
                            <span>{gpa}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="flex gap-2 items-center">
                                <Circle color="gray" fill="gray" className="w-3" />
                                Letter Grade
                            </span>
                            <span className="flex gap-2 bg-[#DBEAFE] p-1 rounded border text-[#544AE6] items-center">
                                {grade}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div >
    );
};

export default Chart;