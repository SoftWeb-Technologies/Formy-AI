import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div>
      <div>
        <div className="bg-[#7851A9] px-5 py-20">
          <h1 className="text-center text-3xl md:text-4xl font-bold text-white">
            Why take the long way around?
          </h1>
          <p className="text-center text-white/60 text-[18px] mt-2">
            We know a shortcut! Join over job seekers and build your outstanding
            resume.
          </p>

          <div className="mt-10 flex justify-center items-center">
            <Link
              href={"/craft-resume"}
              passHref
              className="text-[#451C78] bg-white px-8 py-2 rounded-lg shadow-lg hover:scale-105 duration-500"
            >
              Craft Resume
            </Link>
          </div>
        </div>
        <div className="pt-20 pb-5 text-center bg-white">
          <p>
            Handicrafted with ❤️ by{" "}
            <span className="font-medium text-purple-800">Darshan & Pavan</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
