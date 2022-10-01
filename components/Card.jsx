import Image from 'next/image';
import React from 'react';
import WebDesignImg from '../public/assets/expertise/web-design.jpg'

const Card = () => {
    return (
      <div class="max-w-sm rounded-lg shadow-md shadow-sky-600">
        <Image
          className="object-cover w-full h-48"
          src={WebDesignImg}
          width='100px'
          height='48px'
          alt="image"
        />
        <div class="px-6 py-4">
          <h4 class="mb-3 text-xl font-semibold tracking-tight text-sky-600">
            Christmas Tree Decoration
          </h4>
          <p class="mb-2 leading-normal text-sky-900">
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
            tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </p>
          <button
            class="px-4 py-2 text-sm shadow bg-sky-100 shadow-sky-600 text-sky-700 
      hover:bg-sky-600 hover:text-sky-100"
          >
            Read more
          </button>
        </div>
      </div>
    );
};

export default Card;
