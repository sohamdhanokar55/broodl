# Broodl

A modern web application built with Next.js, featuring authentication, a dashboard, and a suite of reusable UI components. Powered by Firebase for backend services.

---

## 📸 Screenshot

<!-- Add your application screenshot below -->

![image](https://github.com/user-attachments/assets/5db93bbd-7214-4352-97c2-758f85958903)


---

## 🚀 Features

- **Authentication**: Secure login and logout functionality using Firebase.
- **Dashboard**: Personalized dashboard for authenticated users.
- **Reusable Components**: Modular UI components (Button, Calendar, Hero, etc.) for rapid development.
- **Responsive Design**: Mobile-friendly and accessible layouts.
- **Loading States**: Smooth user experience with loading indicators.
- **Context API**: Global state management for authentication.
- **Modern Styling**: Global and component-level CSS with **Tailwind CSS** for a polished look.

---

## 🗂️ Project Structure

```
broodl/
│
├── app/                  # Next.js app directory (routing, layouts, pages)
│   ├── dashboard/        # Dashboard page
│   ├── favicon.ico
│   ├── globals.css       # Global styles
│   ├── head.js           # Custom <head> configuration
│   ├── layout.js         # Root layout
│   └── page.js           # Home page
│
├── components/           # Reusable React components
│   ├── Button.js
│   ├── Calendar.js
│   ├── CallToAction.js
│   ├── Dashboard.js
│   ├── Hero.js
│   ├── Loading.js
│   ├── Login.js
│   ├── Logout.js
│   └── Main.js
│
├── context/
│   └── AuthContext.js    # Authentication context provider
│
├── utils/
│   └── index.js          # Utility functions
│
├── public/               # Static assets (SVGs, images)
│
├── firebase.js           # Firebase configuration
├── next.config.mjs       # Next.js configuration
├── eslint.config.mjs     # ESLint configuration
├── postcss.config.mjs    # PostCSS configuration
├── jsconfig.json         # JS project configuration
├── package.json          # Project metadata and dependencies
└── README.md             # Project documentation
```

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"/>
  <img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white" alt="PostCSS"/>
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/>
  <img src="https://img.shields.io/badge/Vercel-000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel"/>
</p>

- **Frontend**: [Next.js](https://nextjs.org/), [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), CSS (Global and Component-level), [PostCSS](https://postcss.org/)
- **Backend/Services**: [Firebase](https://firebase.google.com/) (Authentication, Database, etc.)
- **State Management**: React Context API
- **Linting**: [ESLint](https://eslint.org/)
- **Other Tools**: [Vercel](https://vercel.com/) (for deployment, optional)

---

## ⚙️ Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/broodl.git
   cd broodl
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure Firebase:**

   - Update `firebase.js` with your Firebase project credentials.

4. **Run the development server:**

   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## 📦 Available Scripts

- `npm run dev` — Start the development server
- `npm run build` — Build for production
- `npm run start` — Start the production server
- `npm run lint` — Run ESLint

---

## 🤝 Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements and bug fixes.

---


DEMO DATA
{
[year]:{
[month]:{
1:4,
2:5,
3:1,
}
}
}
