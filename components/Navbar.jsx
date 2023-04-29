import React from 'react'
import './navbar.css';

const Navbar = () => {
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
    </div>
  )
}

export default Navbar