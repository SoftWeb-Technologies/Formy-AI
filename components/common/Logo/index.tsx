import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "../../../core/images";

const Logo = ({ href }: { href?: string }) => {
  href = href || "/";
  return (
    <Link href={href}>
      <div className="flex items-center">
        <div className="w-[29px] md:w-[35px]">
          <Image
            src={images.darkLogoImg}
            alt="FormAi-logo"
            width={100}
            className="object-fill"
          />
        </div>
        <Link href={"/"} className="flex items-center">
          <span className="text-2xl md:text-3xl font-semibold text-black">
            FormyAI
          </span>
        </Link>
      </div>
    </Link>
  );
};

export { Logo };
