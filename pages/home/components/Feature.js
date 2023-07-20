import Image from "next/image";
import React from "react";
import { images } from "../../../core/images";

function Feature() {
  const featuresData = [
    {
      id: 1,
      imgUrl: images.featureImg1,
      title: "Generate online forms",
      description:
        "No coding, no templates, no hassle! Just tell forms.app AI what kind of form you need, and it generates a form for you in seconds. Then, you can customize your form with colors, images, custom questions, and more.",
    },
    {
      id: 2,
      imgUrl: images.featureImg2,
      title: "Create answer options",
      description:
        "No coding, no templates, no hassle! Just tell forms.app AI what kind of form you need, and it generates a form for you in seconds. Then, you can customize your form with colors, images, custom questions, and more.",
    },
    {
      id: 3,
      imgUrl: images.featureImg3,
      title: "Get unique forms for your website",
      description:
        "No coding, no templates, no hassle! Just tell forms.app AI what kind of form you need, and it generates a form for you in seconds. Then, you can customize your form with colors, images, custom questions, and more.",
    },
    {
      id: 4,
      imgUrl: images.featureImg4,
      title: "See alternative question titles ",
      description:
        "No coding, no templates, no hassle! Just tell forms.app AI what kind of form you need, and it generates a form for you in seconds. Then, you can customize your form with colors, images, custom questions, and more.",
    },
    {
      id: 5,
      imgUrl: images.featureImg5,
      title: "Generate questions from text",
      description:
        "No coding, no templates, no hassle! Just tell forms.app AI what kind of form you need, and it generates a form for you in seconds. Then, you can customize your form with colors, images, custom questions, and more.",
    },
  ];

  return (
    <div className="w-[85%] mx-auto">
      {featuresData.map((item, index) => {
        return (
          <FeatureViewPattern
            key={index}
            id={item.id}
            image={item.imgUrl}
            title={item.title}
            description={item.description}
          />
        );
      })}
    </div>
  );
}

export default Feature;

const FeatureViewPattern = ({ id, image, title, description }) => {
  return (
    <div
      className={`flex flex-col mt-[150px] md:mt-0 ${
        id % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
      }  justify-between items-center`}
    >
      <div className="md:w-[60%]">
        <Image src={image} />
      </div>
      <div className="md:w-[50%] md:px-16 py-20">
        <h1 className="text-4xl font-bold mb-8 md:mb-10">{title}</h1>
        <p className="text-xl text-black/80 w-full">{description}</p>
      </div>
    </div>
  );
};
