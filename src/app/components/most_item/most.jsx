import React from "react";
import Image from "next/image";
const MostItem = (props) => {
  return (
    <div className="border shadow-md p-4 mx-8">
      <Image className="w-full z-0" src={props.zzurag} alt="" />

      <Image className="z-10 -mt-28" src={props.zzurag1} alt="" />
      <div className="mt-24">
        <p className=" mt-2 font-bold text-sm ">{props.ppara}</p>
      </div>
      <div>
        <div className="flex">
          <div className="flex ml-6">
            <Image
              className="h-4 w-auto mt-1.5"
              src={props.zzurag2}
              alt="njz"
            />
            <p className="mr-8 ml-2 mt-2  text-xs text-gray-400">
              {props.bbvrtgel}
            </p>
          </div>
          <div className="flex space-x-0 ">
            <p className="mx-4 mt-2  text-xs">{props.bbvrtgel1}</p>
            <p className="mx-8 mt-2  text-xs text-gray-400">
              {props.bbvrtgel2}
            </p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex ">
            <Image
              className="h-4 w-auto mt-3 ml-4"
              src={props.zzurag4}
              alt="nz"
            />
            <p className="ml-2 mr-8 mt-2  text-xs">{props.bbvrtgel3}</p>
          </div>
          <Image className="h-4 w-auto mt-3" src={props.zzurag5} alt="nz" />
          <p className="ml-2 mr-4 mt-2  text-xs">{props.bbvrtgel4}</p>
          <Image className="h-4 w-auto mt-3 " src={props.zzurag6} alt="nz" />
          <p className="ml-2 mr-4 mt-2  text-xs pb-2  mb-4">
            {props.bbvrtgel5}
          </p>
        </div>
      </div>
      <div className="flex justify-between border-t pt-2">
        <div className="flex ">
          <Image className="h-auto w-auto" src={props.zzurag7} alt="nz" />
          <p className="ml-3 mt-2 text-xs">{props.bbvrtgel6}</p>
        </div>
        <p className="ml-8 mt-2 font-bold text-sm">{props.bbvrtgel7}</p>
      </div>
    </div>
  );
};

export default MostItem;
