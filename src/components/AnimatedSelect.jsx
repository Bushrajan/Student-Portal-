"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AnimatedSelect = ({ label, options }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(label);

  motion
  return (
    <div className="relative w-full">
      {/* Static Label */}
      <div className="w-full flex justify-between items-center bg-white px-4 py-3 text-gray-500 text-left rounded shadow select-none">
        <span style={{ fontSize: "14px" }}>{selected}</span>

        {/* SVG Toggle */}
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          className="ml-2 text-[#0D6DFD] cursor-pointer"
          onClick={() => setOpen(!open)}
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <path
            fill="none"
            stroke="#040000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="m17 14l-5-5m0 0l-5 5"
          />
        </motion.svg>
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute mt-1 w-full bg-white shadow-lg rounded-lg overflow-hidden z-50"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            {options.map((option, i) => (
              <motion.div
                key={option}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
              >
                {option}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedSelect;