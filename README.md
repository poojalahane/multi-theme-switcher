✅ The Multi-Theme Switcher App has been implemented from scratch, including:

Project setup with TypeScript

Redux state for theme management (with persistence)

TailwindCSS styling for all themes

React Router pages (Home, About, Contact)

API data fetch (from fakestoreapi.com)

Clean folder structure and code comments

Theme-specific fonts, colors, layouts

Responsive design with minimal dependencies

# Multi-Theme Switcher App

A React + TypeScript web app with 3 dynamic themes using Tailwind CSS and Redux.

## 🚀 Features

- 3 Themes:
  - Theme 1: Minimal light layout
  - Theme 2: Dark mode with sidebar-like layout
  - Theme 3: Colorful playful layout with Pacifico font
- Responsive Design
- Redux + localStorage for persistent theme switching
- API Integration with [Fake Store API](https://fakestoreapi.com/products)
- React Router pages (Home, About, Contact)

## 🛠 Tech Stack

- React + TypeScript
- Tailwind CSS
- Redux Toolkit
- Axios
- React Router

## 📁 Folder Structure

src/
│
├── components/ # Reusable components (Header, Layout)
├── pages/ # Route-based pages
├── redux/ # Redux store and theme slice
├── App.tsx # Main App file with routing
├── main.tsx # Entry point
├── index.css # Tailwind imports

## 📦 Setup Instructions

```bash
git clone https://github.com/poojalahane/multi-theme-switcher
cd multi-theme-switcher
npm install
npm run dev

```
