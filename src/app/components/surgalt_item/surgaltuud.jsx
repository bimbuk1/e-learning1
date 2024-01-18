import React from "react";
import Image from "next/image";

const Surgaltuud = (props) => {
  return (
    <div className=" border shadow-md m-8 ">
      {props.key}
      <Image className="w-full " src={props.img} alt="" />
      <div className="flex justify-between">
        <Image className="h-22 w-22 ml-8 -mt-8" src={props.img5} alt="" />
        <Image className="mx-4 pt-2" src={props.img4} alt="" />
      </div>
      <div>
        <p className="mx-8 mt-2 font-bold text-md">{props.paragraphs}</p>
        <p className="mx-8 mt-2  text-md">{props.paragraph_h}</p>
        <p className="mx-8 mt-2  text-md">{props.paragrap}</p>
      </div>
      <div className="flex-row ml-8 mb-6 mt-4 ">
        <div className="flex">
          <Image className="w-auto h-5 mt-2" src={props.img2} alt="" />
          <p className="p-2">{props.student}</p>
        </div>
        <div className="flex">
          <Image className="w-auto h-4 mt-3" src={props.img3} alt="" />
          <p className="p-2">{props.bvrt}</p>
        </div>
      </div>
    </div>
  );
};

export default Surgaltuud;
