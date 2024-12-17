import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
})

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.code === 'ECONNABORTED') {
      return Promise.reject(new Error('Request timeout, please try again later.'))
    }
    const message = error.response?.data?.message || 'An unknown error occurred'
    return Promise.reject(new Error(message))
  },
)

export default apiClient
