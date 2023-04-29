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

```html
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