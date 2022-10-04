import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import Card from './Card';

const Services = () => {
  const techs = [
    {
      id:1,
      imageSrc : netflixImg,
      headerTitle : 'Golang',
      details : 'Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesentium, quibusdam facere quo laborum maiores sequi nam tenetur laud.',
    },
    {
      id:2,
      imageSrc : netflixImg,
      headerTitle : 'Golang',
      details : 'Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesentium, quibusdam facere quo laborum maiores sequi nam tenetur laud.',
    },]
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4 text-gray-200">My Expertise</h2>
        <div className='flex justify-between'>
        {
          techs.map(({id,imageSrc,headerTitle,details})=>(
              <Card key={id} imageSrc={imageSrc} headerTitle={headerTitle} details={details}/>
          ))
        }
        </div>
      </div>
    </div>
  );
};

export default Services;