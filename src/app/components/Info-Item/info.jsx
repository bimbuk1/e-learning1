import React from "react";
import Image from "next/image";
const InfoItem = (props) => {
  return (
    <div className="items-centern justify-around z-10">
      <Image className=" h-4 w-4 ml-16" src={props.zur} alt="" />
      <h2 className=" text-white text-sm md:text-xl text-center ml-8 md:ml-2 m-2 mb-2">
        {props.title}
      </h2>
      <p className="text-sm text-white mb-2 ml-12 md:ml-2">{props.medee}</p>
    </div>
  );
};

export default InfoItem;
