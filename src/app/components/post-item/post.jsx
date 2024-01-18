import React from "react";
import Image from "next/image";
const PostItem = (props) => {
  return (
    <div className="flex items-center border-b mb-3 h-28  ">
      <Image
        className="w-32
       md:w-auto border-b  pb-2 border-gray-100 "
        src={props.image}
        alt="rect11"
      />
      <div className="p-5">
        <p className="text-gray-400">2 өдрийн өмнө</p>
        <p className="text-sky-700 font-bold">
          Монголд хараат бус төв банк хэрэгтэй байна.
        </p>
      </div>
    </div>
  );
};

export default PostItem;
