import React from "react";
import Image from "next/image";
import Link from "next/link";

const HicheelItem = (props) => {
  return (
    <Link href={props.too}>
      <div className="border shadow-lg md:p-4 p-14 items-center">
        <Image className="-mt-12" src={props.iconn} alt="mzvi" />
        <p>{props.hicheel}</p>
        <p className="text-xs text-gray-400">{props.too}</p>
      </div>
    </Link>
  );
};

export default HicheelItem;
