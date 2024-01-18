import React from "react";
import Image from "next/image";
const MostnewItem = (props) => {
  return (
    <div className="border shadow-md p-4 mx-8 ">
      <Image className="w-full z-0" src={props.zuragg} alt="" />

      <Image className="z-10 -mt-28" src={props.zuragg1} alt="" />
      <div className="mt-24">
        <p className=" mt-2 font-bold text-sm ">{props.paraa}</p>
      </div>
      <div>
        <div className="flex">
          <div className="flex ml-6">
            <Image
              className="h-4 w-auto  mt-1.5"
              src={props.zuragg2}
              alt="njz"
            />
            <p className="mr-8 ml-2 mt-2  text-xs text-gray-400">
              {props.bvrtgell}
            </p>
          </div>
          <div className="flex space-x-0 ">
            <p className="mx-4 mt-2  text-xs">{props.bvrtgell1}</p>
            <p className="mx-8 mt-2 ml-34 text-xs text-gray-400">
              {props.bvrtgell2}
            </p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex ">
            <Image
              className="h-4 w-auto mt-3 ml-4"
              src={props.zuragg4}
              alt="nz"
            />
            <p className="ml-2 mr-8 mt-2  text-xs">{props.bvrtgell3}</p>
          </div>
          <Image className="h-4 w-auto mt-3" src={props.zuragg5} alt="nz" />
          <p className="ml-2 mr-4 mt-2  text-xs">{props.bvrtgell4}</p>
          <Image className="h-4 w-auto mt-3 " src={props.zuragg6} alt="nz" />
          <p className="ml-2 mr-4 mt-2  text-xs pb-2  mb-4">
            {props.bvrtgell5}
          </p>
        </div>
      </div>
      <div className="flex justify-between border-t pt-2">
        <div className="flex ">
          <Image className="h-8 w-auto" src={props.zuragg7} alt="nz" />
          <p className="ml-4 mt-2 text-xs whitespace-nowrap">
            {props.bvrtgell6}
          </p>
        </div>
        <p className="ml-8 mt-2 font-bold text-sm">{props.bvrtgell7}</p>
      </div>
    </div>
  );
};

export default MostnewItem;
