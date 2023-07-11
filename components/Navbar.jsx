// import { images } from "@/core/images";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useEffect } from "react";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(scrollPosition);

  return (
    <div
      className={`w-full fixed top-0 z-50 ${
        scrollPosition ? "bg-[#7f56f2] shadow-lg" : ""
      } duration-500`}
    >
      <div className="flex justify-between items-center w-[85%] mx-auto py-5">
        <Link href={"/"} className="w-[35px] md:w-[100px] flex items-center">
          {/* <Image src={images.FormAiLogo} alt="FormAi-logo" /> */}
          <span className="text-2xl md:text-3xl font-semibold text-white">
            FormyAI
          </span>
        </Link>
        <div>
          <div className="hidden md:block">
            <NavbarMenu href={"/"} menuName={"Solutions"} />
            <NavbarMenu href={"/templates"} menuName={"Templates"} />
            <NavbarMenu href={"/templates"} menuName={"Pricing"} />
            <NavbarMenu href={"https://devhubhq.me"} menuName={"Resources"} />

            <Link
              href={"/auth/signin"}
              className="hidden md:ml-5 md:inline-block bg-white text-[#7f56f2] hover:scale-105 duration-500 px-5 py-2 rounded-md text-[16px] font-semibold"
            >
              Sign In
            </Link>
            <Link
              href={"/auth/signup"}
              className="hidden md:ml-2 md:inline-block bg-black text-white hover:scale-105 duration-500 px-5 py-2 rounded-md text-[16px] font-semibold"
            >
              Sign Up Free
            </Link>
          </div>
          <div onClick={() => setToggle(true)}>
            <MenuIcon className="text-white cursor-pointer block md:hidden" />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <MobileViewNavbar
          toggle={toggle}
          onClickToClose={() => setToggle(false)}
        />
      </div>
    </div>
  );
}

export default Navbar;

const MobileViewNavbar = ({ onClickToClose, toggle }) => {
  return (
    <div
      className={`w-full h-auto pb-5 bg-[#7f56f2] absolute z-50 top-0  ${
        toggle ? "translate-y-0" : "-translate-y-full"
      } duration-300 shadow-md`}
    >
      <div className="px-2 py-3 relative w-full">
        <div onClick={onClickToClose}>
          <CloseIcon className="text-white text-2xl absolute right-5 top-5 cursor-pointer" />
        </div>

        <div className="flex flex-col px-2 w-full pt-10">
          <MobileViewMenu href={"/"} menuName={"Solutions"} />
          <MobileViewMenu href={"/about"} menuName={"Templates"} />
          <MobileViewMenu href={"https://devhubhq.me"} menuName={"Pricing"} />
          <MobileViewMenu href={"/signin"} menuName={"Sign In"} />
          <MobileViewMenu href={"/signup"} menuName={"Sign Up Free"} />
        </div>
      </div>
    </div>
  );
};

const MobileViewMenu = ({ href, topBorderRequired, menuName }) => {
  return (
    <Link
      onClick={() => {}}
      href={href}
      passHref
      className={`border-b-2 ${
        topBorderRequired ? "border-t-2" : ""
      } py-2 border-white/20 group-hover:cursor-pointer w-full`}
    >
      <span className="text-white text-[16px] w-full">{menuName}</span>
    </Link>
  );
};

const NavbarMenu = ({ href, menuName }) => {
  return (
    <Link
      href={href}
      passHref
      className="text-white text-xl inline-block mx-7 px-3 relative group"
    >
      {menuName}
      <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full translate-y-2 bg-white scale-x-0 group-hover:scale-x-100 duration-300"></span>
    </Link>
  );
};
