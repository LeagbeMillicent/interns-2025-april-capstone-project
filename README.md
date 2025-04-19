# ☕ CtrlXCafé — Online Breakfast & Coffee E-commerce App

CtrlXCafé is a modern full-stack web application designed for a cozy breakfast and coffee shop that also offers online ordering. It features a sleek frontend built with Next.js (TypeScript) and a powerful backend powered by Laravel. Customers can browse breakfast menus, customize coffee orders, and make purchases directly from the website.

---

## 🧾 Table of Contents

- [🛍️ Features](#️-features)
- [🌐 Tech Stack](#-tech-stack)
- [🚀 Getting Started](#-getting-started)
  - [Frontend (Next.js)](#frontend-nextjs)
  - [Backend (Laravel)](#backend-laravel)
- [🛠️ API Integration](#️-api-integration)
- [📦 Folder Structure](#-folder-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🛍️ Features

- ✅ Beautiful landing page for the cafe
- 🍳 Online breakfast and coffee menu
- 🛒 Full e-commerce functionality (add to cart, checkout)
- 🔐 Authentication & user management
- 📦 Order history and receipts
- 🧑‍🍳 Admin dashboard (manage products & orders)

---

## 🌐 Tech Stack

### Frontend (Next.js + TypeScript)

- React 18 with Next.js 13+
- TypeScript
- Tailwind CSS for styling
- Axios for API calls
- Zustand or Context API for global state
- SSR and ISR for fast performance

### Backend (Laravel)

- Laravel 10+
- Sanctum for API authentication
- MySQL / PostgreSQL for database
- Laravel Eloquent ORM
- RESTful API design

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- PHP (v8.1+)
- Composer
- MySQL or PostgreSQL
- Docker (optional)

---

### ⛳ Frontend Setup (Next.js)

```bash
# Clone the repo
git clone https://github.com/touchstack-technologies/interns-2025-april-capstone-project.git
cd interns-2025-april-capstone-project/frontend

# Install dependencies
npm install

# Run in dev mode
npm run dev


cd interns-2025-april-capstone-project/backend

# Install dependencies
composer install

# Setup environment
cp .env.example .env
php artisan key:generate

# Configure database in .env, then run:
php artisan migrate --seed

# Start development server
php artisan serve
```

🛠️ API Integration

The frontend communicates with the Laravel backend using RESTful APIs. Authentication is handled via Laravel Sanctum, with access & refresh tokens stored securely.

Example flow:

    User logs in → receives tokens

    Frontend stores token (Secure HTTP-only cookies or local storage)

    All authenticated requests use the Bearer token

```
coffee-cafe/
├── frontend/        # Next.js + TypeScript app
│   ├── components/
│   ├── pages/
│   └── store/
├── backend/         # Laravel app
│   ├── app/
│   ├── routes/
│   └── database/

```

🤝 Contributing

Contributions are welcome! Please fork the repo and create a pull request.

To report bugs or request features, use GitHub Issues.
📄 License

MIT License © 2025 CtrlXCafé Team
