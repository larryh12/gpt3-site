import React from 'react'

// import { Footer, Blog, Possibility, Features, WhatGPT, Header } from '@/containers';
// import { CTA, Brand, Navbar } from '@/components';

import Header from '@/containers/Header'
import WhatGPT from '@/containers/WhatGPT'
import Features from '@/containers/Features'
import Possibility from '@/containers/Possibility'
import Blog from '@/containers/Blog'
import Footer from '@/containers/Footer'

import Navbar from '@/components/Navbar'
import Brand from '@/components/Brand'
import CTA from '@/components/CTA'


const HomePage = () => {
  return (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand />
    <WhatGPT />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
  )
}

export default HomePage