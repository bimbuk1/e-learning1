import React from "react";
import Image from "next/image";
const Course = (props) => {
  return (
    <div className="flex  border border-1 border-gray-100 mt-4 mb-4 rounded-lg">
      <Image className="mr-4" src={props.zurag} />
      <div className="flex flex-col ">
        <h1>{props.title}</h1>
        <p className="text-gray-300">{props.teext}</p>
        <p className="text-gray-400">{props.reply}</p>
      </div>
    </div>
  );
};

export default Course;
