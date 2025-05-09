import React from 'react'
import logo from './images/logo1.png';
import { Link } from 'react-router-dom';

export default function
() {
  return (
<>
  {/* component */}
  <nav className="shadow shadow-gray-300 w-100 px-8 md:px-auto">
    <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
      {/* Logo */}
      <div className="text-indigo-500 md:order-1">
        {/* Heroicon - Chip Outline */}
        <img src={logo}  className="h-15 w-40"/>
     
      </div>
      <div className="md:flex hidden text-white order-3 w-full md:w-auto md:order-2">
        <ul className="flex font-semibold justify-between ">
          {/* Active Link = text-indigo-500
          Inactive Link = hover:text-indigo-500 */}
          <li className="md:px-4 md:py-2 text-indigo-500">
            <a href="#">Home</a>
          </li>
          <li className="md:px-4 md:py-2 hover:text-indigo-400">
            <a href="#">Search</a>
          </li>
          <li className="md:px-4 md:py-2 hover:text-indigo-400">
            <a href="#explore">Explore</a>
          </li>
          <li className="md:px-4 md:py-2 hover:text-indigo-400">
            <a href="#faq">About</a>
          </li>
          <li className="md:px-4 md:py-2 hover:text-indigo-400">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
      <div className="order-2 md:order-3">
  
      </div>
    </div>
  </nav>
</>

  )
}
