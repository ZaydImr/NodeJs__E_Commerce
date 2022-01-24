import React, { useState } from 'react';
import Logo from '../Assets/Logo-website.png';

const NewsLetter = () => {

    const [email,setEmail] = useState('');

    const signUpToNewsletter = () => {
        console.log(email);
    };

  return <section className="py-20 overflow-x-hidden">
  <div className="container px-4 mx-auto">
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute inset-0 bg-slate-200 my-12 -ml-12 -mr-12"></div>
      <div className="relative pt-20 pb-32 px-8 bg-slate-300 text-center">
        <p className="inline-block mb-7">
          <img className="h-24" src={Logo} alt="" />
        </p>
        <h2 className="mb-5 text-4xl md:text-4xl text-white font-bold font-heading">Join Our Newsletter</h2>
        <p className="mb-6 text-slate-100">Sign me up for LAMA newsletters to get exclusive perks.</p>
        <div className="relative max-w-xl mx-auto bg-white rounded-lg">
          <div className="relative lg:max-w-xl lg:mx-auto bg-white rounded-lg">
            <div className="relative flex flex-wrap items-center justify-between">
              <div className="relative flex-1">
                <span className="absolute top-0 left-0 ml-8 mt-4 font-semibold font-heading text-xs text-gray-400">Drop your e-mail</span>
                <input value={email} onChange={e=>setEmail(e.target.value)} className="inline-block w-full pt-8 pb-4 px-8 placeholder-gray-900 border-0 focus:ring-transparent focus:outline-none rounded-md" type="text" placeholder="steven@example.dev"/>
              </div>
              <button type="button" onClick={()=>signUpToNewsletter()} className="inline-block w-auto bg-slate-800 hover:bg-slate-900 text-white font-bold font-heading py-6 px-8 rounded-md uppercase text-center">Join</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>;
};

export default NewsLetter;
