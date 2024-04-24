import React, { useContext } from "react";
import { room } from "../../DataForPage/dummyData";
import { motion } from "framer-motion";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const MidComponentItem = ({ title, img, text, reverse }) => {
  const { theme } = useContext(ThemeBgContext);

  return (
    <div id="company">
      {reverse ? (
        <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center">
          <motion.div
            className="sm:w-full sm:pl-4 w-4/5 pl-24 relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <div className="relative">
              <h2
                className={
                  theme === "light"
                    ? "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark relative z-10"
                    : "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white relative z-10"
                }
              >
                {title}
              </h2>
            </div>
            <p
              className={
                theme === "light"
                  ? "sm:text-xl text-2xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
                  : "sm:text-xl text-2xl w-full pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
              }
            >
              {text}
            </p>
          </motion.div>
          <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0 },
            }}
          >
            <img
              className="sm:h-[475px] h-[775px] pt-10 hover:rotate-6 duration-1000 cursor-pointer"
              src={img}
              alt="phone1"
            ></img>
          </motion.div>
        </div>
      ) : (
        <div
          id="room"
          className="sm:flex-col flex flex-row-reverse justify-around items-center w-full"
        >
          <div className="sm:w-full sm:pl-4 pb-4 relative">
            <div className={`bg-opacity-50 ${theme === "light" ? "bg-white" : "bg-black"} sm:bg-white rounded-lg p-4`}>
              <h2
                className={
                  theme === "light"
                    ? "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark relative z-10"
                    : "sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-white relative z-10"
                }
              >
                {title}
              </h2>
              <div className="flex flex-col">
                {room.map((item) => (
                  <div className="flex items-center py-2" key={item.id}>
                    <div>
                      <img
                        className="w-5 h-16"
                        src={item.img}
                        alt="blueSofa"
                      ></img>
                    </div>
                    <div className={`bg-opacity-50 ${theme === "light" ? "bg-white" : "bg-black"} sm:bg-white rounded-lg p-2`}>
                      <motion.div
                        className={
                          theme === "light"
                            ? "sm:text-xl text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark w-full relative z-10"
                            : "sm:text-xl text-2xl font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white w-full relative z-10"
                        }
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        variants={{
                          visible: { opacity: 1, scale: 1 },
                          hidden: { opacity: 0, scale: 0 },
                        }}
                      >
                        {item.name}
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <img
              className="sm:h-[475px] h-[775px] pt-1 hover:rotate-[-6deg] duration-1000 cursor-pointer"
              src={img}
              alt="phone"
            ></img>
          </div>
        </div>
      )}
    </div>
  );
};

export default MidComponentItem;
