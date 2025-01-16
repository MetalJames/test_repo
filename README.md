# **Mobile App Home Screen Editor**

A **React + TypeScript** application that allows users to preview and modify an example mobile app interface in real time. This project was built using **Vite** and **Tailwind CSS** to provide a fast, reliable, and streamlined development experience.

---

## Table of Contents
1. [Features](#1-features)
2. [Why Vite?](#2-why-vite)
3. [Why Tailwind CSS?](#3-why-tailwind-css)
4. [Installation & Setup](#4-installation--setup)
5. [Usage](#5-usage)
6. [Scripts](#6-scripts)
7. [Project Structure](#7-project-structure)
8. [Technologies Used](#8-technologies-used)
9. [Future Improvements](#9-future-improvements)

---

## **1. Features**

- **Carousel Editor**  
   - Add, edit, and remove image URLs.  
   - Choose display mode: portrait, landscape, or square.  
   - Adjust corner radius and `object-fit` options (`cover`, `contain`, `fill`).

- **Text Area Editor**  
   - Edit title and description (rich-text with ReactQuill).  
   - Limit the title to 30 characters (demonstrates simple validation).  
   - Choose hex color values for title and description text.

- **Call-to-Action (CTA) Editor**  
   - Configure button label and link.  
   - Select button background color and text color.  
   - Real-time preview of your CTA design.

- **Real-Time Preview**  
   - All edits are instantly reflected in a phone-sized “mock” preview.

- **Reset & Save**  
   - Reset all fields to the initial state (with confirmation).  
   - Save configuration as downloadable or copyable JSON.

- **Error Boundary**  
   - Graceful fallback UI to handle unexpected errors without crashing the entire app.

---

## **2. Why Vite?**

- **Speed**: Vite is known for its extremely fast dev server and lightning-quick HMR (Hot Module Replacement). This makes the development experience snappy.  
- **Modern Build Setup**: It uses ES modules in development and bundles via Rollup for production. This yields smaller and faster builds.  
- **Easy Integration**: Vite has official React and TypeScript plugins, allowing a quick setup for a modern React + TS project without manual configuration.

---

## **3. Why Tailwind CSS?**

- **Utility-First**: Tailwind offers utility classes, making it quick to style components without writing large CSS files.  
- **Customization**: You can easily customize the default theme, breakpoints, and more.  
- **Efficiency**: After 3 years of using Tailwind, I’m comfortable with its approach to styling, making development faster and more consistent.  
- **Integration**: It fits seamlessly into modern JS frameworks, and configuring it with Vite + React is straightforward.

---

## **4. Installation & Setup**

**Clone the repository**:
```bash
   git clone https://github.com/your-username/your-repo.git
```
```bash
   cd your-repo
```
```bash
   npm install
```
```bash
   npm run dev
```

This should open the editor at `http://localhost:5173` or a similar port.

---

## **5. Usage**

### **Editor Panel:**
- Configure:
  - **Carousel**: Images, view mode, corner radius, and image fit mode.
  - **Text Area**: Title, description, and colors.
  - **CTA**: Button label, link, and colors.
- Buttons to:
  - Reset all fields.
  - Save the configuration.

### **Preview Screen:**
- Displays a responsive, mobile-like interface reflecting your changes in real-time.

---

## **6. Scripts**

### Available Commands:

- **`npm run dev`**:  
  - Runs the Vite dev server for local development.

- **`npm run build`**:  
  - Compiles TypeScript (`tsc -b`).  
  - Builds the production bundle with Vite (`vite build`).

- **`npm run preview`**:  
  - Serves the production build locally for testing before deployment.

---

## **7. Project Structure**
```bash
├─ src
│  ├─ App.tsx
│  ├─ main.tsx
│  ├─ index.css
│  ├─ vite-env.d.ts
│  ├─ components
│  │  ├─ CallToAction
│  │  ├─ Carousel
│  │  ├─ EditorPreview
│  │  ├─ ErrorBoundary
│  │  ├─ TextArea
│  │  ├─ common
│  │  └─ index.ts
│  ├─ state
│  │  └─ EditorContext
│  └─ types
├─ package.json
├─ tsconfig.json
├─ tailwind.config.js
├─ vite.config.ts
└─ README.md
```

### **Notable Folders**

- **`components/common/`**: Shared UI components (modals, input fields, color pickers, etc.).
- **`components/CarouselEditor.tsx & CarouselPreview.tsx`**: Handles carousel functionality.
- **`components/CallToActionEditor.tsx & CallToActionPreview.tsx`**: Manages CTA button.
- **`components/TextAreaEditor.tsx & TextAreaPreview.tsx`**: Title and description.
- **`EditorPreview/MobileEditor.tsx`**: Organizes the main editor panel.
- **`EditorPreview/MobilePreview.tsx`**: Main phone-like preview container.
- **`state/EditorContext/`**: Contains context, reducer, initial state, and custom hooks.
- **`types/`**: Global or shared TypeScript type definitions.

---

## **8. Technologies Used**

- **React (v18+)**  
- **TypeScript (~v5.6.2)**  
- **Vite (v6.0.5)** for bundling and dev server  
- **Tailwind CSS (v3.4.17)** for styling  
- **React Slick** & **Slick Carousel** for the carousel  
- **React Quill** for the rich-text editor  
- **React Context** + `useReducer` for state management  
- **Heroicons** for modern SVG icons 

---

## **9. Future Improvements**

### **Ideas for Enhancements**

- **Implement Undo/Redo**:
   - Store a history of states in the reducer for revert and reapply functionality.

- **Enhance Accessibility**:
   - Add `role="dialog"` and `aria-modal="true"` to modals.
   - Use labels with `htmlFor`.
   - Ensure WCAG-compliant color contrast.

- **Comprehensive Testing**:
   - Use Jest + React Testing Library to verify component behavior.

- **Add Animations & Polish**:
   - Subtle transitions, hover effects, and smoother carousel animations.

- **Advanced Validation & Sanitization**:
   - Validate URLs (carousel images, CTA link).  
   - Sanitize HTML in the text editor to prevent XSS attacks.

- **Image-Load-Dependent Controls**:
   - Disable style options (e.g., corner radius, image fit mode) until the image is loaded.

---

## **Thank You**

Thank you for checking out the **Mobile App Home Screen Editor**!  
If you have any questions or suggestions, feel free to open an issue or reach out. Enjoy customizing and previewing your mobile app design!