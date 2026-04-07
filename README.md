# 🤖 AI Hub — Frontier Model Subscription Platform

> **Explore, Subscribe & Manage** — A modern React marketplace to browse and subscribe to cutting-edge AI models, with a smart cart and real-time price tracking.

🚀 [Visit the Live App](https://aimodelhub.netlify.app/)

---

## 📖 Overview

**AI Hub** is a React-based web app that simulates a marketplace for AI model subscriptions. It was built as a hands-on practice project to get comfortable with the core ideas every React developer needs — state management, props, conditional rendering, async data fetching, and component architecture. Think of it as a mini Spotify, but for AI models.

---

## 🖼️ Screenshot

> <img width="1905" height="937" alt="image" src="https://github.com/user-attachments/assets/9a6ddacc-d992-4447-b1e1-f580d2a6b332" />
> <img width="1814" height="976" alt="image" src="https://github.com/user-attachments/assets/e34c20a5-c295-499e-92de-d159bd79e919" />

*

---

## 🚀 Features

- 🧠 **Dynamic Model Grid** — browse a live list of AI models, each with status badges like *Popular* or *Favourite*
- 🛒 **Smart Cart Logic** — prevents duplicate subscriptions, updates totals in real time, and lets you remove items anytime
- 💰 **Real-time Price Calculation** — your total subscription cost updates instantly as you manage your cart
- ✅ **Mock Checkout** — a *Proceed to Checkout* button clears the cart and fires a success notification
- 🔔 **Toast Notifications** — instant, friendly feedback on every cart action via React-Toastify
- 📱 **Fully Responsive** — works great on mobile, tablet, and desktop

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React.js (Vite) | UI components and state management |
| Tailwind CSS | Utility-first styling |
| React-Toastify | Toast notifications |
| Lucide React | Icons and visuals |

---

## 📦 Dependencies

```json
{
  "react": "latest",
  "react-dom": "latest",
  "tailwindcss": "latest",
  "react-toastify": "latest",
  "lucide-react": "latest"
}
```

---

## 🏃 Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/ai-hub.git
   cd ai-hub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in your browser**
   ```
   http://localhost:5173
   ```

---

## 🎮 How to Use

| Action | Result |
|---|---|
| Browse the model grid | View all available AI models with badges |
| Click **Subscribe** | Adds model to cart with a toast notification |
| Try adding a duplicate | Shows a warning — no duplicates allowed |
| View the cart | See all subscribed models and the running total |
| Click **Proceed to Checkout** | Clears cart and shows a success message |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Banner.jsx       # Hero section
│   ├── Navbar.jsx       # Navigation bar
│   ├── Models.jsx       # Model list container
│   ├── ModelCard.jsx    # Individual model card
│   ├── Cart.jsx         # Cart logic and display
│   └── Footer.jsx       # Footer section
├── App.jsx              # Root component & state management
└── main.jsx             # App entry point
```

---

## 🧠 What I Practised

This was a beginner practice project focused on getting hands-on with:

- Async data fetching using React's `use` hook
- Shopping cart logic — add, remove, and total calculation
- Component-based architecture with reusable, focused components
- Props drilling across nested components
- Conditional rendering for dynamic UI states
- Styling with Tailwind CSS and interactive feedback with React-Toastify

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request for bug fixes, new features, or design improvements.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> 💡 *The best way to learn React is to build something real — so here we are!*
