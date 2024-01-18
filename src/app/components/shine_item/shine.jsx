import React from "react";
import Image from "next/image";
const ShineItem = (props) => {
  return (
    <div className="border shadow-md p-4 mx-8 ">
      <Image className="w-full z-0" src={props.zurag} alt="" />

      <Image className="z-10 -mt-28" src={props.zurag1} alt="" />
      <div className="mt-24">
        <p className=" mt-2 font-bold text-sm ">{props.para}</p>
      </div>
      <div>
        <div className="flex ">
          <div className="flex w-full justify-between">
            <Image
              className="h-4 w-auto ml-6 mt-1.5"
              src={props.zurag2}
              alt="njz"
            />
            <p className="mr-8  mt-2  text-xs text-gray-400">{props.bvrtgel}</p>
          </div>
          <div className="flex  justify-between">
            <p className="mx-4 mt-2  text-xs">{props.bvrtgel1}</p>
            <p className="-ml-2 mt-2  text-xs text-gray-400">
              {props.bvrtgel2}
            </p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex ">
            <Image
              className="h-4 w-auto mt-3 ml-4"
              src={props.zurag4}
              alt="nz"
            />
            <p className="ml-2 mr-8 mt-2  text-xs">{props.bvrtgel3}</p>
          </div>
          <Image className="h-4 w-auto mt-3" src={props.zurag5} alt="nz" />
          <p className="ml-2 mr-4 mt-2  text-xs">{props.bvrtgel4}</p>
          <Image className="h-4 w-auto mt-3 " src={props.zurag6} alt="nz" />
          <p className="ml-2 mr-4 mt-2  text-xs pb-2 mb-4">{props.bvrtgel5}</p>
        </div>
      </div>
      <div className="flex justify-between border-t pt-2">
        <div className="flex ">
          <Image className="h-auto w-auto" src={props.zurag7} alt="nz" />
          <p className="ml-3 mt-2 text-xs">{props.bvrtgel6}</p>
        </div>
        <p className="ml-8 mt-2 font-bold text-sm">{props.bvrtgel7}</p>
      </div>
    </div>
  );
};

export default ShineItem;
