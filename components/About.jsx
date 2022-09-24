import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.png';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#c23e3e]">
            About
          </p>
          <h2 className="py-4 text-white">Who I Am</h2>
          <p className="py-2 text-gray-300">
            Last 2 years my default development stacks are Golang, Python/Django
            and Javascript.
          </p>
          <p className="py-2 text-gray-300">
            I&#39;m a full-stack developer with a tendency to back-end.
          </p>
          <p className="py-2 text-gray-300">
            I prefer to stay up to date with the whole development process from
            database structure and server infrastructure to mobile responsive
            views and analytics. Moreover, I dive deep into company business
            processes and I won&#39;t hesitate to suggest any ideas aimed to
            improve it from the development side.
          </p>
          <p className="py-2 text-gray-300">
            I am a Golang programmer at heart and create features that are best
            suited for the job at hand, as opposed to trying to fit a job into
            features that I can find in pre-existing themes and plugins. I&#39;m
            also attuned to performance issues and do a lot of repurposing of
            plugins.
          </p>
          <p className="py-2 text-gray-300">I always welcome new challenges.</p>
          <p className="py-2 text-gray-300">
            I&#39;m not only a software developer but also an effective project manager
            and virtual assistant thanks to my communication skills and ability
            to manage stress and organize people. I can help you with your
            different work requirements (sending emails, recruiting people,
            assigning roles, managing communications.)
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-300 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-[113%] h-[115%] m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;