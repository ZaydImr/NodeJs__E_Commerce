import React from 'react';
import Home from '../Assets/Home.jpg'
import Frame from '../Assets/Frame.jpg'
import { Link } from 'react-router-dom'

const Slider = () => {
  return <section className="relative overflow-hidden">
  <img className="absolute bottom-0 md:top-0 right-0 h-96 md:h-auto" src="uinel-assets/elements/ecommerce-banners/line-circle.svg" alt="" />
  <div className="md:absolute top-0 left-0 md:w-1/3 lg:w-2/5 h-full">
    <img className="h-0 md:h-full w-full  md:w-auto" src={Frame} alt=""/>
    <img className=" md:absolute bottom-0 left-0 md:ml-12 lg:ml-32 xl:ml-64 2xl:ml-96 h-96 md:h-5/6 w-full md:w-auto object-cover object-top" src={Home} alt=""/>
  </div>
  <div className="relative container px-4 mx-auto">
    <div className="w-full md:w-1/2 lg:w-2/5 ml-auto py-24 md:py-40">
      <h1 className="mb-10 text-4xl md:text-5xl leading-tight font-heading font-medium">Winter Jackets</h1>
      <p className="mb-14 md:mb-32 text-xl text-darkBlueGray-400 font-light uppercase" >Don't compromise on style! get flat 30% off for new arrivals.</p>
      <Link className="inline-block py-4 px-10 text-xl leading-8 text-white font-heading font-medium tracking-tighter text-center bg-blue-500 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-blue-600 rounded-xl" to='/Products'>Shop now</Link>
    </div>
  </div>
</section> ;
};

export default Slider;
