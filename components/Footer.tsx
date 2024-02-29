import React from "react";
import Link from "next/link";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
      <>
        <div>
          <div
            className="w-full bg-gray-600 shadow-md mt-20 min-h-[50vh] pt-5"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/640x480?code")',
              backgroundPosition: "center",
              backgroundBlendMode: "multiply",
              backgroundSize: "cover",
            }}
          >
            {/* connect with me */}
            <>
              <div className="flex justify-center flex-col h-full items-center mx-auto text-white">
                <div className="flex justify-center items-center w-max mx-auto flex-col gap-4">
                  <Image
                    height={200}
                    width={200}
                    className="bg-cover w-max aspect-square mx-auto bg-center object-cover h-[20vh] rounded-full"
                    src="/images/logo.jpg"
                    alt=""
                  />

                  <div>
                    <h1 className="text-2xl md:text-4xl font-bold">
                      OptiFlow <span className="text-primary">Inator</span>
                    </h1>
                  </div>
                </div>
                <div className="text-center my-10 mt-10 leading-loose">
                  <h1 className="text-3xl">CONNECT WITH ME</h1>
                  <p className=" dark:text-purple-200">
                    Feel free to connect with me on
                  </p>
                  <ul className="flex justify-center items-center flex-row flex-wrap gap-4 mt-2">
                    <li className="social-icons">
                      <Link
                        href="https://github.com/siddhartha-up80"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour text-3xl"
                      >
                        <AiFillGithub />
                      </Link>
                    </li>
                    <li className="social-icons">
                      <Link
                        href="https://twitter.com/siddhartha_up80"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour text-3xl"
                      >
                        <AiOutlineTwitter />
                      </Link>
                    </li>
                    <li className="social-icons">
                      <Link
                        href="https://www.linkedin.com/in/siddhartha-singh-work"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour text-3xl"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </li>
                    <li className="social-icons">
                      <Link
                        href="https://www.instagram.com/sid_up80"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colou text-3xl"
                      >
                        <AiFillInstagram />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </>
            {/* connect with me */}
          </div>
        </div>
      </>
      <footer className="text-white body-font bg-black">
        <div className=" px-3 pr-5 py-3 mx-auto flex items-center justify-between sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center"
          >
            <span className="text-sm">
              Made by Siddhartha Singh © {new Date().getFullYear()}
            </span>
          </Link>
          <span className="inline-flex  sm:mt-0 mt-4 justify-center sm:justify-start">
            <ul className="flex justify-center items-center flex-row flex-wrap gap-4">
              <li className="social-icons">
                <Link
                  href="https://github.com/siddhartha-up80"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-xl"
                >
                  <AiFillGithub />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://twitter.com/siddhartha_up80"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-xl"
                >
                  <AiOutlineTwitter />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://www.linkedin.com/in/siddhartha-singh-work"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour text-xl"
                >
                  <FaLinkedinIn />
                </Link>
              </li>
              <li className="social-icons">
                <Link
                  href="https://www.instagram.com/sid_up80"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colou text-xl"
                >
                  <AiFillInstagram />
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
