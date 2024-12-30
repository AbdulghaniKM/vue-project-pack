# Vue-Tailwind-ShadCN Starter Template

## Overview

A modern, production-ready starter template for building Vue.js applications with the power of Tailwind CSS and ShadCN components. This template emphasizes developer experience, performance, and best practices.

### Key Technologies

- 🚀 **Vue 3** with Composition API
- 🎨 **Tailwind CSS** for utility-first styling
- 🧩 **ShadCN** for beautiful, accessible UI components
- 📱 **Vue Router** for seamless navigation
- ⚡️ **Vite** for lightning-fast development

## Features

✨ **Modern Development Stack**

- Vue 3 Composition API with script setup syntax
- Single File Components (SFCs) for modular development

🎯 **Pre-configured Tools**

- Vue Router with automatic route generation
- Tailwind CSS with custom configuration and dark mode support
- ShadCN components pre-styled and ready to use
- Prettier and prettier-plugin-tailwindcss for consistent code style and formatting/class sorting

🏗️ **Architecture**

- Scalable folder structure following best practices
- Component-driven development approach

## Quick Start

### Prerequisites

- Node.js >= v16.0.0
- npm >= v8.0.0

### Installation

1. Clone the repository:

```bash
git clone https://github.com/AbdulghaniKM/vue-tailwind-shadcn-starter-template.git
cd vue-tailwind-shadcn-starter-template
```

2. Install dependencies:

```bash
npm install
```

3. Running the Development Server

```bash
npm run dev
```

4. Project Structure

```bash
vue-tailwind-shadcn-starter-template/
├── public/ # Static assets
├── src/
│ ├── assets/ # Project assets
│ │ └── css/ # Global CSS files
│ ├── components/ # Reusable Vue components
│ │ └── ui/ # ShadCN UI components
│ ├── lib/ # Utility functions
│ ├── pages/ # Vue Router page components
│ ├── router/ # Vue Router configuration
│ ├── App.vue # Root component
│ └── main.js # Application entry point
├── .prettierrc # Prettier configuration
├── .vscode/ # VS Code settings
├── components.json # ShadCN components configuration
├── index.html # Entry HTML file
├── jsconfig.json # JavaScript configuration
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js # Vite configuration
└── README.md # Project documentation
```

### Scripts

```bash
npm run dev: Start the development server.

npm run build: Build the application for production.

npm run preview: Preview the production build locally.
```

### Configuration

- Tailwind CSS

  Custom configurations can be made in tailwind.config.js.

  Additional styles can be added in src/assets/css/index.css.

- Vue Router

  Add or modify routes in src/router/index.js.

  Page components are stored in src/pages/.

### Versions

- Vue.js: ^3.5.13

- Vue Router: ^4.5.0

- Tailwind CSS: ^3.4.17

- Radix-vue: ^1.9.12

### Contributing

Feel free to fork the repository and submit pull requests. All contributions are welcome!

### Support

For questions or help, feel free to reach out via GitHub Issues.
