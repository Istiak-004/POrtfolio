import Image from 'next/image';
import React from 'react';
import WebDesignImg from '../public/assets/expertise/web-design.jpg'

const Card = (key,imageSrc,headerTitle,details) => {
    return (
      <div key={key} class="max-w-sm rounded-lg shadow-md shadow-sky-600 px-6 py-4">
        <Image
          className="object-cover"
          src={WebDesignImg}
          width='400px'
          height='200px'
          alt="image"
        />
        <div class="py-4">
          <h4 class="mb-3 text-xl font-semibold tracking-tight text-sky-600">
            Christmas Tree Decoration
          </h4>
          <p class="mb-2 leading-normal text-sky-900">
            Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen
            tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.
          </p>
        </div>
      </div>
    );
};

export default Card;
