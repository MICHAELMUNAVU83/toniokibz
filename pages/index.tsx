import Head from "next/head";

import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { IoCall } from "react-icons/io5";

import { BsSpotify } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import Image from "next/image";
import kibzpic from "../public/kibz.png";
import podcast from "../public/sandwich.jpeg";
import camera3 from "../public/camera3.png";
import emoji from "../public/emoji.png";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tonio KIbz Porfolio</title>
        <meta name="description" content="Tonio Kibz Porfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col items-center justify-center min-h-screen py-2">
        <section className=" p-10">
          <div className="flex flex-col ">
            <h1 className="text-5xl bakbak-font text-center bg-gradient-to-r from-teal-500 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Tonio Kibz
            </h1>
            <p className="text-1xl italian-font font-light text-center leading-8 text-gray-800 ">
              Content Creator / Podcaster
            </p>
          </div>

          <div className="flex justify-center mt-10 text-blue-500 ">
            <ul className="flex items-center space-x-5">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://instagram.com/tonio_kibz?igshid=YmMyMTA2M2Y="
                >
                  <AiFillInstagram className="cursor-pointer text-3xl" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/254718475564 "
                >
                  <RiWhatsappFill className="cursor-pointer text-3xl" />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@sandwichpodcastke"
                >
                  <AiFillYoutube className="cursor-pointer text-3xl" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://open.spotify.com/show/6rA2ixTUZnIPWQu58qZf8L"
                >
                  <BsSpotify className="cursor-pointer text-3xl" />
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="tel:0714466144"
                >
                  <IoCall className="cursor-pointer text-3xl" />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex justify-center relative bg-gradient-to-b  from-blue-500 overflow-hidden rounded-full w-80 h-80 mt-5">
            <Image
              src={kibzpic}
              alt="kimani"
              layout="fill"
              objectFit="cover"
              className="flex justify-center rounded-full"
            />
          </div>
        </section>

        {/* { second section} */}

        <section className="flex flex-col items-center justify-center min-h-screen p-10 text-center">
          <div>
            <p className="text-gray-500 text-md leading-8">
              My name is Tonio Kibz, I am a content creator and podcaster.
              <span className="text-blue-500 sofia-font">
                {" "}
                I love creating content{" "}
              </span>
              and sharing my ideas with the world {"  "}
              <span className="text-blue-500 sofia-font">
                on the Sandwich Podcast{" "}
              </span>
            </p>
          </div>

          <h3 className="text-3xl sofia-font font-bold text-center mt-10 bg-gradient-to-r from-teal-500 via-blue-300 to-blue-500 bg-clip-text text-transparent">
            WHAT I DO
          </h3>

          <div>
            <div className="text-center shadow-2xl p-10 rounded-xl my-12 ">
              <div className="flex justify-center">
                <Image
                  src={podcast}
                  alt="podcast"
                  width={150}
                  height={150}
                  className="flex justify-center rounded-lg"
                />
              </div>
              <h3 className="text-xl">Podcasting</h3>
              <p className="text-gray-500 text-md leading-8">
                I am the co host of the{" "}
                <span className="text-blue-500 italian-font">
                  the biggest podcast in Kenya{" "}
                </span>
                The Sandwich Podcast .
              </p>
              <div className="flex justify-center mt-5 flex-row">
                Listen to the podcast
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl mx-1"
                  href="https://open.spotify.com/show/6rA2ixTUZnIPWQu58qZf8L"
                >
                  <BsSpotify className="cursor-pointer text-blue-500 " />
                </a>
              </div>
            </div>

            <div className="text-center shadow-2xl p-10 rounded-xl my-12 ">
              <div className="flex justify-center ">
                <Image
                  src={emoji}
                  alt="design"
                  objectFit="cover"
                  width={150}
                  height={150}
                />
              </div>
              <h3 className="text-xl">Video Content Creation</h3>
              <p className="text-gray-500 text-md leading-8">
                I create funny content for{" "}
                <span className=" italian-font text-blue-500">
                  Youtube and Instagram{" "}
                </span>
                that is engaging and entertaining.
              </p>
              <div className="flex justify-center mt-5 flex-row">
                Watch my videos
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl mx-1"
                  href="https://instagram.com/tonio_kibz?igshid=YmMyMTA2M2Y="
                >
                  <AiFillInstagram className="cursor-pointer text-blue-500" />
                </a>
              </div>
            </div>

            <div className="text-center shadow-2xl p-10 rounded-xl my-12 ">
              <div className="flex justify-center">
                <Image src={camera3} alt="design" width={200} height={250} />
              </div>
              <h3 className="text-xl">Video Editing</h3>
              <p className="text-gray-500 text-md leading-8">
                I edit videos for{" "}
                <span className="text-blue-500 italian-font">
                  The Sandwich Podcast{" "}
                </span>
                and for my vine videos on Instagram.
              </p>
              <div className="flex justify-center mt-5 flex-row">
                Watch my videos
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@sandwichpodcastke"
                  className="text-2xl mx-1"
                >
                  <AiFillYoutube className="cursor-pointer italian-font text-blue-500" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* {third section} */}

        {/* {fifth section} */}
      </main>
    </div>
  );
}
