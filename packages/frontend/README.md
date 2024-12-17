# Rentify Frontend

## Overview

This is the frontend service for the **Rentify** application, built using **Next.js** with server-side rendering (SSR) for optimized performance. The application includes product listing, filtering, and detailed views.

---

## Features

- **Next.js**: Server-side rendering for fast loading.
- **Responsive Design**: Optimized for mobile and desktop using Tailwind CSS.
- **Product Listing**: Fetches and displays products with filtering and search.
- **Product Details**: Detailed product view with modal.
- **Loading States**: Interactive loaders for better UX.
- **Error Handling**: Snackbar notifications for API errors.
- **Image Optimization**: Lazy loading and placeholders for images.

---

## Prerequisites

- **Node.js**: Version 18+
- **Yarn**: Version 1.22+
- **Backend Server**: Ensure the Rentify backend is running.

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ghostkeeper95/rentify.git
   cd packages/frontend
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Run the development server**:

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to see the app.

---

## Scripts

| Script       | Description                            |
| ------------ | -------------------------------------- |
| `yarn dev`   | Start the development server           |
| `yarn build` | Build the production-ready application |
| `yarn start` | Start the production server            |
| `yarn lint`  | Run ESLint to check code quality       |

---

## Deployment

The easiest way to deploy this app is using **Vercel**.

1. Install Vercel CLI:

   ```bash
   yarn global add vercel
   ```

2. Deploy the app:
   ```bash
   vercel
   ```

For manual deployment instructions, refer to the [Next.js Deployment Guide](https://nextjs.org/docs/deployment).

---

## License

This project is licensed under the MIT License.
