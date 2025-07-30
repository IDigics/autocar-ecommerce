/**
 * SHARED TYPE DEFINITIONS
 * =======================
 *
 * This file contains common TypeScript interfaces and types used throughout
 * the AutoCar'z application. These provide type safety and IntelliSense support.
 *
 * CATEGORIES:
 * 1. Pagination types - For handling paginated data
 * 2. Sorting criteria - For product listing sort options
 *
 * MODIFICATION GUIDELINES:
 * - Add new shared types that are used across multiple components
 * - Keep specific types in their respective files (e.g., products.ts)
 * - Use descriptive names and add JSDoc comments for complex types
 */

// ===== PAGINATION INTERFACE =====
/**
 * PaginationType - Standard pagination information
 *
 * Used by components that display paginated data (product lists, search results, etc.)
 * Provides all necessary information for pagination controls.
 *
 * USAGE EXAMPLE:
 * ```typescript
 * const pagination: PaginationType = {
 *   currentPage: 1,
 *   totalPages: 10,
 *   totalItems: 95,
 *   itemsPerPage: 10,
 *   hasNextPage: true,
 *   hasPreviousPage: false
 * };
 * ```
 */
export interface PaginationType {
  currentPage: number; // Current active page (1-based indexing)
  totalPages: number; // Total number of pages available
  totalItems: number; // Total number of items across all pages
  itemsPerPage: number; // Number of items displayed per page
  hasNextPage: boolean; // Whether there's a next page available
  hasPreviousPage: boolean; // Whether there's a previous page available
}

// ===== SORTING CRITERIA TYPE =====
/**
 * CriteriaType - Available sorting options for product listings
 *
 * Defines all possible ways to sort product data. Used in dropdowns,
 * URL parameters, and API calls for consistent sorting behavior.
 *
 * NAMING CONVENTION: [field]_[direction]
 * - asc = ascending (A-Z, 0-9, oldest-newest)
 * - desc = descending (Z-A, 9-0, newest-oldest)
 *
 * USAGE EXAMPLE:
 * ```typescript
 * const sortBy: CriteriaType = "price_asc"; // Sort by price low to high
 * ```
 */
export type CriteriaType =
  | "id_asc" // Sort by ID (ascending) - Default/chronological order
  | "price_asc" // Sort by price (low to high) - Budget-friendly first
  | "price_desc" // Sort by price (high to low) - Premium first
  | "year_asc" // Sort by year (oldest first) - Classic cars first
  | "year_desc" // Sort by year (newest first) - Latest models first
  | "review_asc" // Sort by review score (lowest first) - Rarely used
  | "review_desc"; // Sort by review score (highest first) - Best rated first

// ===== ADDITIONAL SHARED TYPES CAN BE ADDED HERE =====
/**
 * Add more shared types as the application grows:
 *
 * export type LoadingState = 'idle' | 'loading' | 'success' | 'error';
 *
 * export interface ApiResponse<T> {
 *   data: T;
 *   message: string;
 *   success: boolean;
 * }
 *
 * export type Currency = 'EUR' | 'USD' | 'GBP';
 *
 * export interface ContactInfo {
 *   email: string;
 *   phone: string;
 *   address: string;
 * }
 */

// ===== REVIEW TYPES =====
/**
 * ReviewType - Interface for car review data
 *
 * Represents a customer review for a specific vehicle with rating and comment.
 * Used for displaying existing reviews retrieved from the backend.
 *
 * BACKEND RESPONSE EXAMPLE:
 * ```json
 * {
 *   "id": 8,
 *   "email": "user@idigics.com",
 *   "score": 3,
 *   "comment": "noice"
 * }
 * ```
 *
 * USAGE EXAMPLE:
 * ```typescript
 * const review: ReviewType = {
 *   id: 8,
 *   email: "user@idigics.com",
 *   score: 3,
 *   comment: "noice"
 * };
 * ```
 */
export interface ReviewType {
  id: number; // Unique review identifier
  email: string; // Email of the person who wrote the review
  score: number; // Rating from 1 to 5 stars
  comment: string; // Written review content
}

/**
 * CreateReviewType - Interface for creating new reviews
 *
 * Used when submitting new reviews. Excludes auto-generated fields
 * like id and createdAt that are handled by the server.
 *
 * USAGE EXAMPLE:
 * ```typescript
 * const newReview: CreateReviewType = {
 *   email: "marie.martin@example.com",
 *   score: 4,
 *   comment: "Très bonne voiture, livraison rapide"
 * };
 * ```
 */
export interface CreateReviewType {
  email: string; // Email of the reviewer
  score: number; // Rating from 1 to 5 stars
  comment: string; // Review comment
}

/**
 * ReviewsResponse - API response format for review listings
 *
 * Represents the structure returned by GET /cars/{id}/reviews endpoint.
 * Includes the reviews array and any metadata about the response.
 */
export interface ReviewsResponse {
  reviews: ReviewType[]; // Array of review objects
  total: number; // Total number of reviews for this car
  averageRating: number; // Average rating across all reviews
}
