import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Linkedin from '../public/assets/icons/linkedin.png'
import Github from '../public/assets/icons/github.png'
import Mail from '../public/assets/icons/mail.png'
import ResumeFile from '../public/assets/icons/file.png'


export function onButtonClick() {
  // using JavaScript method to get PDF file
  fetch("/Istiak-resume.pdf", {
    method: "GET",
    headers: {
      "Content-Type": "application/pdf",
    },
  }).then((response) => {
    response.blob().then((blob) => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", `Istiak-resume.pdf`);
      link.click();
    });
  });
};

const Header = () => {
  const [linkColor, setLinkColor] = useState("#ecf0f3");


  return (
    <div
      id="home"
      className="w-full h-screen text-center"
      style={{ color: `${linkColor}` }}
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-300">
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className="py-4 text-gray-300">
            Hi, I&#39;m{" "}
            <span className="text-[#6fa2db] uppercase"> Istiak</span>
          </h1>
          <h1 className="py-2 text-gray-300">A Full-Stack Developer</h1>
          <p className="py-4 text-gray-300 sm:max-w-[70%] m-auto">
            Full Stack Developer with 2+ years of hands-on experience designing,
            developing, and implementing applications and solutions using a
            range of technologies and programming languages
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://linkedin.com/in/istiakahmed004"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Linkedin} width="64px" height="64px" alt="/" />
            </a>
            <a
              href="https://github.com/Istiak-004"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={Github} width="64px" height="64px" alt="/" />
            </a>
            <Link href="/#contact">
              <Image src={Mail} width="64px" height="64px" alt="/" />
            </Link>
            <Link href="#">
              <a id='resumeID' onClick={onButtonClick} href="#">
                <Image src={ResumeFile} width="64px" height="64px" alt="/" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;