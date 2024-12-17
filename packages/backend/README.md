# Rentify Backend

## Overview

The Rentify backend provides a RESTful API to manage products, with SQLite for database management and AWS S3 for image storage.

---

## Features

- RESTful API with product management
- SQLite database with Sequelize ORM
- AWS S3 and CloudFront for image hosting
- In-memory caching
- Request validation with Zod
- Gzip compression for responses

---

## Prerequisites

- Node.js v18+
- Yarn v1.22+
- AWS Account for S3 and CloudFront (optional)

---

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ghostkeeper95/rentify.git
   cd packages/backend
   ```

2. **Install dependencies**:

   ```bash
   yarn install
   ```

3. **Set up environment variables**:

   ```bash
   cp .env.sample .env
   ```

4. **Seed the database**:

   ```bash
   yarn seed
   ```

5. **Run the development server**:

   ```bash
   yarn dev
   ```

---

## Scripts

| Script               | Description                    |
| -------------------- | ------------------------------ |
| `yarn dev`           | Start the development server   |
| `yarn build`         | Build the production code      |
| `yarn start`         | Run the production server      |
| `yarn seed`          | Seed the database              |
| `yarn upload-images` | Upload images to S3 (optional) |

---

## Additional Resources

- [API Documentation](./API.md)

---

## License

This project is licensed under the MIT License.
