import Link from "next/link";
import React from "react";

function HeroSection() {
  return (
    <div className="bg-[#7f56f2]">
      <div className="w-[90%] mx-auto flex justify-between items-center flex-col md:flex-row">
        <div className="md:w-[60%] xl:w-[50%] md:pt-24">
          <h1 className="pt-24 text-5xl xl:text-6xl md:text-5xl font-bold text-white md:w-[80%]">
            Make <span className="text-[#E7D4FF] font-serif">Resume</span> in
            seconds with AI
          </h1>
          <p className="text-white/60 text-xl mt-10">
            Create professional resumes in less than a minute, Don't worry we
            have AI to handle everything!
          </p>

          <div className="flex justify-between md:justify-start md:gap-10 items-center">
            <div className="mt-10">
              <Link
                href={"/dashboard"}
                passHref
                className="text-black border-2 px-5 py-2 rounded-md bg-white hover:bg-transparent hover:text-white duration-500 font-medium"
              >
                See the magic🌟
              </Link>
            </div>
            <div className="mt-10">
              <Link
                href={"https://devhubhq.me"}
                passHref
                className="text-white border-2 border-[#996AD6] hover:border-white px-9 py-2 rounded-md bg-[#996AD6] hover:bg-transparent hover:text-white duration-500 font-medium"
              >
                Hub for devs
              </Link>
            </div>
          </div>
        </div>

        <div className="md:pt-28">
          {/* <Image src={images.resumeAiImg} alt="resume-ai" /> */}
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
