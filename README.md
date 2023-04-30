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

## header scaffold 
```jsx
const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src="people.png"/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src="ai.png" />
    </div>
  </div>
);
```
