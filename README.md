# 🔍 React Image Finder

> A modern, responsive, and accessible image search application built with React 18, Pixabay API, and modular CSS.

---

## 📖 Overview

**React Image Finder** is a web application that enables users to quickly search, explore, and view high-resolution photography and vector graphics powered by the [Pixabay API](https://pixabay.com/api/docs/). Built with modern React architecture, it emphasizes accessibility (WCAG compliance), responsive design, and smooth interactions.

---

## ✨ Key Features

- **Instant Search**: Query hundreds of thousands of curated photos with instant parameterized search.
- **Batch Pagination**: Seamless "Load more" functionality with smooth auto-scroll to newly appended items.
- **Accessible Modal Viewer**: Full-screen preview modal with keyboard navigation (`Esc` key support), backdrop click dismissal, and background scroll locking.
- **WCAG & A11y Compliant**: Semantic HTML5 landmarks (`<header>`, `<main>`, `<footer>`), valid heading hierarchy, accessible search form (`role="search"`), and keyboard-focusable cards.
- **Secure Architecture**: Complete decoupling of secrets with framework-level `.env` support and `.env.example` templates.
- **Responsive Layout**: Fluid CSS Grid that adapts elegantly from mobile viewports to ultra-wide displays.
- **Custom Visual Branding**: Minimalist SVG and multi-resolution raster icons matching the signature rose-to-sky gradient palette.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) (Hooks, functional components)
- **Bundler / Tooling**: [Create React App](https://create-react-app.dev/) (Webpack 5)
- **HTTP Client**: [Axios](https://axios-http.com/)
- **Styling**: Vanilla CSS Modules (scoped styles, CSS custom properties)
- **Indicators**: [react-loader-spinner](https://www.npmjs.com/package/react-loader-spinner)
- **Type Checking**: [PropTypes](https://www.npmjs.com/package/prop-types)
- **CI/CD**: GitHub Actions (`actions/checkout@v4`, `actions/setup-node@v4`, `JamesIves/github-pages-deploy-action@v4`)

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.x, v20.x, or later)
- [npm](https://www.npmjs.com/) (v9.x or later)
- A free [Pixabay API Key](https://pixabay.com/api/docs/)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/iberikofer/react-image-finder.git
   cd react-image-finder
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   Copy the `.env.example` template to `.env`:
   ```bash
   cp .env.example .env
   ```
   Open `.env` and add your Pixabay API key:
   ```env
   REACT_APP_PIXABAY_API_KEY=your_actual_pixabay_key_here
   ```

4. **Start development server**:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

---

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm start` | Runs the app in development mode with Hot Module Replacement. |
| `npm run build` | Compiles the production bundle into the `build/` folder. |
| `npm run lint:js` | Lints all `.js` and `.jsx` files using ESLint. |
| `npm test` | Launches the test runner in interactive watch mode. |

---

## 🌐 Deployment

This project is configured for automated deployment to **GitHub Pages** via GitHub Actions:

1. Ensure the `homepage` property in `package.json` points to your GitHub Pages URL:
   ```json
   "homepage": "https://<username>.github.io/<repository-name>/"
   ```
2. Add your Pixabay API key as a repository secret in GitHub:
   - Navigate to **Settings** > **Secrets and variables** > **Actions** > **New repository secret**.
   - Name: `REACT_APP_PIXABAY_API_KEY`
   - Value: `<your_pixabay_api_key>`
3. Push to the `main` branch. The `.github/workflows/deploy.yml` workflow will automatically test, build, and deploy the application to the `gh-pages` branch.

---

## 📄 License

This project is licensed under the MIT License.
