# AI Hub - Frontier Model Subscription Platform 🤖

A modern, responsive React-based web application built for practicing core React concepts like State Management, Props Drilling, and Conditional Rendering. This project simulates a marketplace where users can explore and "subscribe" to various AI models.

🔗 **Live Demo:** [https://aimodelhub.netlify.app/](https://aimodelhub.netlify.app/)

## 📖 Project Purpose
This project was developed as a **beginner practice exercise** to master:
* Handling asynchronous data fetching with the React `use` hook.
* Managing a shopping cart (Add to Cart, Delete, and Total Calculation).
* Component-based architecture (splitting UI into reusable parts).
* Interactive UI feedback using `react-toastify`.
* Styling with **Tailwind CSS**.

## ✨ Features
- **Dynamic Model Grid:** Displays a list of AI models with status badges (Popular, Favourite, etc.).
- **Smart Cart Logic:** - Prevents users from adding the same model twice.
  - Real-time price calculation of the total subscription cost.
  - Ability to remove items from the cart.
- **Mock Checkout:** A "Proceed to Checkout" button that clears the cart and provides a success notification.
- **Responsive Design:** Fully functional on mobile, tablet, and desktop views.

## 🛠️ Tech Stack
* **React.js** (Vite)
* **Tailwind CSS** (Styling)
* **React Toastify** (Notifications)
* **Lucide React / Icons** (Visuals)

## 📂 Folder Structure
```text
src/
├── components/
│   ├── Banner.jsx      # Hero section
│   ├── Navbar.jsx      # Navigation
│   ├── Models.jsx      # Model list container
│   ├── ModelCard.jsx   # Individual model cards
│   ├── Cart.jsx        # Shopping cart logic
│   └── Footer.jsx      # Footer section
├── App.jsx             # Root component & State logic
└── main.jsx            # Entry point