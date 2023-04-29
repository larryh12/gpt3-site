## get the scafhold in page.jsx

```jsx
  <div className="App">
    <Navbar />
    <Header />
    <Brand />
    <WhatGPT />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  </div>
```


## navbar

setup navbar scaffold

```jsx
    <div className="gpt__navbar">
      <div className="gpt__navbar-links">
        <div className="gpt__navbar-links_logo">
          <img src="logo.svg" />
        </div>
        <div className="gpt__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wgpt">What is GPT?</a></p>
          <p><a href="#possibility">Open AI</a></p>
          <p><a href="#features">Case Studies</a></p>
          <p><a href="#blog">Library</a></p>
        </div>
      </div>
      <div className="gpt__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign up</button>
      </div>
    </div>
```

add hamburgur navbar menu

    add react icons and usestate
    import React, { useState } from 'react';
    import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

    because use state had to add 'use client' on the top
    set initial state
      const [toggleMenu, setToggleMenu] = useState(false);

    setup navbar-menu scaffold

```jsx
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

```