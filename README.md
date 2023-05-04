# GPT-3 Landing Page

A re-creation of a modern front-end web design with the concept of OpenAI's GPT model, built with:

- [Next.js 13](https://nextjs.org/docs)
- [React](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS](https://tailwindcss.com/)

**See it [LIVE](https://gpt-site-larryh12.vercel.app/)** 👈

https://www.figma.com/file/lz9lLpFHMxHm2odnwM3R0z/gpt3
https://www.arshakir.com/
https://github.com/adrianhajdin/project_modern_ui_ux_gpt3

## Initial Setup

### Section Layout

In `@/app/page.jsx`, we initially plan the structure of our site.

```jsx
const HomePage = () => {
  return (
    <Navbar />
    <Header />
    <Brand />
    <WhatGPT />
    <Features />
    <Possibility />
    <CTA />
    <Blog />
    <Footer />
  )
}
```

We then create those empty section components with the `rafce` *(React arrow function component export)* snippet and import them accordingly.

### Global Styles

Add some global styling variables to be used for the theme of the design.

```css
--font-family: 'Manrope', sans-serif;
--gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
--gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
--color-accent: #ff4820;
--color-bg: #040C18;
--color-footer : #031B34;
--color-blog: #042c54;
--color-text: #81AFDD;
--color-subtext: #FF8A71;
```

## Design Breakdown

### Landing section

#### \<Navbar />

