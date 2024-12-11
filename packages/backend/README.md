# Rentify Backend

## Overview

This is the backend service for the Rentify application. It is built using Node.js with Express, Sequelize for database management, and integrates with AWS S3 for storing static files and CloudFront for content delivery.

---

## Features

- **RESTful API**: Provides endpoints for managing products.
- **Database**: SQLite with Sequelize ORM.
- **Image Hosting**: Automatically uploads and serves images from AWS S3 via CloudFront.
- **Caching**: Implements in-memory caching for improved performance.
- **Environment Configuration**: `.env` file support for sensitive keys and configurations.
- **Compression**: Uses gzip compression for faster responses.
- **Validation**: Utilizes `zod` for request validation.

---

## Prerequisites

- **Node.js**: Version 18+
- **Yarn**: Version 1.22+
- **AWS Account**: For S3 and CloudFront setup

---

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ghostkeeper95/rentify.git
   cd packages/backend
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

3. Create a `.env` file:

   ```bash
   cp .env.sample .env
   ```

   Fill in the environment variables in the `.env` file.

4. Upload images to S3 (optional):

   ```bash
   yarn upload-images
   ```

5. Seed the database:
   ```bash
   yarn seed
   ```

---

## Scripts

### Development

- **Start Development Server**:
  ```bash
  yarn dev
  ```

### Production

- **Build**:
  ```bash
  yarn build
  ```
- **Start Production Server**:
  ```bash
  yarn start
  ```

### Linting

- **Run Linter**:
  ```bash
  yarn lint
  ```
- **Fix Linter Errors**:
  ```bash
  yarn lint:fix
  ```

### Utilities

- **Seed Database**:
  ```bash
  yarn seed
  ```
- **Upload Images to S3**:
  ```bash
  yarn upload-images
  ```

---

## API Endpoints

### Base URL

```text
http://localhost:<PORT>
```

### Products

- **GET /products**: Retrieve a list of products with optional filters.

  - Query parameters:
    - `search`: Search term
    - `minPrice`: Minimum price
    - `maxPrice`: Maximum price
    - `category`: Category filter
    - `location`: Location filter
    - `page`: Page number
    - `limit`: Number of items per page

- **GET /products/:id**: Retrieve details of a specific product by its ID.

---

## AWS Integration

### S3 Configuration

Ensure the following environment variables are set in your `.env` file:

```env
AWS_ACCESS_KEY_ID=<your-access-key>
AWS_SECRET_ACCESS_KEY=<your-secret-key>
AWS_REGION=eu-north-1
AWS_BUCKET=rentify-static-files
```

### CloudFront Configuration

Set the CloudFront base URL for serving static images:

```env
BASE_IMAGE_URL=https://d27qnjrdtccu3f.cloudfront.net/
```

---

## Development Notes

- Ensure the `database.sqlite` file is excluded from version control by adding it to `.gitignore`.
- Use the `upload-images` script to automate uploading images to S3.
- Check API responses using tools like Postman or curl.

---

## License

This project is licensed under the MIT License.
