import React from 'react';
import Logo from '../Assets/Logo-website.png';
import { Link } from 'react-router-dom'

const Error = () => {

    return <div className="w-full my-12 px-4 flex items-center justify-center flex-col gap-2 h-full">
        <img className="h-48 mb-4" src={Logo} alt="" />
        <h1 className="text-rose-600">404 ERROR</h1>
        <h1 className="text-5xl font-bold">Page not found.</h1>
        <p className="text-gray-500">Sorry, we couldn't find the page you're looking for.</p>
        <Link className="text-teal-600 flex align-center hover:text-teal-800 mt-4" to="/">
            Go back home
            <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
        </Link>
    </div>;
};

export default Error;
