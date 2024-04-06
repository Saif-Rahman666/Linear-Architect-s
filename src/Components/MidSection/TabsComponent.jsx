import React, { useState, useContext } from "react";
import { Tabs, TabsHeader, TabsBody, TabPanel, Tab } from "@material-tailwind/react";
import Modal from "react-modal";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { tabsData } from "../../DataForPage/dummyData";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const TabsComponent = () => {
  const { theme } = useContext(ThemeBgContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const handleTabClick = (value) => {
    const tab = tabsData.find((tab) => tab.value === value);
    return tab ? tab.images : [];
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div id="features" className="flex flex-col justify-center items-center">
      <div className="w-4/5 pl-24">
        <h1
          className={`${
            theme === "light" ? "text-dark" : "text-white"
          } sm:text-4xl text-6xl pt-10 pb-4 font-bold font-inter no-underline align-middle tracking-wide normal-case leading-none text-center`}
        >
          Projects
        </h1>
        <p
          className={
            theme === "light"
              ? "sm:text-xl text-2xl pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-dark"
              : "sm:text-xl text-2xl pb-4 font-normal font-inter no-underline align-middle tracking-wide normal-case leading-none text-white"
          }
        >
          Linear Architect's offers many great features. You can create your own room,
          request a service, make modern looking Design, generate ideas for you
          and so much more. Take a sneak peek at each of them.
        </p>

        <Tabs
          id="custom-animation"
          value="bedroom"
          className="flex flex-col justify-center items-center content-between w-full"
        >
          <TabsHeader className="flex justify-center items-center content-center bg-gray-100">
            {tabsData.map(({ label, value }) => (
              <Tab key={value} value={value}>
                <p className="text-black font-inter leading-normal no-underline align-middle tracking-wide normal-case">
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
                        className="h-[550px] w-[350px] mx-auto my-2 object-cover rounded-lg shadow-lg cursor-pointer"
                        src={image}
                        alt="phone"
                        onClick={() => openModal(image)}
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
            maxWidth: "80%",
            maxHeight: "80%",
            margin: "auto",
          },
        }}
      >
        <button onClick={closeModal}>Close</button>
        {selectedImage && <img src={selectedImage} alt="selected" />}
      </Modal>
    </div>
  );
};

export default TabsComponent;
