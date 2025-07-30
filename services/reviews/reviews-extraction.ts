/**
 * REVIEW EXTRACTION SERVICE
 * =========================
 *
 * This service module handles all API interactions for vehicle review data.
 * It provides functions to fetch reviews for specific cars and submit new reviews.
 *
 * MAIN FUNCTIONS:
 * 1. getCarReviews - Fetch reviews for a specific car
 * 2. createCarReview - Submit a new review for a car
 *
 * FEATURES:
 * - Fetch paginated reviews with limit control
 * - Submit new reviews with validation
 * - Type-safe API responses
 * - Error handling and logging
 * - Automatic data transformation
 *
 * API INTEGRATION:
 * - GET /cars/{id}/reviews?limit={limit} - Fetch car reviews
 * - POST /cars/{id}/reviews - Create new review
 *
 * MODIFICATION GUIDELINES:
 * - Add review filtering options (by rating, date, etc.)
 * - Implement review editing and deletion
 * - Add review helpful/unhelpful voting
 * - Include review moderation features
 */

import { GET, POST } from "@/lib/http-methods";
import { ReviewType, CreateReviewType, ReviewsResponse } from "@/types";

// ===== FETCH CAR REVIEWS =====
/**
 * getCarReviews - Fetch reviews for a specific vehicle
 *
 * Retrieves paginated reviews for a given car ID with optional limit control.
 * Returns reviews sorted by creation date (newest first by default).
 *
 * @param carId - The ID of the car to fetch reviews for
 * @param limit - Maximum number of reviews to fetch (default: 10)
 * @returns Promise with reviews data and metadata
 *
 * USAGE EXAMPLE:
 * ```typescript
 * const reviews = await getCarReviews(123, 10);
 * console.log(`Found ${reviews.total} reviews, avg rating: ${reviews.averageRating}`);
 * ```
 */
export async function getCarReviews(
  carId: string | number,
  limit: number = 10
): Promise<ReviewsResponse> {
  try {
    console.log(`📝 Fetching reviews for car ID: ${carId}, limit: ${limit}`);

    // ===== API REQUEST =====
    // Construct endpoint with query parameters
    const endpoint = `/cars/${carId}/reviews?limit=${limit}`;
    const response = await GET(endpoint, {});

    console.log("✅ Reviews fetch successful:", response.data);

    // ===== DATA TRANSFORMATION =====
    // Transform API response to match our interface
    const reviewsData = response.data;

    return {
      reviews: reviewsData.reviews || [],
      total: reviewsData.total || 0,
      averageRating: reviewsData.averageRating || 0,
    } as ReviewsResponse;
  } catch (error) {
    console.error("❌ Error fetching reviews:", error);
    console.error("📍 Failed for car ID:", carId);

    // Return empty response on error to prevent app crashes
    return {
      reviews: [],
      total: 0,
      averageRating: 0,
    };
  }
}

// ===== CREATE NEW REVIEW =====
/**
 * createCarReview - Submit a new review for a vehicle
 *
 * Posts a new review to the API for a specific car. Validates review data
 * and handles server response with appropriate error handling.
 *
 * @param carId - The ID of the car being reviewed
 * @param reviewData - The review information to submit
 * @returns Promise with the created review data
 *
 * USAGE EXAMPLE:
 * ```typescript
 * const newReview = await createCarReview(123, {
 *   authorName: "Marie Dubois",
 *   rating: 5,
 *   comment: "Excellente voiture, très satisfaite de mon achat!"
 * });
 * ```
 */
export async function createCarReview(
  carId: string | number,
  reviewData: CreateReviewType
): Promise<ReviewType> {
  try {
    console.log(`📝 Creating review for car ID: ${carId}`, reviewData);

    // ===== INPUT VALIDATION =====
    // Basic client-side validation before API call
    if (!reviewData.authorName.trim()) {
      throw new Error("Le nom de l'auteur est requis");
    }

    if (reviewData.rating < 1 || reviewData.rating > 5) {
      throw new Error("La note doit être entre 1 et 5 étoiles");
    }

    if (!reviewData.comment.trim()) {
      throw new Error("Le commentaire est requis");
    }

    // ===== API REQUEST =====
    // Submit review to API endpoint
    const endpoint = `/cars/${carId}/reviews`;
    const response = await POST(endpoint, {}, reviewData);

    console.log("✅ Review creation successful:", response.data);

    // ===== RETURN CREATED REVIEW =====
    return response.data as ReviewType;
  } catch (error) {
    console.error("❌ Error creating review:", error);
    console.error("📍 Failed for car ID:", carId);
    console.error("📝 Review data:", reviewData);

    // Re-throw error to be handled by calling component
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Échec de la création de l'avis");
  }
}

// ===== FUTURE ENHANCEMENTS =====
/**
 * Additional review-related functions that could be implemented:
 *
 * 1. UPDATE REVIEW:
 * ```typescript
 * export async function updateReview(
 *   reviewId: number,
 *   updates: Partial<CreateReviewType>
 * ): Promise<ReviewType> {
 *   // Implementation for editing existing reviews
 * }
 * ```
 *
 * 2. DELETE REVIEW:
 * ```typescript
 * export async function deleteReview(reviewId: number): Promise<void> {
 *   // Implementation for removing reviews
 * }
 * ```
 *
 * 3. HELPFUL VOTING:
 * ```typescript
 * export async function voteReviewHelpful(
 *   reviewId: number,
 *   isHelpful: boolean
 * ): Promise<void> {
 *   // Implementation for voting on review helpfulness
 * }
 * ```
 *
 * 4. REVIEW FILTERING:
 * ```typescript
 * export async function getFilteredReviews(
 *   carId: number,
 *   filters: {
 *     rating?: number;
 *     sortBy?: 'date' | 'rating' | 'helpful';
 *     order?: 'asc' | 'desc';
 *   }
 * ): Promise<ReviewsResponse> {
 *   // Implementation for advanced review filtering
 * }
 * ```
 *
 * 5. REVIEW STATISTICS:
 * ```typescript
 * export async function getReviewStatistics(carId: number): Promise<{
 *   totalReviews: number;
 *   averageRating: number;
 *   ratingDistribution: { [rating: number]: number };
 * }> {
 *   // Implementation for detailed review analytics
 * }
 * ```
 */
