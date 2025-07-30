/**
 * USE PRODUCTS HOOK
 * =================
 *
 * A custom React hook for fetching and managing automotive product data with
 * advanced filtering, sorting, and pagination capabilities.
 *
 * FEATURES:
 * - Automatic data fetching with React Query
 * - Built-in pagination management
 * - Multiple filter options (brand, category, price, etc.)
 * - Search functionality
 * - Optimistic updates with keepPreviousData
 * - Loading state management
 *
 * USAGE EXAMPLE:
 * ```typescript
 * const { products, productsAreLoading, setPage, page } = useProducts({
 *   pageSize: 12,
 *   sort: 'price_asc',
 *   brand: ['BMW', 'Audi'],
 *   minPrice: 20000,
 *   maxPrice: 80000
 * });
 * ```
 *
 * DEPENDENCIES:
 * - @tanstack/react-query: For data fetching and caching
 * - Custom usePagination hook: For pagination state management
 * - Product service: For API communication
 */

import { useEffect } from "react";
import usePagination from "@/hooks/use-pagination";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ProductType } from "../types/products";
import { PaginationType } from "@/types";
import { CriteriaType } from "../types";
import { retrieveProductsFromServerSide } from "../services/products/products-extraction";

// ===== HOOK PARAMETERS INTERFACE =====
/**
 * Params - Configuration interface for the useProducts hook
 *
 * Defines all possible filtering, sorting, and pagination options
 * that can be passed to customize the product data fetching behavior.
 */
interface Params {
  // ===== PAGINATION CONFIGURATION =====
  pageSize: number; // Number of products per page (required)

  // ===== SORTING OPTIONS =====
  sort?: CriteriaType; // Sort criteria (price_asc, year_desc, etc.)

  // ===== SPECIAL FILTERS =====
  similarProductSlug?: string; // Find products similar to a specific item

  // ===== CATEGORIZATION FILTERS =====
  category?: string[]; // Filter by product categories (SUV, Sedan, etc.)
  subCategory?: string[]; // Filter by subcategories (Luxury SUV, etc.)
  brand?: string[]; // Filter by vehicle brands (BMW, Audi, etc.)

  // ===== PRICE RANGE FILTERS =====
  minPrice?: number; // Minimum price threshold in euros
  maxPrice?: number; // Maximum price threshold in euros

  // ===== SEARCH FUNCTIONALITY =====
  search?: string; // Text search across product names/descriptions

  // ===== ADVANCED CACHING =====
  queryKeys?: (string | number)[]; // Additional keys for React Query cache invalidation
}

// ===== MAIN HOOK FUNCTION =====
/**
 * useProducts - Custom hook for automotive product data management
 *
 * This hook combines data fetching, filtering, pagination, and state management
 * into a single, reusable interface for product listing components.
 *
 * @param params - Configuration object with filtering and pagination options
 * @returns Object with products data, loading state, and pagination controls
 */
export default function useProducts({
  pageSize,
  sort,
  similarProductSlug,
  category,
  subCategory,
  brand,
  minPrice,
  maxPrice,
  search,
  queryKeys = [], // Default to empty array if not provided
}: Params) {
  // ===== PAGINATION STATE MANAGEMENT =====
  // Uses custom pagination hook to manage page state and page count
  const { page, setPage, pagesNumber, setPagesNumber } = usePagination();

  // ===== REACT QUERY DATA FETCHING =====
  /**
   * React Query Configuration
   *
   * - queryKey: Array of dependencies that trigger refetching when changed
   * - queryFn: Function that performs the actual API call
   * - placeholderData: Keeps previous data visible while fetching new data
   *
   * CACHE STRATEGY:
   * - Data is cached based on all filter parameters
   * - keepPreviousData prevents UI flickering during transitions
   * - Automatic background refetching when data becomes stale
   */
  const { data, isLoading } = useQuery<{
    products: ProductType[]; // Array of automotive products
    pagination: PaginationType; // Pagination metadata
  } | null>({
    // QUERY KEY - All parameters that affect the data
    // React Query will refetch when any of these values change
    queryKey: [
      "products", // Base identifier for product queries
      page, // Current page number
      sort, // Sorting criteria
      similarProductSlug, // Similar products filter
      category, // Category filters
      subCategory, // Subcategory filters
      brand, // Brand filters
      minPrice, // Price range filters
      maxPrice,
      search, // Search query
      ...queryKeys, // Additional custom cache keys
    ],

    // QUERY FUNCTION - API call with all filter parameters
    queryFn: () =>
      retrieveProductsFromServerSide({
        page, // Current page for pagination
        pageSize, // Items per page
        category, // Filter parameters
        subCategory,
        brand,
        minPrice,
        maxPrice,
        sort, // Sorting preference
        search, // Search query
      }),

    // OPTIMIZATION SETTINGS
    placeholderData: keepPreviousData, // Prevents loading flicker
  });

  // ===== PAGINATION SYNC EFFECT =====
  /**
   * Synchronizes pagination state with API response
   *
   * When new data is received, update the total page count based on
   * the pagination information returned from the API.
   */
  useEffect(() => {
    setPagesNumber(
      data?.pagination?.totalPages ? data?.pagination?.totalPages : 1
    );
  }, [data, setPagesNumber]);

  // ===== RETURN INTERFACE =====
  /**
   * Hook Return Values
   *
   * Provides a clean interface for components to access:
   * - Product data and loading state
   * - Pagination controls and current state
   */
  return {
    // ===== DATA PROPERTIES =====
    products: data?.products, // Array of product objects (undefined while loading)
    productsAreLoading: isLoading, // Boolean loading indicator

    // ===== PAGINATION CONTROLS =====
    setPage, // Function to change current page
    page, // Current page number
    pagesNumber, // Total number of available pages
  };
}

// ===== USAGE PATTERNS =====
/**
 * Common usage patterns for this hook:
 *
 * 1. BASIC PRODUCT LISTING:
 * ```typescript
 * const { products, productsAreLoading } = useProducts({
 *   pageSize: 12
 * });
 * ```
 *
 * 2. FILTERED PRODUCT SEARCH:
 * ```typescript
 * const { products, setPage } = useProducts({
 *   pageSize: 8,
 *   brand: ['BMW', 'Mercedes'],
 *   minPrice: 30000,
 *   sort: 'price_asc'
 * });
 * ```
 *
 * 3. CATEGORY-SPECIFIC LISTING:
 * ```typescript
 * const { products, page, pagesNumber } = useProducts({
 *   pageSize: 16,
 *   category: ['SUV'],
 *   subCategory: ['Luxury SUV', 'Compact SUV']
 * });
 * ```
 *
 * 4. SEARCH RESULTS:
 * ```typescript
 * const { products, productsAreLoading } = useProducts({
 *   pageSize: 10,
 *   search: 'BMW X5 2023'
 * });
 * ```
 */
