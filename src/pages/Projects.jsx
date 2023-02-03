import React from "react";
import { Navbar } from "../components";
import styles from "../styles";
import { portfolioItems, workInProgress } from "../constants";

const Projects = () => {
  return (
    <div className="relative">
      <Navbar />

      {/* Bg */}
      <div className="project-clip bg-gradient-to-l from-primaryPurple to-primaryPink absolute top-0 right-0 left-0 h-full z-[0]" />

      {/* Header */}
      <div className="z-[100] relative bg-white">
        <h2 className="bg-gradient-to-l from-purple-900 to-pink-400 text-5xl text-center font-extrabold uppercase -tracking-[0.02em] py-2">
          Projects
        </h2>
      </div>

      <div className="py-10">
        {/* First Section */}
        <div
          className={`${styles.containerWidth} relative flex flex-col md:flex-row`}
        >
          {/* Map of posts */}
          <div className="flex flex-col md:flex-row gap-2 flex-[2]">
            {portfolioItems.map((post, index) => {
              if (index < 2) {
                return (
                  // Card
                  <div
                    className={`bg-white shadow-md mb-2 md:mb-0 w-full rounded-lg overflow-hidden`}
                  >
                    {/* Img */}
                    <div className="h-[250px]">
                      <img
                        src={post.imgUrl}
                        alt={post.title}
                        className="w-full h-full object-cover object-bottom"
                      />
                    </div>

                    <div
                      className={`h-[250px] p-4 flex flex-col justify-between relative `}
                    >
                      {/* Title */}
                      <h5 className="font-bold font-poppins text-primaryPurple text-xl leading-6">
                        {post.title}
                      </h5>
                      {/* Links */}
                      <div className="flex flex-row justify-around mb-2">
                        <a
                          href={post.github}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white border-2 border-primaryPurple rounded-md text-primaryPurple font-poppins font-semibold px-4 py-1 hover:bg-primaryPurple hover:text-white transition duration-500"
                        >
                          Code
                        </a>
                        {post.preview && (
                          <a
                            href={post.preview}
                            target="_blank"
                            rel="noreferrer"
                            className="bg-white border-2 border-primaryPurple rounded-md text-primaryPurple font-poppins font-semibold px-4 py-1 hover:bg-primaryPurple hover:text-white transition duration-500"
                          >
                            Preview
                          </a>
                        )}
                      </div>

                      {/* Tags */}
                      <ul className="flex flex-row flex-wrap gap-1">
                        {post.tags.map((tag) => (
                          <li className="bg-purple-200 px-2 rounded-full text-sm">
                            {tag}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          {/* WIP Posts */}
          <div className="flex-1 flex flex-col justify-between md:ml-2 gap-2">
            {workInProgress.map((item, index) => {
              if (index < 3) {
                return (
                  <div className="bg-white shadow-md p-4 h-full flex flex-col justify-between rounded-lg">
                    <h5 className="text-xl leading-6 font-poppins font-bold text-primaryPurple">
                      {item.title}
                    </h5>
                    <p className="text-sm italic">Work in progress</p>
                    <a
                      href={item.code}
                      target="_blank"
                      rel="noreferrer"
                      className="text-accentPurple bg-gray-200 w-fit px-2 rounded-sm"
                    >
                      Code
                    </a>
                  </div>
                );
              }
            })}
          </div>
        </div>

        {/* Second Section */}
        <div
          className={`${styles.containerWidth} mt-2 flex flex-col md:flex-row gap-2 relative`}
        >
          {portfolioItems.map((post, index) => {
            if (index > 1 && index < 6) {
              return (
                // Card
                <div className="bg-white gap-2 w-full rounded-lg overflow-hidden">
                  {/* Img */}
                  <div className="h-[150px]">
                    <img
                      src={post.imgUrl}
                      alt={post.title}
                      className="w-full h-full object-cover object-bottom"
                    />
                  </div>

                  <div
                    className={`h-[150px] p-4 flex flex-col justify-between relative `}
                  >
                    {/* Title */}
                    <h5 className="font-bold font-poppins text-primaryPurple text-lg leading-4">
                      {post.title}
                    </h5>
                    {/* Links */}
                    <div className="flex flex-row justify-around mb-2">
                      <a
                        href={post.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white border-2 border-primaryPurple rounded-md text-primaryPurple font-poppins font-semibold px-2 py-1 hover:bg-primaryPurple hover:text-white text-sm transition duration-500"
                      >
                        Code
                      </a>
                      {post.preview && (
                        <a
                          href={post.preview}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white border-2 border-primaryPurple rounded-md text-primaryPurple font-poppins font-semibold px-2 py-1 hover:bg-primaryPurple hover:text-white text-sm transition duration-500"
                        >
                          Preview
                        </a>
                      )}
                    </div>

                    {/* Tags */}
                    <ul className="flex flex-row flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <li className="bg-purple-200 px-1 rounded-full text-xs">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Third Section */}
        <div className={`${styles.containerWidth} relative`}>
          {portfolioItems.map((post, index) => {
            if (index === 6) {
              return (
                <div className="bg-white mt-2 rounded-lg flex flex-col md:flex-row md:h-[270px] overflow-hidden flex-[2] justify-between">
                  <div className="p-4 flex flex-col h-full justify-between">
                    {/* Title */}
                    <h5 className="font-bold font-poppins text-primaryPurple text-xl leading-6">
                      {post.title}
                    </h5>
                    {/* Links */}
                    <div className="flex flex-row justify-around mb-2">
                      <a
                        href={post.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white border-2 border-primaryPurple rounded-md text-primaryPurple font-poppins font-semibold px-4 py-1 hover:bg-primaryPurple hover:text-white transition duration-500"
                      >
                        Code
                      </a>
                      {post.preview && (
                        <a
                          href={post.preview}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white border-2 border-primaryPurple rounded-md text-primaryPurple font-poppins font-semibold px-4 py-1 hover:bg-primaryPurple hover:text-white transition duration-500"
                        >
                          Preview
                        </a>
                      )}
                    </div>

                    {/* Tags */}
                    <ul className="flex flex-row flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <li className="bg-purple-200 px-2 rounded-full text-sm">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* Img */}
                  <div className="flex-[1]">
                    <img
                      src={post.imgUrl}
                      alt={post.title}
                      className="w-full h-full object-cover object-bottom"
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>

        {/* Rest of the page */}
        <div
          className={`${styles.containerWidth} mt-2 flex flex-col flex-wrap md:flex-row gap-2 relative`}
        >
          {portfolioItems.map((post, index) => {
            if (index > 6) {
              return (
                // Card
                <div className="bg-white gap-2 w-full flex-[25%] rounded-lg overflow-hidden">
                  {/* Img */}
                  <div className="h-[150px]">
                    <img
                      src={post.imgUrl}
                      alt={post.title}
                      className="w-full h-full object-cover object-bottom"
                    />
                  </div>

                  <div
                    className={`h-[150px] p-4 flex flex-col justify-between relative `}
                  >
                    {/* Title */}
                    <h5 className="font-bold font-poppins text-primaryPurple text-lg leading-4">
                      {post.title}
                    </h5>
                    {/* Links */}
                    <div className="flex flex-row justify-around mb-2">
                      <a
                        href={post.github}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white border-2 border-primaryPurple rounded-md text-primaryPurple font-poppins font-semibold px-4 py-1 hover:bg-primaryPurple hover:text-white transition duration-500"
                      >
                        Code
                      </a>
                      {post.preview && (
                        <a
                          href={post.preview}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-white border-2 border-primaryPurple rounded-md text-primaryPurple font-poppins font-semibold px-4 py-1 hover:bg-primaryPurple hover:text-white transition duration-500"
                        >
                          Preview
                        </a>
                      )}
                    </div>

                    {/* Tags */}
                    <ul className="flex flex-row flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <li className="bg-purple-200 px-1 rounded-full text-xs">
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
