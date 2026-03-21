# Gakuen Idolmaster: Interactive Web Biography

![Astro](https://img.shields.io/badge/Astro-3.0-FF5D01.svg?style=flat-square&logo=astro&logoColor=white) 
![React](https://img.shields.io/badge/React-18-61DAFB.svg?style=flat-square&logo=react&logoColor=white) 
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC.svg?style=flat-square&logo=tailwind-css&logoColor=white) 
![Framer Motion](https://img.shields.io/badge/Framer_Motion-10-0055FF.svg?style=flat-square&logo=framer&logoColor=white)

A mobile-first, immersive **scrollytelling** web application serving as an interactive biography and portfolio for the idols of *Gakuen Idolmaster* (学園アイドルマスター). 

Built to deliver a "wow" factor, the app features smooth scroll-driven animations, parallax effects, dual-language localization (EN/ID), and integrated Spotify tracks, wrapped in a sleek glassmorphism UI.

## Features

- **Mobile-First Scrollytelling:** 100vh dynamic sections that transition fluidly as you scroll, with background colors responding to the idol's signature hex color.
- **Seamless i18n Localization:** Includes built-in English and Indonesian translations for idol biographies, quotes, hobbies, and UI labels. Toggle seamlessly without page reloads!
- **Interactive Card Stack:** Hover (or tap on mobile) over the idol's official art cards to see an organic, randomized fan-out spread animation.
- **Integrated Spotify Embeds:** Listen to each idol's solo tracks directly within their respective biography sections.
- **Parallax Animations:** Full-body character PNGs dynamically fade and slide in sync with the user's scroll depth.
- **Glassmorphism & Modern UI:** Deep-dark slates mixed with vibrant brand accents, creating a premium portfolio aesthetic.

## Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation for blisteringly fast load times)
- **UI Component Library:** [React 18](https://reactjs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites
Make sure you have Node.js (`v18` or newer) installed.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/vermilion10/biduan-hatsuboshi.git
   cd biduan-hatsuboshi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```

4. Open `http://localhost:4321` in your browser.

### Building for Production
To build the static site for production (e.g., GitHub Pages, Vercel, Netlify):

```bash
npm run build
```
The output will be located in the `/dist/` directory.


##  Disclaimer

**This project is a fan-made portfolio piece and is in no way affiliated with, authorized, maintained, sponsored or endorsed by Bandai Namco Entertainment Inc. or any of its affiliates or subsidiaries.** 

"THE IDOLM@STER™" and all related character names, illustrations, and music are the property of Bandai Namco Entertainment Inc. All assets used within this project are retrieved from official game sources or fan-wikis solely for educational/demonstration purposes of web development techniques.

