/**
 * HTTP CLIENT METHODS
 * ==================
 *
 * This module provides a centralized HTTP client for making API requests throughout
 * the AutoCar'z application. Built on top of Axios for reliable HTTP communication.
 *
 * FEATURES:
 * - Centralized base URL configuration
 * - Request timeout management
 * - Consistent headers handling
 * - Support for all standard HTTP methods
 *
 * USAGE EXAMPLE:
 * ```typescript
 * import { GET, POST } from '@/lib/http-methods';
 *
 * // Fetch products
 * const response = await GET('/cars', {});
 *
 * // Create new product
 * const newProduct = await POST('/cars', {}, productData);
 * ```
 *
 * MODIFICATION GUIDELINES:
 * - Update baseURL for different environments (dev, staging, prod)
 * - Add authentication interceptors if needed
 * - Extend timeout for slow endpoints
 * - Add request/response logging for debugging
 */

import axios, { RawAxiosRequestHeaders } from "axios";

// ===== AXIOS INSTANCE CONFIGURATION =====
/**
 * API Client Configuration
 *
 * Creates a pre-configured Axios instance with default settings
 * that will be used by all HTTP method functions below.
 *
 * CONFIGURATION OPTIONS:
 * - baseURL: The root URL for all API requests
 * - timeout: Maximum time to wait for response (prevents hanging requests)
 *
 * ENVIRONMENT SETUP:
 * For production, consider using environment variables:
 * baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
 */
const apiClient = axios.create({
  baseURL: "http://192.168.0.113:3000", // Local development server
  //baseURL: "http://localhost:3000", // Local development server

  timeout: 10000, // 10 seconds timeout

  // ADDITIONAL CONFIGURATION OPTIONS:
  // headers: {                      // Default headers for all requests
  //   'Content-Type': 'application/json',
  //   'Accept': 'application/json'
  // },
  // withCredentials: true,          // Include cookies in requests
  // maxRedirects: 5,               // Maximum number of redirects to follow
});

// ===== HTTP GET METHOD =====
/**
 * GET Request Function
 *
 * Performs HTTP GET requests for fetching data from the server.
 *
 * @param uri - API endpoint path (e.g., '/cars', '/cars/123')
 * @param headers - Request headers object
 * @param params - Optional query parameters or axios config
 *
 * USAGE EXAMPLES:
 * ```typescript
 * // Simple GET request
 * const cars = await GET('/cars', {});
 *
 * // GET with query parameters
 * const filteredCars = await GET('/cars', {}, {
 *   params: { brand: 'BMW', maxPrice: 50000 }
 * });
 *
 * // GET with custom headers
 * const userCars = await GET('/user/cars', {
 *   'Authorization': 'Bearer token123'
 * });
 * ```
 */
export function GET(
  uri: string,
  headers: RawAxiosRequestHeaders,
  params?: any
) {
  return apiClient.get(uri, { headers: headers, ...params });
}

// ===== HTTP POST METHOD =====
/**
 * POST Request Function
 *
 * Performs HTTP POST requests for creating new resources on the server.
 *
 * @param uri - API endpoint path
 * @param headers - Request headers object
 * @param data - Request body data to send
 * @param params - Optional additional axios configuration
 *
 * USAGE EXAMPLES:
 * ```typescript
 * // Create new car listing
 * const newCar = await POST('/cars', {}, {
 *   brand: 'BMW',
 *   model: 'X5',
 *   price: 45000
 * });
 *
 * // Submit contact form
 * const response = await POST('/contact', {}, formData);
 * ```
 */
export function POST(
  uri: string,
  headers: RawAxiosRequestHeaders,
  data: any,
  params?: any
) {
  return apiClient.post(uri, data, { headers, ...params });
}

// ===== HTTP PUT METHOD =====
/**
 * PUT Request Function
 *
 * Performs HTTP PUT requests for completely updating existing resources.
 * PUT is typically used when you want to replace the entire resource.
 *
 * @param uri - API endpoint path
 * @param headers - Request headers object
 * @param data - Complete resource data
 * @param params - Optional additional axios configuration
 *
 * USAGE EXAMPLES:
 * ```typescript
 * // Update entire car record
 * const updatedCar = await PUT('/cars/123', {}, completeCarData);
 *
 * // Replace user profile
 * const profile = await PUT('/user/profile', {}, newProfileData);
 * ```
 */
export function PUT(
  uri: string,
  headers: RawAxiosRequestHeaders,
  data: any,
  params?: any
) {
  return apiClient.put(uri, data, { headers, ...params });
}

// ===== HTTP PATCH METHOD =====
/**
 * PATCH Request Function
 *
 * Performs HTTP PATCH requests for partially updating existing resources.
 * PATCH is used when you only want to update specific fields.
 *
 * @param uri - API endpoint path
 * @param headers - Request headers object
 * @param data - Partial resource data (only fields to update)
 * @param params - Optional additional axios configuration
 *
 * USAGE EXAMPLES:
 * ```typescript
 * // Update only the price of a car
 * const updatedCar = await PATCH('/cars/123', {}, { price: 42000 });
 *
 * // Update user's email only
 * const user = await PATCH('/user/profile', {}, { email: 'new@email.com' });
 * ```
 */
export function PATCH(
  uri: string,
  headers: RawAxiosRequestHeaders,
  data: any,
  params?: any
) {
  return apiClient.patch(uri, data, { headers, ...params });
}

// ===== HTTP DELETE METHOD =====
/**
 * DELETE Request Function
 *
 * Performs HTTP DELETE requests for removing resources from the server.
 *
 * @param uri - API endpoint path
 * @param headers - Request headers object
 * @param params - Optional additional axios configuration
 *
 * USAGE EXAMPLES:
 * ```typescript
 * // Delete a car listing
 * await DELETE('/cars/123', {});
 *
 * // Delete user account with confirmation
 * await DELETE('/user/account', {
 *   'Confirmation-Token': 'abc123'
 * });
 * ```
 */
export function DELETE(
  uri: string,
  headers: RawAxiosRequestHeaders,
  params?: any
) {
  return apiClient.delete(uri, { headers: headers, ...params });
}
