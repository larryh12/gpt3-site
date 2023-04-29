'use client';

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between items-center py-8 px-24">
      <div className="flex flex-1 justify-start items-center">
        <div className="mr-8">
          <img className="w-16 h-4 cursor-pointer" src="logo.svg"/>
        </div>
        <div className="hidden lg:flex lg:flex-row">
          <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer"><a href="#home">Home</a></p>
          <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer"><a href="#wgpt">What is GPT?</a></p>
          <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer"><a href="#possibility">Open AI</a></p>
          <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer"><a href="#features">Case Studies</a></p>
          <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer"><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="hidden md:flex md:justify-end md:items-center">
        <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer">Sign in</p>
        <button className="py-2 px-4 text-white bg-red-600 font-medium text-lg leading-6 border-none outline-none cursor-pointer rounded" type="button">Sign up</button>
      </div>

      {/* navbar menu  */}
      <div className="ml-4 flex relative lg:hidden">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="flex justify-end items-end flex-col bg-gray-900 p-8 absolute right-0 mt-4 rounded text-end top-10 min-w-[210px] shadow-sm scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p className="text-white font-medium text-lg leading-6 capitalize my-4 mx-0 cursor-pointer"><a href="#home">Home</a></p>
            <p className="text-white font-medium text-lg leading-6 capitalize my-4 mx-0 cursor-pointer"><a href="#wgpt">What is GPT?</a></p>
            <p className="text-white font-medium text-lg leading-6 capitalize my-4 mx-0 cursor-pointer"><a href="#possibility">Open AI</a></p>
            <p className="text-white font-medium text-lg leading-6 capitalize my-4 mx-0 cursor-pointer"><a href="#features">Case Studies</a></p>
            <p className="text-white font-medium text-lg leading-6 capitalize my-4 mx-0 cursor-pointer"><a href="#blog">Library</a></p>
          </div>
          <div className="block md:hidden">
            <p className="text-white font-medium text-lg leading-6 capitalize my-4 mx-0 cursor-pointer">Sign in</p>
            <button className="py-2 px-4 text-white bg-red-600 font-medium text-lg leading-6 border-none outline-none cursor-pointer rounded" type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>

    </div>
  )
}

export default Navbar