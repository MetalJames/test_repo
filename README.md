# Mobile App Home Screen Editor

A **React + TypeScript** application that allows users to preview and modify an example mobile app interface in real time. This project was built using **Vite** and **Tailwind CSS** to provide a fast, reliable, and streamlined development experience.

---

## Table of Contents
1. [Demo](#demo)
2. [Features](#features)
3. [Why Vite?](#why-vite)
4. [Why Tailwind CSS?](#why-tailwind-css)
5. [Installation & Setup](#installation--setup)
6. [Usage](#usage)
7. [Scripts](#scripts)
8. [Project Structure](#project-structure)
9. [Technologies Used](#technologies-used)
10. [Future Improvements](#future-improvements)
11. [Contributing](#contributing)
12. [License](#license)

---

## Demo

If you have a live demo, you can provide a link here (e.g., Netlify, Vercel, GitHub Pages, etc.).  
Or you can include screenshots/GIFs to showcase the editor and preview in action.

---

## Features

1. **Carousel Editor**  
   - Add, edit, and remove image URLs.  
   - Choose display mode: portrait, landscape, or square.  
   - Adjust corner radius and `object-fit` options (`cover`, `contain`, `fill`).

2. **Text Area Editor**  
   - Edit title and description (rich-text with ReactQuill).  
   - Limit the title to 30 characters (demonstrates simple validation).  
   - Choose hex color values for title and description text.

3. **Call-to-Action (CTA) Editor**  
   - Configure button label and link.  
   - Select button background color and text color.  
   - Real-time preview of your CTA design.

4. **Real-Time Preview**  
   - All edits are instantly reflected in a phone-sized “mock” preview.

5. **Reset & Save**  
   - Reset all fields to the initial state (with confirmation).  
   - Save configuration as downloadable or copyable JSON.

6. **Error Boundary**  
   - Graceful fallback UI to handle unexpected errors without crashing the entire app.

---

## Why Vite?

1. **Speed**: Vite is known for its extremely fast dev server and lightning-quick HMR (Hot Module Replacement). This makes the development experience snappy.  
2. **Modern Build Setup**: It uses ES modules in development and bundles via Rollup for production. This yields smaller and faster builds.  
3. **Easy Integration**: Vite has official React and TypeScript plugins, allowing a quick setup for a modern React + TS project without manual configuration.

---

## Why Tailwind CSS?

1. **Utility-First**: Tailwind offers utility classes, making it quick to style components without writing large CSS files.  
2. **Customization**: You can easily customize the default theme, breakpoints, and more.  
3. **Efficiency**: After 3 years of using Tailwind, I’m comfortable with its approach to styling, making development faster and more consistent.  
4. **Integration**: It fits seamlessly into modern JS frameworks, and configuring it with Vite + React is straightforward.

---

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo


Display option, Corner Radius, and image fit mode should be disabled until image is loaded.