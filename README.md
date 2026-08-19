# Webku

A minimal React + Vite web application template named **Webku**, featuring fast refresh, ESLint integration, and ready-to-use scripts for development and production.

## Features

* React 19 with Vite for fast Hot Module Replacement (HMR)
* ESLint configured for JavaScript (or TypeScript if you opt in)
* Pre-configured plugins:

  * `@vitejs/plugin-react` (Babel Fast Refresh)
  * `@vitejs/plugin-react-swc` (SWC Fast Refresh)

## Prerequisites

Make sure you have the following installed:

* [Node.js](https://nodejs.org/) (v16 or newer)
* [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/fadlytanjung/webku.git
   cd webku
   ```

2. **Install dependencies**

   Using npm:

   ```bash
   npm install
   ```

   Or using yarn:

   ```bash
   yarn install
   ```

## Available Scripts

In the project directory, you can run:

### `npm run dev` or `yarn dev`

Starts the development server with HMR at `http://localhost:3000` (default).

### `npm run build` or `yarn build`

Bundles the app for production into the `dist` folder.

### `npm run serve` or `yarn serve`

Locally serves the production build from `dist` (requires `npm install -g serve` or use `npx serve`).

### `npm run lint` or `yarn lint`

Runs ESLint across the `src` directory and reports any issues.

## Folder Structure

```plain
/webku
├── dist/              # Production build output
├── node_modules/      # Project dependencies
├── public/            # Static assets (e.g., index.html, icons)
├── src/
│   ├── assets/        # Image and style assets
│   ├── components/    # Reusable React components
│   ├── App.jsx        # Root React component
│   └── main.jsx       # Application entry point
├── .eslintrc.cjs      # ESLint configuration
├── vite.config.js     # Vite configuration
├── package.json       # Project metadata and scripts
└── README.md          # This file
```

## Usage

1. **Start development**

   ```bash
   npm run dev
   ```
2. **Open your browser** and navigate to `http://localhost:3000`.
3. **Edit** the source files in `src/` and see live updates.

## Deployment

You can deploy the `dist` folder to any static hosting provider, such as:

* [Netlify](https://www.netlify.com/)
* [Vercel](https://vercel.com/)
* [GitHub Pages](https://pages.github.com/)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
