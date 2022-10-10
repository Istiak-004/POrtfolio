import React from 'react';
import Image from 'next/image';
import JobImg from '../public/assets/job.png';

const Work = () => {
  return (
    <div id="WORK" className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#d38d31]">
            Job Experience
          </p>
          <h2 className="py-4 text-red-400">Where I&#39;ve Worked</h2>
          <div class="flex flex-wrap">
            <div class="w-full sm:w-1/6 mb-4 sm:mb-0">
              <div class="flex flex-row sm:flex-col overflow-x-auto">
                <a class="text-xl text-green-200" href="https://codemen.org/">
                  Codemen Org
                </a>
              </div>
            </div>
            <div class="w-full sm:w-5/6 text-gray-300">
              <div class="px-0 sm:px-6">
                <div x-show="currentExperience === 'codemen'">
                  <header class="mb-6">
                    <h3 class="text-xl font-poppins text-theme-gray-light font-bold mb-1">
                      Software Developer
                      <span class="text-blue-400 mx-3">@</span>
                      <a
                        href="https://codemen.org/"
                        class="text-blue-400 hover:underline"
                      >
                        Codemen
                      </a>
                    </h3>
                    <p class="text-theme-gray-deep mb-3 text-xs">
                      May 2021 - November 2022
                    </p>
                  </header>
                  <div>
                    <p class="text-theme-gray-deep leading-relaxed mb-3">
                      Write modern, performant, maintainable code for clients
                      and internal projects
                    </p>
                    <p class="text-theme-gray-deep leading-relaxed mb-3">
                      Involved in implementation of new feature as par the
                      requirements from clients for solution demonstrations.
                      Developed new features for our application,fixing bugs and
                      implemented third- party APIs that we will used using
                      Golang
                    </p>

                    <p class="text-theme-gray-deep leading-relaxed mb-3">
                      Involved in database design with relational database like
                      PostgreSQL and write complex queries. Involved in Unit
                      Testing and Integration testing in development environment
                      and ensuring application is according to specifications
                    </p>
                    <p class="text-theme-gray-deep leading-relaxed mb-3">
                      Communicate with multi-disciplinary teams of engineers,
                      designers, producers, and clients on a daily basis
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[113%] h-[115%] m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={JobImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default Work;