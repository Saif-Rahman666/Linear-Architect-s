import React, { useState, useEffect, useContext } from "react";
import MidButton from "./MidButton";
import { sliderData } from "../../DataForPage/dummyData";
import MidChild from "./MidChild";
import { motion } from "framer-motion";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import Modal from "react-modal"; // Import Modal component

const MidFilterSection = () => {
  const buttons = [
    {
      id: "1",
      name: "Design1",
    },
    {
      id: "2",
      name: "Design2",
    },
    {
      id: "3",
      name: "Design3",
    },
  ];
  const { theme } = useContext(ThemeBgContext);
  const [selected, setSelected] = useState("1");
  const [click, setClick] = useState(false);
  const [data, setData] = useState([]);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal

  const filterData = (button) => {
    const filter = sliderData.filter((item) => item.id === button);
    setData(filter);
    setSelected(button);
    setClick(true);
  };

  useEffect(() => {
    const putData = (data) => {
      setData(data.filter((item) => item.id === "1"));
    };
    putData(sliderData);
  }, []);

  const handleImageClick = (img) => {
    setFullscreenImage(img);
    setModalIsOpen(true); // Open modal when image is clicked
  };

  const handleCloseFullscreen = () => {
    setFullscreenImage(null);
    setModalIsOpen(false); // Close modal when image is clicked
  };

  return (
    <div className="mx-auto pt-72 pb-56" id="news">
      <div className="sm:grid-cols-1 grid grid-cols-2 justify-items-center items-center">
        <motion.div
          className="sm:pt-10 sm:w-full sm:pl-4 w-4/5 mx-auto pl-24"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <h2
            className={
              theme === "light"
                ? "sm:text-3xl sm:w-full w-96 text-6xl font-bold font-inter no-underline aligin-middle tracking-wide normal-case leading-none text-dark"
                : "sm:text-3xl sm:w-full w-96 text-6xl font-bold font-inter no-underline aligin-middle tracking-wide normal-case leading-none text-white"
            }
          >
            Check out some of the Designs
          </h2>
          <MidButton
            buttons={buttons}
            filter={filterData}
            selected={selected}
          ></MidButton>
        </motion.div>
        <div className="ml-20 pb-4 relative mx-auto w-11/12 rounded-xl drop-shadow-2xl">
          <MidChild
            data={data}
            click={click}
            onImageClick={handleImageClick}
          ></MidChild>
        </div>
      </div>
      {/* Modal for displaying the selected image */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseFullscreen}
        contentLabel="Fullscreen Image"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            maxWidth: "80%",
            maxHeight: "80%",
            margin: "auto",
          },
        }}
      >
        <button onClick={handleCloseFullscreen}>Close</button>
        {fullscreenImage && <img src={fullscreenImage} alt="fullscreen" />}
      </Modal>
    </div>
  );
};

export default MidFilterSection;
