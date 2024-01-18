"use client";
import InfoItem from "@/app/components/Info-Item/info";
import PostItem from "@/app/components/post-item/post";
import ShineItem from "@/app/components/shine_item/shine";
import HicheelItem from "@/app/components/hicheel_item/hicheel";
import MostnewItem from "@/app/components/mostnew_item/nenew";
import AsuultItem from "@/app/components/asuult_item/asuult";
import MostItem from "@/app/components/most_item/most";
import Surgaltuud from "@/app/components/surgalt_item/surgaltuud";
import Image from "next/image";
import { useState, useRef } from "react";
import img1 from "../img/image 1.png";
import group20 from "../img/Group 20.png";
import group48 from "../img/Group 48.png";
import group21 from "../img/Group 21.png";
import rect36 from "../img/Rectangle 36.png";
import rect48 from "../img/Rectangle 48.png";
import news from "../img/news-big.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useRouter } from "next/navigation";
import asuults from "../static-data/asuult";
import posts from "../static-data/posts";
import infos from "../static-data/infos";
import surgaltuuds from "../static-data/surgaltuuds";
import nenews from "../static-data/nenews";
import hicheels from "../static-data/hicheels";
import mosts from "../static-data/mosts";
import shines from "../static-data/shines";
const Page = () => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const surgaltuudSliderRef = useRef(null);
  const shineSliderRef = useRef(null);
  const mostSliderRef = useRef(null);
  const nenewSliderRef = useRef(null);
  const next = () => {
    surgaltuudSliderRef.current.slickNext();
  };
  const previous = () => {
    surgaltuudSliderRef.current.slickPrev();
  };
  const next1 = () => {
    shineSliderRef.current.slickNext();
  };
  const previous1 = () => {
    shineSliderRef.current.slickPrev();
  };
  const next2 = () => {
    mostSliderRef.current.slickNext();
  };
  const previous2 = () => {
    mostSliderRef.current.slickPrev();
  };
  const next3 = () => {
    nenewSliderRef.current.slickNext();
  };
  const previous3 = () => {
    nenewSliderRef.current.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const navigateToLesson = () => {
    router.push("/lesson");
  };
  const navigateToLogin = () => {
    router.push("/login");
  };
  return (
    <>
      <Image
        className=" absolute z-0 h-auto -ml-[909px] -mt-[909px]"
        src={rect48}
        alt="buurunhii"
      />
      <header
        className={`flex items-center justify-between  md:justify-around border shadow-md mx-6 mt-6 py-6 px-6 rounded-md`}
      >
        <div className="flex items-center">
          <h1 className="text-3xl text-sky-700 font-bold">БМДИ</h1>
        </div>

        <div className="md:hidden flex items-center relative">
          <button className="ml-auto" onClick={() => setMenuOpen(!isMenuOpen)}>
            ☰
          </button>

          {isMenuOpen && (
            <div className="absolute top-full left-0 mt-2 bg-white border shadow-md p-2 rounded-md">
              <nav className="flex flex-col items-start space-y-2">
                <li className="list-none">Мэдээ</li>
                <li className="list-none">Сургалт</li>
                <li className="list-none">Хичээл</li>
                <li className="list-none">Асуулт, Хариулт</li>
                <li className="list-none border-t-gray-500 pt-1">НЭВТРЭХ</li>
                <li className="list-none border rounded-lg border-amber-500 bg-yellow-50 text-orange-300 p-1">
                  БҮРТГҮҮЛЭХ
                </li>
              </nav>
            </div>
          )}
        </div>
        <div
          className={`hidden md:flex  space-x-12 text-gray-400 items-center`}
        >
          <ul className="flex justify-center space-x-12   text-gray-400 items-center mx-6">
            <li>Мэдээ</li>
            <li>Сургалт</li>
            <li onClick={navigateToLesson}> Хичээл</li>
            <li>Асуулт, Хариулт</li>
          </ul>
          <ul className="flex items-center">
            <li
              onClick={navigateToLogin}
              className="border-l-2 pl-4 pr-6 text-gray-400"
            >
              НЭВТРЭХ
            </li>
            <li className="border rounded-lg border-amber-500 bg-yellow-50 text-orange-300 p-2">
              БҮРТГҮҮЛЭХ
            </li>
          </ul>
        </div>
      </header>
      <body className="flex ">
        <div className="md:flex   md:m-12 m-4 justify-around  md:mx-32 mx-0">
          <div>
            {" "}
            <Image className="" src={news} alt="news" />
          </div>
          <div className="md:ml-8 ml-16 md:mt-0 mt-8">
            {posts.map((post, i) => {
              return <PostItem image={post.image} key={i} />;
            })}
          </div>
        </div>
        <div>
          <Image
            className="   absolute z-0 md:h-auto h-32"
            src={rect36}
            alt="rect36"
          />
          <div className="flex justify-around z-10 p-8  pl-0">
            {infos.map((info, i) => {
              return (
                <InfoItem
                  zur={info.zur}
                  title={info.title}
                  medee={info.medee}
                  key={i}
                />
              );
            })}
          </div>
        </div>
        <div className="">
          <div
            id="shine surgaltuud"
            className="mx-8 md:mx-16 justify-around mt-12"
          >
            <div className="flex items-center mb-8">
              <header className="text-blue-500 text-2xl md:text-4xl">
                Сургалтууд
              </header>
              <div className="flex ml-auto">
                <button className="ml-2 focus:outline-none" onClick={next}>
                  <Image className="h-9 w-9" src={group20} alt="shine" />
                </button>
                <button className="ml-2 focus:outline-none" onClick={previous}>
                  <Image className="h-9 w-9" src={group21} alt="shine2" />
                </button>
              </div>
            </div>
          </div>

          <Slider ref={surgaltuudSliderRef} {...settings}>
            {[
              ...surgaltuuds.filter(
                (s) => s.img === group20 || s.img2 === group21,
              ),
              ...surgaltuuds.filter(
                (s) => s.img !== group20 && s.img2 !== group21,
              ),
            ].map((surgaltuud, i) => {
              return (
                <Surgaltuud
                  img={surgaltuud.img}
                  img2={surgaltuud.img2}
                  img3={surgaltuud.img3}
                  img4={surgaltuud.img4}
                  img5={surgaltuud.img5}
                  paragraphs={surgaltuud.paragraphs}
                  paragraph_h={surgaltuud.paragraph_h}
                  paragrap={surgaltuud.paragrap}
                  student={surgaltuud.student}
                  bvrt={surgaltuud.bvrt}
                  key={i}
                />
              );
            })}
          </Slider>
        </div>
        <div
          id="shine surgaltuud"
          className=" mx-8 md:mx-16 justify-around mt-12"
        >
          <div className="flex items-center mb-8">
            <header className="text-blue-500 text-xl md:text-4xl">
              Шинэ нэмэгдсэн хичээлүүд
            </header>
            <div className="flex ml-auto">
              <button className=" md:ml-2 focus:outline-none" onClick={next1}>
                <Image
                  className="w-10 h-auto md:h-9 md:w-9"
                  src={group20}
                  alt="shine"
                />
              </button>
              <button className="ml-2 focus:outline-none" onClick={previous1}>
                <Image
                  className="w-10 h-auto md:h-9 md:w-9"
                  src={group21}
                  alt="shine2"
                />
              </button>
            </div>
          </div>
        </div>

        <Slider ref={shineSliderRef} {...settings} slidesToShow={4}>
          {shines.map((shine, i) => {
            return (
              <ShineItem
                zurag={shine.zurag}
                zurag1={shine.zurag1}
                zurag2={shine.zurag2}
                zurag3={shine.zurag3}
                zurag4={shine.zurag4}
                zurag5={shine.zurag5}
                zurag6={shine.zurag6}
                zurag7={shine.zurag7}
                para={shine.para}
                suragch={shine.suragch}
                bvrtgel={shine.bvrtgel}
                bvrtgel1={shine.bvrtgel1}
                bvrtgel2={shine.bvrtgel2}
                bvrtgel5={shine.bvrtgel5}
                bvrtgel4={shine.bvrtgel4}
                bvrtgel3={shine.bvrtgel3}
                bvrtgel6={shine.bvrtgel6}
                bvrtgel7={shine.bvrtgel7}
                key={i}
              />
            );
          })}
        </Slider>
        <div
          id="shine surgaltuud"
          className=" mx-8 md:mx-16 justify-around mt-12"
        >
          <div className="flex items-center mb-8">
            <header className="text-blue-500 text-xl md:text-4xl">
              Хамгийн их үзэлттэй хичээлүүд
            </header>
            <div className="flex ml-auto">
              <button className="ml-2 focus:outline-none" onClick={next2}>
                <Image
                  className="w-12 h-auto md:h-9 md:w-9"
                  src={group20}
                  alt="shine"
                />
              </button>
              <button className="ml-2 focus:outline-none" onClick={previous2}>
                <Image
                  className="w-12 h-auto md:h-9 md:w-9"
                  src={group21}
                  alt="shine2"
                />
              </button>
            </div>
          </div>
        </div>
        <Slider ref={mostSliderRef} {...settings} slidesToShow={4}>
          {mosts.map((most, i) => {
            return (
              <MostItem
                zzurag={most.zzurag}
                zzurag1={most.zzurag1}
                zzurag2={most.zzurag2}
                zzurag3={most.zzurag3}
                zzurag4={most.zzurag4}
                zzurag5={most.zzurag5}
                zzurag6={most.zzurag6}
                zzurag7={most.zzurag7}
                ppara={most.ppara}
                suragch={most.ssuragch}
                bbvrtgel={most.bbvrtgel}
                bbbvrtgel1={most.bbvrtgel1}
                bbvrtgel2={most.bbvrtgel2}
                bbvrtgel5={most.bbvrtgel5}
                bbvrtgel4={most.bbvrtgel4}
                bbvrtgel3={most.bbvrtgel3}
                bbvrtgel6={most.bbvrtgel6}
                bbvrtgel7={most.bbvrtgel7}
                key={i}
              />
            );
          })}
        </Slider>
        <div
          id="shine surgaltuud"
          className="mx-8 md:mx-16 justify-around mt-12"
        >
          <div className="flex items-center mb-8">
            <header className="text-blue-500 text-xl md:text-4xl">
              Хамгийн их үзэлттэй шинэ хичээлүүд
            </header>
            <div className="flex ml-auto">
              <button className="ml-2 focus:outline-none" onClick={next3}>
                <Image
                  className="w-16 h-auto md:h-9 md:w-9"
                  src={group20}
                  alt="shine"
                />
              </button>
              <button className="ml-2 focus:outline-none" onClick={previous3}>
                <Image
                  className="w-16 h-auto md:h-9 md:w-9"
                  src={group21}
                  alt="shine2"
                />
              </button>
            </div>
          </div>
        </div>
        <Slider ref={nenewSliderRef} {...settings} slidesToShow={4}>
          {nenews.map((nenew, i) => {
            return (
              <MostnewItem
                zuragg={nenew.zuragg}
                zuragg1={nenew.zuragg1}
                zuragg2={nenew.zuragg2}
                zuragg3={nenew.zuragg3}
                zuragg4={nenew.zuragg4}
                zuragg5={nenew.zuragg5}
                zuragg6={nenew.zuragg6}
                zuragg7={nenew.zuragg7}
                paraa={nenew.para}
                suragch={nenew.suragch}
                bvrtgell={nenew.bvrtgell}
                bvrtgell1={nenew.bvrtgell1}
                bvrtgell2={nenew.bvrtgell2}
                bvrtgell5={nenew.bvrtgell5}
                bvrtgell4={nenew.bvrtgell4}
                bvrtgell3={nenew.bvrtgell3}
                bvrtgell6={nenew.bvrtgell6}
                bvrtgell7={nenew.bvrtgell7}
                key={i}
              />
            );
          })}
        </Slider>
        <div
          id="shine surgaltuud"
          className="mx-8 md:mx-16 justify-around mt-12"
        >
          <div className="flex items-center">
            <header className="text-blue-500 text-xl md:text-4xl">
              Хичээлийн ангилал
            </header>
            <div className="flex ml-auto">
              <Image className="w-44" src={group48} alt="" />
            </div>
          </div>
        </div>

        <div className="hidden md:grid grid-cols-4 grid-rows-3 md:gap-12 gap-24 mx-28 p-4 mt-12">
          {hicheels.map((hicheel, i) => {
            return (
              <HicheelItem
                iconn={hicheel.iconn}
                hicheel={hicheel.hicheel}
                too={hicheel.too}
                key={i}
              />
            );
          })}
        </div>
        <div
          id="shine surgaltuud"
          className="mx-8 md:mx-16 justify-around mt-12"
        >
          <div className="flex items-center">
            <header className="text-blue-500 text-xl md:text-4xl">
              Түгээмэл асуулт хариултууд
            </header>
          </div>
        </div>
        <div className="flex mx-8 md:mx-32 my-16  justify-between">
          <div className="flex-row items-center">
            {asuults.map((asuult, i) => {
              return (
                <AsuultItem
                  garchig={asuult.garchig}
                  vector={asuult.vector}
                  hariult={asuult.hariult}
                  key={i}
                />
              );
            })}
          </div>
          <div>
            <Image
              className="hidden md:flex h-64 md:h-auto  md:ml-0 ml-12 "
              src={img1}
              alt="img1"
            />
          </div>
        </div>
      </body>
    </>
  );
};

export default Page;
