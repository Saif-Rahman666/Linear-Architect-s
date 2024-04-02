import React, { useContext } from "react";
import { Switch } from "@material-tailwind/react";
import { ThemeBgContext } from "../ContextWrapper/ThemeContext";
import { Experience } from "../Animation/Experience";
import { Canvas } from "@react-three/fiber";

const Header = ({ topRef }) => {
  const { theme, handleTheme } = useContext(ThemeBgContext);

  return (
    <div ref={topRef} className="mx-auto pt-20">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="sm:w-full sm:pl-4 w-full  pl-24">
          <Switch
            label={theme === "light" ? "Switch to Dark" : "Switch to Light"}
            defaultChecked={theme === "dark" ? true : false}
            onClick={handleTheme}
          />
          <h1
            className={
              theme === "light"
                ? "sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-dark"
                : "sm:text-3xl text-5xl font-russonOne font-medium no-underline align-middle tracking-wide normal-case leading-normal text-white"
            }
          >
            Welcome to{" "}
            <span
              className={
                theme === "light"
                  ? "sm:text-4xl text-dark text-6xl font-petitFormal font-bold"
                  : "sm:text-4xl text-white text-6xl font-petitFormal font-bold"
              }
            >
              Linear Architect's
            </span>{" "}
            Website
          </h1>
          <div className="mt-4">
            <p
              className={
                theme === "light"
                  ? "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-dark text-2xl"
                  : "sm:text-lg w-4/5 font-inter font-medium no-underline align-middle tracking-wide normal-case text-white text-2xl"
              }
            >
              Giving your home a propper makeover never was this easy. Modern
              and stylish furniture for decent prices. Take a look what we offer
              with simple button click.
            </p>
          </div>
          <div className="pb-20">
            <button className="pushable mt-4">
              <span className="front">Scroll Down</span>
            </button>
          </div>
        </div>
        <div className="sm:w-full sm:pl-4 w-full  mt-4">
          <div 
          className="sm:h-[475px] h-[765px] w-full bg-no-repeat bg-center relative z-10 header rounded-xl">
          <Canvas camera ={{
            fov : 64,
            position : [2.3, 1.5, 2.3],
          }}>
            <Experience />
          </Canvas>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
