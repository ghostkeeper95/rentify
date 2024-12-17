# Rentify Backend - API Documentation

## Base URL

```
http://localhost:<PORT>
```

---

## Products

### 1. **Get All Products**

**Endpoint:** `GET /products`

**Description:** Retrieve a list of products with optional filters.

**Query Parameters:**
| Parameter | Type | Description | Example |
|--------------|----------|--------------------------------------|------------------|
| `search` | `string` | Search term to filter by product name| `camera` |
| `minPrice` | `number` | Minimum price of products | `10` |
| `maxPrice` | `number` | Maximum price of products | `500` |
| `category` | `string` | Filter products by category | `electronics` |
| `location` | `string` | Filter products by location | `Kyiv` |
| `page` | `number` | Page number for pagination | `1` |
| `limit` | `number` | Number of items per page | `10` |

**Response:**

```json
{
  "status": 200,
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Camera Canon EOS 80D",
      "price": 400,
      "category": "electronics",
      "location": "Kyiv",
      "description": "A high-quality camera for professionals.",
      "image": "https://d27qnjrdtccu3f.cloudfront.net/camera.jpg"
    }
  ]
}
```

**Error Response:**

```json
{
  "status": 400,
  "success": false,
  "message": "Invalid query parameters."
}
```

---

### 2. **Get Product by ID**

**Endpoint:** `GET /products/:id`

**Description:** Retrieve detailed information about a specific product by its ID.

**Path Parameters:**
| Parameter | Type | Description | Example |
|--------------|----------|------------------------------|------------------|
| `id` | `number` | ID of the product | `1` |

**Response:**

```json
{
  "status": 200,
  "success": true,
  "data": {
    "id": 1,
    "name": "Camera Canon EOS 80D",
    "price": 400,
    "category": "electronics",
    "location": "Kyiv",
    "description": "A high-quality camera for professionals.",
    "image": "https://d27qnjrdtccu3f.cloudfront.net/camera.jpg"
  }
}
```

**Error Response:**

```json
{
  "status": 404,
  "success": false,
  "message": "Product not found."
}
```

---

## Error Handling

All error responses follow this standard format:

```json
{
  "status": <error_code>,
  "success": false,
  "message": "Error message"
}
```

| Status Code | Description           |
| ----------- | --------------------- |
| 400         | Bad Request           |
| 404         | Not Found             |
| 500         | Internal Server Error |

---

## Notes

- Ensure the API server is running on the correct `PORT` specified in the `.env` file.
- Use tools like **Postman** or **curl** to test endpoints during development.

For further details, refer to the [main README](./README.md).
