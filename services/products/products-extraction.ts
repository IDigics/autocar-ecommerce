/**
 * PRODUCT EXTRACTION SERVICE
 * ==========================
 *
 * This service module handles all API interactions for automotive product data.
 * It provides functions to fetch product lists and individual product details
 * with comprehensive filtering, sorting, and pagination capabilities.
 *
 * MAIN FUNCTIONS:
 * 1. retrieveProductsFromServerSide - Fetch filtered product lists
 * 2. retrieveProductByIdFromServerSide - Fetch single product details
 *
 * FEATURES:
 * - Advanced filtering (brand, category, price range, etc.)
 * - Flexible sorting options
 * - Pagination support
 * - Search functionality
 * - Type-safe API responses
 * - Error handling and logging
 *
 * API INTEGRATION:
 * - Connects to /cars endpoint for product listings
 * - Connects to /cars/{id} endpoint for product details
 * - Uses centralized HTTP client for consistent request handling
 *
 * DATA TRANSFORMATION:
 * - Converts API responses to internal product types
 * - Handles different response formats (list vs detail)
 * - Maintains type safety throughout the transformation process
 */

import { GET } from "@/lib/http-methods";
import { PaginationType } from "@/types";
import {
  ProductInResponseType,
  ProductInListResponseType,
} from "../../types/products";
import {
  castToProductType,
  castToProductTypeFromList,
} from "../../utils/types-casting/products";
import { CriteriaType } from "../../types";

// ===== FILTER PARAMETERS INTERFACE =====
/**
 * FilterParams - Comprehensive filtering options for product queries
 *
 * This interface defines all possible parameters that can be used to filter
 * and customize product data retrieval from the API.
 *
 * PARAMETER CATEGORIES:
 * - Pagination: page, pageSize
 * - Filtering: brand, category, price range, availability
 * - Sorting: sort criteria
 * - Search: text-based search
 * - Localization: currency preferences
 */
export interface FilterParams {
  // ===== PAGINATION PARAMETERS =====
  page: number; // Current page number (1-based)
  pageSize: number; // Number of items per page

  // ===== FILTER ARRAYS =====
  // Arrays allow multiple selections (e.g., ['BMW', 'Audi'])
  brand?: string[]; // Filter by vehicle brands
  category?: string[]; // Filter by categories (SUV, Sedan, etc.)
  subCategory?: string[]; // Filter by subcategories (Luxury SUV, etc.)

  // ===== PRICE RANGE FILTERS =====
  minPrice?: number; // Minimum price threshold
  maxPrice?: number; // Maximum price threshold
  currency?: string; // Currency preference (EUR, USD, etc.)

  // ===== AVAILABILITY FILTER =====
  availability?: boolean; // Show only available vehicles (default: true)

  // ===== SORTING OPTIONS =====
  sort?: CriteriaType; // Sort criteria (price_asc, year_desc, etc.)

  // ===== SEARCH FUNCTIONALITY =====
  search?: string; // Text search across product attributes
}

// ===== PRODUCT LIST RETRIEVAL FUNCTION =====
/**
 * retrieveProductsFromServerSide - Fetch filtered automotive product listings
 *
 * This function constructs a complex API query with multiple filter parameters
 * and returns a paginated list of automotive products matching the criteria.
 *
 * PROCESS:
 * 1. Build query string from filter parameters
 * 2. Make API request to /cars endpoint
 * 3. Transform API response to internal types
 * 4. Return products with pagination metadata
 *
 * @param filterParams - Object containing all filter and pagination options
 * @returns Promise with products array and pagination information
 *
 * USAGE EXAMPLE:
 * ```typescript
 * const result = await retrieveProductsFromServerSide({
 *   page: 1,
 *   pageSize: 12,
 *   brand: ['BMW', 'Mercedes'],
 *   minPrice: 30000,
 *   sort: 'price_asc'
 * });
 * ```
 */
