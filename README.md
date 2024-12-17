# Rentify

## Overview

**Rentify** is a modern rental platform designed to manage product listings, filtering, and detailed product views. The project consists of two main parts:

1. **Backend**: RESTful API built with Node.js, Express, and SQLite.
2. **Frontend**: Web application built with Next.js, providing server-side rendering for fast performance.

---

## Repository Structure

```plaintext
rentify/
├── packages/
│   ├── backend/        # Backend service
│   └── frontend/       # Frontend service
├── .gitignore          # Ignored files for version control
├── package.json        # Yarn workspace setup
└── README.md           # Root documentation (you are here)
```

---

## Prerequisites

- **Node.js**: Version 18+
- **Yarn**: Version 1.22+
- **AWS Account**: For S3 and CloudFront (optional for image hosting)

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/ghostkeeper95/rentify.git
cd rentify
```

### 2. Install dependencies

Using Yarn Workspaces to install all dependencies:

```bash
yarn install
```

### 3. Set up Backend

1. Navigate to the backend folder:
   ```bash
   cd packages/backend
   ```
2. Follow the setup instructions in the [Backend README](./packages/backend/README.md).

### 4. Set up Frontend

1. Navigate to the frontend folder:
   ```bash
   cd packages/frontend
   ```
2. Follow the setup instructions in the [Frontend README](./packages/frontend/README.md).

---

## Running the Application

### Backend

To start the backend server:

```bash
cd packages/backend
yarn dev
```

### Frontend

To start the frontend server:

```bash
cd packages/frontend
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to access the frontend.

---

## Key Features

- **Backend**:

  - RESTful API for product management.
  - SQLite database with Sequelize ORM.
  - AWS S3 and CloudFront for image hosting.
  - In-memory caching for optimized performance.

- **Frontend**:
  - Product listing with filtering, sorting, and search.
  - Detailed product views with modals.
  - Optimized performance using Next.js and Tailwind CSS.
  - Error handling and interactive loaders.

---

## Deployment

### Backend

Follow the instructions in the [Backend README](./packages/backend/README.md) to deploy the backend.

### Frontend

Follow the instructions in the [Frontend README](./packages/frontend/README.md) to deploy the frontend using Vercel or other platforms.

---

## Learn More

- [Backend Documentation](./packages/backend/README.md)
- [Frontend Documentation](./packages/frontend/README.md)
- [API Documentation](./packages/backend/API.md)

---

## License

This project is licensed under the MIT License.
