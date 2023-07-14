import Link from "next/link";
import React from "react";
import { images } from "../../../core/images";
import Image from "next/image";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";

function HeroSection() {
  return (
    <div className="bg-[#7f56f2] relative h-screen">
      <div className="w-[85%] mx-auto flex justify-between flex-col md:flex-row relative z-20">
        <div className="md:w-[60%] xl:w-[50%] md:pt-24">
          <h1 className="pt-24 text-5xl xl:text-6xl md:text-5xl font-bold text-white md:w-[80%]">
            Make <span className="text-[#000000]">Forms</span> in seconds with
            AI
          </h1>
          <p className="text-white text-xl mt-10">
            Just enter your prompt and see formy AI in action!
          </p>

          <div className="flex flex-col md:flex-row gap-5 justify-between md:justify-start md:gap-10 items-center">
            <div className="mt-10 w-full md:w-[82%] bg-white p-2 md:p-1 rounded-md flex items-center">
              <AutoAwesomeIcon className="mr-1 text-xl text-[#7f56f2]" />
              <input
                type="text"
                placeholder="Type the form name you want to generate..."
                className="w-full px-2 outline-none"
              />

              <button className="w-[300px] hidden md:block rounded-md text-center bg-black hover:opacity-80 duration-500  text-white py-2">
                <AutoAwesomeIcon className="mr-1 text-xl" /> Generate with AI
              </button>
            </div>
            <button className="w-full md:hidden rounded-md text-center bg-black hover:opacity-80 duration-500  text-white py-2">
              <AutoAwesomeIcon className="mr-1 text-xl" /> Generate with AI
            </button>
          </div>
        </div>

        <div className="md:pt-28">
          <Image src={images.heroSectionImg} alt="resume-ai" />
        </div>
      </div>
      <svg
        className="absolute bottom-0 bg-white z-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#7f56f2"
          fillOpacity="1"
          d="M0,256L48,229.3C96,203,192,149,288,160C384,171,480,245,576,245.3C672,245,768,171,864,122.7C960,75,1056,53,1152,85.3C1248,117,1344,203,1392,245.3L1440,288L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
}

export default HeroSection;