export async function retrieveProductsFromServerSide({
  page,
  pageSize,
  brand,
  category,
  subCategory,
  minPrice,
  maxPrice,
  currency,
  availability = true, // Default to showing only available vehicles
  sort,
  search,
}: FilterParams) {
  // ===== QUERY PARAMETER CONSTRUCTION =====
  /**
   * Build URL parameters array from filter options
   *
   * Only includes parameters that have values to keep the URL clean
   * and avoid unnecessary API processing.
   */
  const params = [];

  // BRAND FILTER - Multiple brands separated by commas
  if (brand && brand.length > 0) {
    params.push(`brand=${brand.join(",")}`);
  }

  // CATEGORY FILTER - Multiple categories separated by commas
  if (category && category.length > 0) {
    params.push(`category=${category.join(",")}`);
  }

  // SUBCATEGORY FILTER - Multiple subcategories separated by commas
  if (subCategory && subCategory.length > 0) {
    params.push(`subCategory=${subCategory.join(",")}`);
  }

  // PRICE RANGE FILTERS - Only add if values are defined
  if (minPrice !== undefined) {
    params.push(`minPrice=${minPrice}`);
  }
  if (maxPrice !== undefined) {
    params.push(`maxPrice=${maxPrice}`);
  }

  // CURRENCY PREFERENCE - Optional currency specification
  if (currency) {
    params.push(`currency=${currency}`);
  }

  // AVAILABILITY FILTER - Always include for consistent results
  params.push(`isStock=${availability}`);

  // SORTING CRITERIA - Optional sort order
  if (sort) {
    params.push(`sort=${sort}`);
  }

  // SEARCH QUERY - Text-based search across product attributes
  if (search) {
    params.push(`search=${search}`);
  }

  // ===== API ENDPOINT CONSTRUCTION =====
  /**
   * Build complete API endpoint with pagination and filters
   *
   * Format: /cars?page=1&pageSize=12&brand=BMW,Audi&minPrice=30000&sort=price_asc
   */
  const filterEndPoint = `/cars?page=${page}&pageSize=${pageSize}&${params.join(
    "&"
  )}`;

  // ===== API REQUEST AND RESPONSE HANDLING =====
  try {
    // Make GET request to cars endpoint with constructed parameters
    const res = await GET(filterEndPoint, {});

    // ===== DATA TRANSFORMATION =====
    /**
     * Transform API response to internal types
     *
     * - Extract pagination metadata as-is
     * - Transform each car object from list format to internal format
     * - Ensure type safety throughout the process
     */
    return {
      pagination: res.data.pagination as PaginationType,
      products: (res.data.cars as ProductInListResponseType[]).map(
        (productInResponse) => castToProductTypeFromList(productInResponse)
      ),
    };
  } catch (error) {
    // ===== ERROR HANDLING =====
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
}

// ===== SINGLE PRODUCT RETRIEVAL FUNCTION =====
/**
 * retrieveProductByIdFromServerSide - Fetch detailed information for a specific vehicle
 *
 * This function retrieves comprehensive details for a single automotive product
 * using its unique identifier. Returns full product specifications and images.
 *
 * PROCESS:
 * 1. Make API request to /cars/{id} endpoint
 * 2. Transform detailed API response to internal type
 * 3. Return complete product information
 *
 * @param id - Unique product identifier (string or number)
 * @returns Promise with complete product details
 *
 * USAGE EXAMPLE:
 * ```typescript
 * const product = await retrieveProductByIdFromServerSide(123);
 * console.log(product.brand, product.model, product.price);
 * ```
 */
export async function retrieveProductByIdFromServerSide(id: string | number) {
  try {
    // ===== API REQUEST =====
    // Make GET request to specific car endpoint
    const res = await GET(`/cars/${id}`, {});

    // ===== DATA TRANSFORMATION =====
    /**
     * Transform detailed API response to internal product type
     *
     * Uses castToProductType function to convert from ProductInResponseType
     * (API format) to ProductType (internal format) while preserving all data.
     */
    return castToProductType(res.data as ProductInResponseType);
  } catch (error) {
    // ===== ERROR HANDLING =====
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product details");
  }
}

// ===== FUTURE ENHANCEMENTS =====
/**
 * Additional functions that could be added to this service:
 *
 * 1. RELATED PRODUCTS:
 * ```typescript
 * export async function getRelatedProducts(productId: number, limit = 4) {
 *   // Fetch products similar to the given product
 * }
 * ```
 *
 * 2. PRODUCT RECOMMENDATIONS:
 * ```typescript
 * export async function getRecommendedProducts(userId: string) {
 *   // Fetch personalized product recommendations
 * }
 * ```
 *
 * 3. PRODUCT COMPARISON:
 * ```typescript
 * export async function compareProducts(productIds: number[]) {
 *   // Fetch multiple products for comparison
 * }
 * ```
 *
 * 4. PRICE HISTORY:
 * ```typescript
 * export async function getProductPriceHistory(productId: number) {
 *   // Fetch historical pricing data
 * }
 * ```
 */
