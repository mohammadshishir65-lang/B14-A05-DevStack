# 🧱 DevStack Builder

A modern React application empowering developers to browse, select, and organize their ideal technology architectures into a personalized stack.

## 🚀 Technologies Used
* **React.js (Vite)**
* **Tailwind CSS & DaisyUI**
* **React-Toastify**
* **JSON** for localized data fetching

## ✨ Features
1. **Interactive Stack Management**: Add and remove technologies effortlessly. Prevents duplicate selections natively and visually disables added cards.
2. **Dynamic UI/UX**: Features a unified, configurable brand gradient, sticky navigation, and smooth toast notifications for all major interactions.
3. **Responsive Architecture**: Fully mobile-optimized layout that shifts from a 1-column mobile view to a 3-column desktop grid with a persistent sticky sidebar.

## 🧠 Concept Answers

**1. What is JSX, and why is it used in React?**
JSX is a syntax extension for JavaScript that looks like HTML. It is used in React because it allows developers to write and structure UI components visually and cleanly inside JavaScript files.

**2. What is the difference between props and state?**
State is local, mutable data managed *inside* a component. Props (properties) are read-only data passed *down* from a parent component to a child component.

**3. What does the `useState` hook do, and where did you use it in this project?**
`useState` allows functional components to store and update dynamic values. I used it to keep track of the fetched `technologies` array, the `loading` boolean, and the items the user added to their `stack`.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**
`useEffect` lets you perform side effects (like data fetching) outside the regular component render cycle. I needed it to fetch the `data.json` file exactly once when the App component mounts, rather than re-fetching it every time the component re-renders.

**5. Why does every item in a `.map()` list need a unique `key` prop?**
React uses the `key` prop to identify which items in a list have changed, been added, or been removed. It optimizes rendering performance by preventing React from re-drawing the entire list.

**6. What is conditional rendering? Show one place you used it.**
Conditional rendering is showing different UI elements based on a true/false condition. I used it in `YourStack.jsx` to show the empty placeholder SVG when `stack.length === 0`, and the list of selected technologies otherwise.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**
Data is passed from parent to child via props (e.g., `<TechCard tech={techData} />`). A child sends data back to the parent by calling a function passed down as a prop (e.g., `onClick={() => onAdd(tech)}` where `onAdd` was defined in the parent).
