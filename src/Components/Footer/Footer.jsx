import React from "react";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
// import MapComponent from "./MapComponent";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-yellow-700 py-6 text-black"> {/* Reduced padding */}
      <div className="container mx-auto flex flex-wrap justify-between gap-6">
        <div className="flex flex-col items-center sm:items-start">
          {/* <img className="h-16" src={logo} alt="logo" /> */}
          <h3 className="text-lg font-bold mb-2">Address</h3>
          <div>
            <h3 className="text-lg font-medium mb-2">Head Office</h3>
            <p>
              158/A, M Halim Road, Bagan Bari, Dhaka Cantonment, Dhaka - 1206
            </p>
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-2">Branch Office</h3>
            <p>
              1st Floor, Station Plaza, Station Road, Sadar Dinajpur, Dinajpur
              - 5200
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <div className="flex items-center mb-2">
            <FaPhoneAlt className="mr-2" />
            <p>+8801301370905</p>
          </div>
          <div className="flex items-center mb-2">
            <FaWhatsapp className="mr-2" />
            <p>+8801784933989</p>
          </div>
          <a
            href="https://www.facebook.com/Lineararchitects?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <FaFacebook className="mr-2" />
            <p>Facebook</p>
          </a>
          <a
            href="mailto:lineararchitectsltd@gmail.com"
            className="flex items-center mt-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M0 3a2 2 0 012-2h16a2 2 0 012 2v14a2 2 0 01-2 2H2a2 2 0 01-2-2V3zm18 2l-8 5-8-5V5l8 5 8-5v14H2V5l8 5 8-5v3z"
                clipRule="evenodd"
              />
            </svg>
            <p>lineararchitectsltd@gmail.com</p>
          </a>
        </div>
        <div className="flex flex-col items-center sm:items-start">
          <h3 className="text-lg font-bold mb-2">Map</h3>
          <div className="bg-white rounded-lg shadow-md p-4">
            <iframe
              title="Google Maps"
              className="w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.667857840187!2d88.63281111503325!3d25.627515617348173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff8ad3d377f0fb%3A0xbcd1d9797c8d970e!2sStation%20Plaza%2C%20Station%20Rd%2C%20Sadar%2C%20Dinajpur!5e0!3m2!1sen!2sbd!4v1649254434199"
              allowFullScreen
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="container mx-auto flex justify-center mt-8"> {/* Adjusted margin top */}
        <hr className="w-full bg-black h-0.5" />
      </div>
      <div className="container mx-auto flex justify-between items-center mt-4"> {/* Adjusted margin top */}
        <p>Linear Architect's</p>
        <p>© {year} Page by Linear Architect's</p>
      </div>
    </div>
  );
};

export default Footer;
