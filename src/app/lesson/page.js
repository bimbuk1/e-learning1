"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// import ReactPlayer from 'react-player/youtube';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import { FaRegPaperPlane } from "react-icons/fa";
import CourseItem from "../components/course";
import "@fortawesome/fontawesome-svg-core/styles.css";
import pro1 from "../../img/pro1.jpg";
import pro2 from "../../img/pro2.png";
import pro3 from "../../img/pro3.jpg";
import pro4 from "../../img/pro4.jpg";
import pro5 from "../../img/pro5.jpg";
import pro6 from "../../img/pro6.png";
import pro8 from "../../img/pro8.jpeg";
import course1 from "../../img/course2 (1).png";
import course2 from "../../img/course2 (2).png";
import course3 from "../../img/course2 (3).png";
import ss from "../../img/ss.png";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import YouTube from "react-youtube";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";
const Lesson = () => {
  const [isClient, setIsClient] = useState(false);
  const [isChatVisible, setIsChatVisible] = useState(true);
  const [commentsData, setCommentsData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments?postId=1",
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log("Fetched data:", result);
        setCommentsData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };

  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };
  const videoId = "op1QYwRAQpI";
  const opts = {
    height: "540",
    width: "987",
    playerVars: {
      autoplay: 1,
    },
  };
  const onReady = (event) => {};
  const [message, setMessage] = useState("");
  const [chatList, setChatList] = useState([
    {
      id: 1,
      writer: "Bernice Colon",
      message:
        "Interesting approach to the work! I would like ot learn more about the techniques of working in cinema 4d",
      image: pro1,
    },
    {
      id: 2,
      writer: "Lillie Wilkins",
      message: "me too!)",
      image: pro2,
    },
    {
      id: 3,
      writer: "Lilian Lara",
      message: "where do you find  inspiration for your work?",
      image: pro3,
    },
    {
      id: 4,
      writer: "Arnold Ro",
      message:
        "Physical objects are used to realistically simulate how objects behave when subjected to a force, such as gravity or impact, right?",
      image: pro4,
    },
    {
      id: 5,
      writer: "Euan Huber ",
      message: "+++",
      image: pro5,
    },
    {
      id: 6,
      writer: "Susannah Ewe",
      message: "Its a beautiful scene",
      image: pro6,
    },
    {
      id: 7,
      writer: "Amelli Se",
      message:
        "Interesting approach to the work! I would like ot learn more about the techniques of working in cinema 4d",
      image: pro8,
    },
  ]);
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      const newChat = {
        id: chatList.length + 1,
        writer: "Bimbuk",
        message,
      };

      setChatList([...chatList, newChat]);
      setMessage("");
    }
  };

  const handleHideChat = () => {
    setIsChatVisible(false);
  };

  const courses = [
    {
      zurag: course1,
      title: "History of graphic design",
      teext: "Graphic design and it's roele in people's fives",
      reply: "120 reply",
    },
    {
      zurag: course2,
      title: "Why letters are letters?",
      teext: "Series of 8 lectures on typography and its history",
      reply: "154 reply",
    },
    {
      zurag: course3,
      title: "Composition and its forms",
      teext: "Learn more about building a composition through drawing",
      reply: "183 reply",
    },
  ];
  const MAX_CHARACTERS = 150;
  const characterCount = message.length;
  const remainingCharacters = MAX_CHARACTERS - characterCount;
  console.log("Final state:", commentsData);

  return (
    <>
      <div className="bg-gray-50 ">
        <header className="flex border-b-2 shadow-sm py-8 justify-between bg-white">
          <h1 className="font-bold text-2xl ml-2">Arts.De</h1>
          <ul className="flex mx-12 gap-4">
            <li>Courses</li>
            <li>Students</li>
            <li>Mentors</li>
            <li>Contacts</li>
          </ul>
          <div className="flex ml-96 border rounded-full w-64 p-1">
            <FontAwesomeIcon className=" p-1" icon={faSearch} />
            <p className="text-gray-300 ml-0 items-center pt-1 pl-1 text-sm">
              Search
            </p>
          </div>
          <div className="flex pl-16 w-1/6 justify-around items-center">
            <div className="">
              <FontAwesomeIcon className="items-center mr-4" icon={faBell} />
              <FontAwesomeIcon className="" icon={faShoppingBasket} />
            </div>
            <Image className="w-10 h-10 rounded-full mr-4" src={pro1} />
          </div>
        </header>
        <div className="flex">
          <div className="w-2/3 border-b-2">
            <div className="flex-row border border-gray-100 rounded-lg bg-white mt-12 mr-6">
              <div className="flex w-full rounded-full">
                <YouTube videoId={videoId} opts={opts} onReady={onReady} />
              </div>
              <div className="flex m-4  w-1/2 justify-around">
                <p className="border bg-green-100 rounded-full text-sm px-4 ">
                  Design
                </p>
                <p className="border bg-blue-100 rounded-full  text-sm px-4 ">
                  Motion
                </p>
                <p className="border bg-purple-100 rounded-full text-sm px-4 ">
                  Cinema
                </p>
                <p className="border bg-orange-100 rounded-full  text-sm px-4 ">
                  Interrior
                </p>
              </div>
              <div className="ml-8 ">
                <h1 className="text-4xl font-bold">1.Concept Creation</h1>
                <div className="flex justify-between pb-8">
                  <div className="flex">
                    <p className="text-md text-gray-400 mr-1">A course by </p>
                    <p className="text-blue-600">Haris Ortiz </p>
                  </div>
                  <div className="flex w-1/4 justify-around items-center">
                    <FontAwesomeIcon icon={faHeart} />
                    <p>29</p>
                    <FontAwesomeIcon icon={faShare} />
                    <p>Share</p>
                    <FontAwesomeIcon icon={faSave} />
                    <p>Save</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-gray-100  bg-white mr-6 rounded-lg">
              <div className="flex mt-4 w-4/8 justify-between mb-4">
                <h1 className="font-bold ml-9 mt-">Next Lessons</h1>
                <div className="flex">
                  <p>4 lessons</p>
                  <p className="ml-6">3 hours</p>
                </div>
              </div>
              <section className="w-6/7 mr-8 ml-8">
                <div className="flex border border-gray-200 rounded-lg mb-4">
                  <Image className="mr-4 " src={ss} />
                  <div className="flex flex-col py-4">
                    <h1 className="font-bold">2.Movement of figures</h1>
                    <p className="text-sm text-gray-400">
                      Moving shapes in cinema 4d can be done in a variety ways,
                      includibng using paths, camera,or physics. Paths allow you
                      to create complex trajectories for an object, such as
                      rotating around an axis or spiraling{" "}
                    </p>
                  </div>
                </div>
                <div className="flex border border-gray-200 rounded-lg mb-4">
                  <Image className="mr-4 " src={ss} />
                  <div className="flex flex-col py-4">
                    <h1 className="font-bold">2.Movement of figures</h1>
                    <p className="text-sm text-gray-400">
                      Moving shapes in cinema 4d can be done in a variety ways,
                      includibng using paths, camera,or physics. Paths allow you
                      to create complex trajectories for an object, such as
                      rotating around an axis or spiraling{" "}
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="flex flex-col w-1/3">
            {isChatVisible && (
              <div className="bg-white mt-12  flex flex-col border border-gray-50 mb-4 h-1/2  rounded-lg">
                <div className="bg-white text-white p-4 flex ">
                  <div className="flex items-center w-full justify-between">
                    <div className="mr-2 text-black text-xl ">Top Chat</div>
                    <div className="cursor-pointer text-black">
                      <FontAwesomeIcon icon={faEllipsisV} />
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-scroll   p-4 border border-gray-100">
                  {commentsData.map((comment) => (
                    <div key={comment.id} className="flex items-center mb-4">
                      <div className="">
                        <Image
                          className="w-10 h-10 min-w-7 rounded-full mr-4"
                          src={pro1}
                        />
                      </div>
                      <div className="flex items-center ">
                        <span className="font-bold text-xs whitespace-nowrap min-w-16 mx-6 mr-4 ml-4">
                          {comment.email.split("@")[0]}
                        </span>
                        <span className="text-xs min-w-20 ">
                          {comment.body}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white px-4 flex items-center border-t border-white ">
                  <textarea
                    className="w-full resize-none border-b-2 border-gray-300 focus:outline-none pt-4"
                    placeholder="Say something..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <div className="flex items-center bg-white p-4 justify-end border-b ml-4">
                  <span className="ml-2 text-gray-500">
                    {characterCount}/{MAX_CHARACTERS}
                  </span>
                  <FaRegPaperPlane
                    className="cursor-pointer text-gray-500 ml-4"
                    onClick={handleSendMessage}
                  />
                </div>

                <div className="p-4 bg-white text-black flex justify-center items-center">
                  <div className="cursor-pointer" onClick={handleHideChat}>
                    <span className="font-bold">Hide Chat</span>
                  </div>
                </div>
              </div>
            )}
            <div className="border border-gray-50 rounded-lg bg-white py-6 px-4">
              <div className="flex justify-between items-center">
                <h1 className="font-bold text-md ">Suggested courses</h1>
                <p className="no-underline text-blue-500">View more</p>
              </div>

              {courses.map((course, i) => {
                return (
                  <CourseItem
                    zurag={course.zurag}
                    title={course.title}
                    teext={course.teext}
                    reply={course.reply}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lesson;
