import React, { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const MidChild = ({ data, click, onImageClick }) => {
  const { theme } = useContext(ThemeBgContext);
  
  return (
    <div>
      <div>
        {data.map((item) => {
          return (
            <motion.div
              key={item.id}
              className="sm:pt-10 sm:right-2 relative flex flex-col z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{
                y: click ? 20 : 0,
                x: click ? 20 : 0,
                opacity: 1,
              }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 1.5 }}
            >              
              <div className="flex flex-row justify-between items-center w-full">
                <div className="absolute right-0 -z-10">
                  <motion.img
                    className="w-full"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: click ? "525px" : "525px", opacity: 1 }}
                    transition={{ type: "tween", duration: 3 }}
                    src={item.img}
                    alt={item.title}
                    onClick={() => onImageClick(item.img)} // Call onImageClick when image is clicked
                  ></motion.img>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default MidChild;
