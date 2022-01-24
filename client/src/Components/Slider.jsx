import React from 'react';
import Home from '../Assets/Home.jpg'

const Slider = () => {
  return <section class="relative overflow-hidden">
  <img class="absolute bottom-0 md:top-0 right-0 h-96 md:h-auto" src="uinel-assets/elements/ecommerce-banners/line-circle.svg" alt="" />
  <div class="md:absolute top-0 left-0 md:w-1/3 lg:w-2/5 h-full">
    <img class="h-32 md:h-full w-full md:w-auto" src="" alt=""/>
    <img class="md:absolute bottom-0 left-0 md:ml-12 lg:ml-32 h-40 md:h-5/6 w-full md:w-auto object-cover object-left" src={Home} alt=""/>
  </div>
  <div class="relative container px-4 mx-auto">
    <div class="w-full md:w-1/2 lg:w-2/5 ml-auto py-24 md:py-40">
      <h1 class="mb-10 text-9xl md:text-10xl xl:text-5xl leading-tight font-heading font-medium">Winter Jackets</h1>
      <p class="mb-14 md:mb-32 text-darkBlueGray-400">Or something has gone wrong.</p>
      <a class="inline-block py-4 px-10 text-xl leading-8 text-white font-heading font-medium tracking-tighter text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl" href="#">Shop now</a>
    </div>
  </div>
</section> ;
};

export default Slider;
