'use client';

import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="flex justify-between items-center py-8 px-24">
      <div className="flex flex-1 justify-start items-center">
        <div className="mr-8">
          <img className="w-16 h-4" src="logo.svg"/>
        </div>
        <div className="flex flex-row">
          <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer"><a href="#home">Home</a></p>
          <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer"><a href="#wgpt">What is GPT?</a></p>
          <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer"><a href="#possibility">Open AI</a></p>
          <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer"><a href="#features">Case Studies</a></p>
          <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer"><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="flex justify-end items-center">
      <p className="text-white font-medium text-lg leading-6 capitalize my-0 mx-4 cursor-pointer">Sign in</p>
        <button className="py-2 px-4 text-white bg-red-600 font-medium text-lg leading-6 border-none outline-none cursor-pointer rounded" type="button">Sign up</button>
      </div>

      {/* navbar menu  */}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wgpt3">What is GPT3?</a></p>
            <p><a href="#possibility">Open AI</a></p>
            <p><a href="#features">Case Studies</a></p>
            <p><a href="#blog">Library</a></p>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>

    </div>
  )
}

export default Navbar