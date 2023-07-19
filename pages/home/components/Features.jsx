import Image from "next/image";
import React from "react";
import { images } from "../../../core/images";

function Features() {
  return (
    <div className="h-screen mt-36 py-10 px-10 flex justify-between items-start">
      <div>
        <Image src={images.formsImg} />
      </div>
      <div>2</div>
    </div>
  );
}

export default Features;
