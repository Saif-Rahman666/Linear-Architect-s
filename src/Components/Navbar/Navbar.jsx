import React, { useState, useEffect, useContext } from "react";
import { navbarData } from "../../DataForPage/dummyData";
import logo from "../../assets/images/trace.svg";
import { Link } from "react-scroll";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";

const Navbar = () => {
  const { theme } = useContext(ThemeBgContext);
  const [scroll, setScroll] = useState(false);
  const handleScroll = () => {
    setScroll(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scroll]);

  return (
    <div className="w-full" style={{ display: 'flex', justifyContent: 'center' }}>
      <div
        className={
          scroll
            ? "sm:hidden h-16 w-full fixed flex transition items-center ease-in-out duration-500 bg-yellow-600 rounded-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 z-20"
            : "sm:hidden bg-transparent h-16 w-full fixed transition ease-in-out duration-500 flex items-center justify-between z-20"
        }
      >
        <div className="pl-4 w-4/5">
          <img className="h-12" src={logo} alt="logo-img"></img>
        </div>
        <div className="flex flex-row items-center pr-4">
          {navbarData.map((item) => {
            return (
              <div key={item.id} className="ml-4">
                <Link
                  to={item.link}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  offse={50}
                  duration={500}
                  isDynamic={true}
                  ignoreCancelEvents={false}
                  spyThrottle={500}
                  className={
                    theme === "light"
                      ? "cursor-pointer text-dark font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-yellow-500"
                      : "cursor-pointer text-white font-inter text-lg font-medium tracking-tight py-1 px-2 hover:text-yellow-500"
                  }
                >
                  {item.name}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
