import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.png';
import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Github from '../public/assets/skills/github-logo.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';
import Golang from '../public/assets/skills/golang.png';
import Python from '../public/assets/skills/python.png';
import Django from '../public/assets/skills/django.png';
import Postgres from '../public/assets/skills/postgres.png';

const Skills = () => {
  const techs = [
    {
      id:1,
      title : 'Golang',
      icon : Golang,
      style : 'shadow-sky-400'
    },
    {
      id:2,
      title : 'Python',
      icon : Python,
      style : 'shadow-blue-700'
    },
    {
      id:3,
      title : 'Javascript',
      icon : Javascript,
      style : 'shadow-yellow-500'
    },
    {
      id:4,
      title : 'Django',
      icon : Django,
      style : 'shadow-green-700'
    },
    {
      id:5,
      title : 'Postgresql',
      icon : Postgres,
      style : 'shadow-sky-400'
    },
    {
      id:6,
      title : 'Html',
      icon : Html,
      style : 'shadow-orange-500'
    },
    {
      id:7,
      title : 'Css',
      icon : Css,
      style : 'shadow-sky-500'
    },
    {
      id:8,
      title : 'React',
      icon : ReactImg,
      style : 'shadow-blue-600'
    },
    {
      id:9,
      title : 'Tailwind Css',
      icon : Tailwind,
      style : 'shadow-sky-500'
    },
    {
      id:10,
      title : 'AWS',
      icon : AWS,
      style : 'shadow-yellow-300'
    },
    {
      id:11,
      title : 'Firebase',
      icon : Firebase,
      style : 'shadow-yellow-700'
    },
    {
      id:12,
      title : 'Github',
      icon : Github,
      style : 'shadow-blue-800'
    },
  ]
  return (
    <div id="skills" className="w-full lg:h-screen p-2 text-gray-200">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {techs.map(({id,title,icon,style})=>(
              <div key={id} className={`p-6 shadow-md rounded-xl hover:scale-105 ease-in duration-300 ${style}`}>
                <div className="grid grid-cols-2 gap-4 justify-center items-center">
                  <div className="m-auto">
                    <Image src={icon} width="64px" height="64px" alt="/" />
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <h3>{title}</h3>
                  </div>
                </div>
            </div>
            ))}         
        </div>
      </div>
    </div>
  );
};

export default Skills;