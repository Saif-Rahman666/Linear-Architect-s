import React, { useState, useContext, useRef } from "react";
import { Tabs, TabsHeader, TabsBody, TabPanel, Tab } from "@material-tailwind/react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { tabsData } from "../../DataForPage/dummyData";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import "./TabsComponent.css"; 

const TabsComponent = () => {
  const { theme } = useContext(ThemeBgContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const sliderRef = useRef(null);

  const openModal = (images, index) => {
    setSelectedImages(images);
    setSelectedIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImages([]);
    setSelectedIndex(0);
    setModalIsOpen(false);
  };

  const handleTabClick = (value) => {
    const tab = tabsData.find((tab) => tab.value === value);
    return tab ? tab.images : [];
  };

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: selectedIndex,
  };

  // const customButtonStyle = {
  //   position: "absolute",
  //   top: "50%",
  //   transform: "translateY(-50%)",
  //   zIndex: 1,
  //   background: "transparent",
  //   color: "white",
  //   padding: "8px",
  //   borderRadius: "50%",
  //   cursor: "pointer",
  //   opacity: "0.5",
  //   transition: "opacity 0.3s",
  // };

  return (
    <div id="features" className="flex flex-col justify-center items-center py-12">
      <div className="w-4/5 pl-24 mx-auto text-center">
        <div className={`bg-${theme === "light" ? "white" : "black"} bg-opacity-25 backdrop-blur-md px-4 py-2 rounded-md mb-6 w-3/4 mx-auto`}>
          <h1
            className={`${
              theme === "light" ? "text-dark" : "text-white"
            } sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-center mx-auto`}
          >
            Projects
          </h1>
        </div>
        <p
          className={
            theme === "light"
              ? "sm:text-xl text-2xl pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
              : "sm:text-xl text-2xl pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
          }
        >
          Linear Architect's offers many great features. You can create your own room,
          request a service, make modern-looking designs, generate ideas for you,
          and so much more. Take a sneak peek at each of them.
        </p>

        <Tabs
          id="custom-animation"
          value="bedroom"
          className="flex flex-col justify-center items-center content-between w-full"
        >
          <TabsHeader className={`flex justify-center items-center content-center bg-gray-100 gap-4`}>
            {tabsData.map(({ label, value }) => (
              <Tab key={value} value={value}>
                <p className="text-lg font-bold text-black font-inter leading-normal no-underline align-middle tracking-wide normal-case">
                  {label}
                </p>
              </Tab>
            ))}
          </TabsHeader>
          <TabsBody
            animate={{
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            {tabsData.map(({ value }) => (
              <TabPanel key={value} value={value}>
                <Slider {...sliderSettings} className="gap-4">
                  {handleTabClick(value).map((image, index) => (
                    <div
                      key={index}
                      className="px-2 transition-transform duration-300 transform hover:rotate-3"
                    >
                      <img
                        className="h-[900px] w-[800px] mx-auto my-2 object-cover rounded-lg shadow-lg cursor-pointer"
                        src={image}
                        alt="phone"
                        onClick={() => openModal(handleTabClick(value), index)}
                      />
                    </div>
                  ))}
                </Slider>
              </TabPanel>
            ))}
          </TabsBody>
        </Tabs>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Image"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            maxWidth: "90%",
            maxHeight: "100%",
            margin: "auto",
            padding: 0,
          },
        }}
      >
        <button onClick={closeModal}>Close</button>
        <div style={{ position: "relative", width: "100%", height: "100%" }}>
          <Slider
            {...sliderSettings}
            ref={sliderRef}
            afterChange={(index) => setSelectedIndex(index)}
          >
            {selectedImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`Slider-${index}`} style={{ width: "100%", height: "100%" }} />
              </div>
            ))}
          </Slider>
          {/* <button
            style={{ ...customButtonStyle, left: 0 }}
            onClick={() => sliderRef.current.slickPrev()}
            disabled={selectedIndex === 0}
          >
            {"<"}
          </button>
          <button
            style={{ ...customButtonStyle, right: 0 }}
            onClick={() => sliderRef.current.slickNext()}
            disabled={selectedIndex === selectedImages.length - 1}
          >
            {">"}
          </button> */}
        </div>
      </Modal>
    </div>
  );
};

export default TabsComponent;
