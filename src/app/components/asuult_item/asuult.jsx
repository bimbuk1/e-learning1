import React, { useState } from "react";
import Image from "next/image";

const AsuultItem = (props) => {
  const [isAccordionOpen, setAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setAccordionOpen(!isAccordionOpen);
  };

  return (
    <div className="flex-row items-center">
      <div
        className="flex border shadow-md p-4  mb-4  md:pr-36 pr-0 cursor-pointer"
        onClick={toggleAccordion}
      >
        <Image className="md:h-auto  h-4" src={props.vector} alt="img1" />
        <p className="pl-4 text-gray-600 whitespace-nowrap">{props.garchig}</p>
      </div>

      {isAccordionOpen && (
        <div
          className="border-2 shadow-md items-center mb-4  "
          style={{ width: "500px" }}
        >
          <p className="pl-12 py-4 text-gray-400 ">{props.hariult}</p>
        </div>
      )}
    </div>
  );
};

export default AsuultItem;
