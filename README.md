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
   npm install | npm i
   npm run dev

    This should open the editor at http://localhost:5173 or a similar port.

    Usage
        Editor Panel:
        The left (or top on smaller screens) side of the page allows you to configure:
            Carousel (images, view mode, corner radius, image fit mode)
            Text area (title, description, colors)
            CTA (label, link, colors)
            Buttons to reset all fields or save the config
        Preview Screen:
        The right (or bottom on smaller screens) side shows a mobile-like interface reflecting your changes in real time.


      Scripts
      In your package.json, you’ll find these scripts:

      npm run dev: Runs the Vite dev server for local development.

      npm run build:

      Compiles TypeScript (tsc -b).
      Builds the production bundle with Vite (vite build).
      npm run preview: Serves the production build locally so you can test before deployment.


      Project Structure

          ├─ src
          │  ├─ App.tsx
          │  ├─ main.tsx
          │  ├─ index.css
          │  ├─ components
          │  │  ├─ CallToAction
          │  │  ├─ Carousel
          │  │  ├─ EditorPreview
          │  │  ├─ ErrorBoundary
          │  │  └─ TextArea
          │  │  └─ common
          │  ├─ state
          │  │  └─ EditorContext
          │  ├─ types
          │  └─ ...
          ├─ package.json
          ├─ tsconfig.json
          ├─ tailwind.config.js
          ├─ vite.config.ts
          └─ README.md

    Notable Folders:

        components/common/: Shared UI components (modals, input fields, color pickers, etc.).
        components/CarouselEditor.tsx & CarouselPreview.tsx: Handles carousel functionality.
        components/CallToActionEditor.tsx & CallToActionPreview.tsx: Manages CTA button.
        components/TextAreaEditor.tsx & TextAreaPreview.tsx: Title, description, and color fields.
        EditorPreview/MobileEditor.tsx: Organizes the main editor panel.
        EditorPreview/MobilePreview.tsx: Main phone-like preview container.
        state/EditorContext/: Contains context, reducer, initial state, and custom hooks.
        types/: Global or shared TypeScript type definitions.


    Technologies Used
        React (v18+)
        TypeScript (~v5.6.2)
        Vite (v6.0.5) for bundling and dev server
        Tailwind CSS (v3.4.17) for styling
        React Slick & Slick Carousel for the carousel
        React Quill for the rich-text editor
        React Context + useReducer for state management


    Future Improvements
    Below are some ideas you can consider:

        Implement Undo/Redo
            Store a history of states in the reducer so users can revert or reapply changes.
        
        Enhance Accessibility
            Add role="dialog" and aria-modal="true" to modals, use labels with htmlFor, and ensure color contrast meets WCAG guidelines.

        Comprehensive Testing
            Write tests (Jest + React Testing Library) to verify components like CarouselEditor or TextAreaEditor behave correctly.

        Additional Animations & Polish
            Add subtle transitions on modals, hover effects, and smoother carousel transitions for a more refined UX.

        Advanced Validation & Sanitization
            Provide more robust validation for URLs (carousel images, CTA link) and sanitize HTML from the text editor in real-world scenarios to prevent XSS.

        Prevention of choosing styles until image loaded
            Display option, Corner Radius, and image fit mode should be disabled until image is loaded.


Thank You
Thanks for checking out the Mobile App Home Screen Editor! If you have any questions or suggestions, feel free to open an issue or reach out. Enjoy customizing and previewing your mobile app design!





---

### Tips on Usage

- Customize any sections (e.g., change the version numbers or links if they differ in your code).  
- Replace the repository link in the **Installation** step with your actual GitHub URL.  
- If you have screenshots or GIFs, consider adding them under **Demo** using Markdown image syntax.  

This **README** should set you up nicely for sharing your project with others. Good luck, and happy coding!