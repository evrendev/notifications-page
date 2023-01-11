# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Project Setup](#setup)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size

### Screenshot

![desktop image](https://raw.githubusercontent.com/evrendev/notifications-page/main/screens/desktop-screen.jpg)
![mobile image](https://raw.githubusercontent.com/evrendev/notifications-page/main/screens/mobile-screen.jpg)

### Links

- Solution URL: [@github](https://github.com/evrendev/notifications-page)
- Live Site URL: [@github pages](https://evrendev.github.io/notifications-page/)

### Setup

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

## My process

I started by reviewing the design specification. I then started markup knowing that the mobile and desktop layouts would use the same cards, with different page layouts. From there, I stated the styling with mobile-first workflow and then created two media queries to handle the transition from the mobile to the desktop layouts.

### Built with

- Vue3 with Vite
- Pinia
- Semantic HTML5 markup
- Mobile-first workflow
- SCSS preprocessing
- CSS custom properties
- Flexbox

### What I learned

This project was an excellent excercise in CSS flexbox and I learned how CSS flexbox made the layout of the individual card and the page significantly easier than traditional CSS. I learned how to use minmax, auto, and 1fr to make the page flow from mobile-first to the desktop.

### Continued development

I am looking forward to the next project to build on the CSS flexbox experience and to add JavaScript for an additional challenge.

### Useful resources

- [Kevin Powell](https://www.kevinpowell.co/) - Kevin Powell is an excellent teacher and I relied heavily on the notes that I took from his CSS courses taught on scrimba.com.
- [A Complete Guide to Flexbox ](https://css-tricks.com/snippets/css/a-guide-to-flexbox//) - I have found css.tricks.com to be a valuable resourse for flexbox, and all things CSS.
- [Introduction Pinia ](https://pinia.vuejs.org/introduction.html) - Pinia is a store library for Vue, it allows you to share a state across components/pages.

## Author

- Frontend Mentor - [@evrendev](https://www.frontendmentor.io/profile/evrendev)
- Github - [@evrendev](https://github.com/evrendev)
- Twitter - [@evrendev](https://www.twitter.com/evrendev)
