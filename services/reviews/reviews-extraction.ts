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
 * - GET /cars/reviews/{id}?limit={limit} - Fetch car reviews
 * - POST /cars/reviews/{id} - Create new review
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
 * Retrieves all reviews for a given car ID. By default fetches all reviews,
 * but can be limited if needed. Returns reviews sorted by creation date.
 *
 * @param carId - The ID of the car to fetch reviews for
 * @param limit - Maximum number of reviews to fetch (default: 1000 for all)
 * @returns Promise with reviews data and metadata
 *
 * USAGE EXAMPLE:
 * ```typescript
 * // Fetch all reviews for a car
 * const allReviews = await getCarReviews(123);
 *
 * // Fetch limited number of reviews
 * const limitedReviews = await getCarReviews(123, 10);
 * console.log(`Found ${allReviews.total} reviews, avg rating: ${allReviews.averageRating}`);
 * ```
 */
export async function getCarReviews(
  carId: string | number,
  limit: number = 1000
): Promise<ReviewsResponse> {
  try {
    console.log(`📝 Fetching reviews for car ID: ${carId}, limit: ${limit}`);

    // ===== API REQUEST =====
    // Construct endpoint with query parameters
    const endpoint = `/cars/reviews/${carId}?limit=${limit}`;
    const response = await GET(endpoint, {});

    console.log("✅ Reviews fetch successful:", response.data);

    // ===== DATA TRANSFORMATION =====
    // Transform API response to match our interface
    const reviewsData = response.data;

    // Check if the response is an array (direct reviews) or an object with metadata
    if (Array.isArray(reviewsData)) {
      // Direct array response - calculate metadata
      return {
        reviews: reviewsData,
        total: reviewsData.length,
        averageRating:
          reviewsData.length > 0
            ? reviewsData.reduce((sum, review) => sum + review.score, 0) /
              reviewsData.length
            : 0,
      } as ReviewsResponse;
    } else {
      // Object response with metadata
      return {
        reviews: reviewsData.reviews || [],
        total: reviewsData.total || 0,
        averageRating: reviewsData.averageRating || 0,
      } as ReviewsResponse;
    }
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
 * @throws {Error} When email validation fails
 * @throws {Error} When user has already reviewed this car
 * @throws {Error} When score is not between 1-5
 * @throws {Error} When comment is empty
 * @throws {Error} When API request fails
 *
 * USAGE EXAMPLE:
 * ```typescript
 * try {
 *   const newReview = await createCarReview(123, {
 *     email: "marie.dubois@email.com",
 *     score: 5,
 *     comment: "Excellente voiture, très satisfaite de mon achat!"
 *   });
 *   console.log("Review created:", newReview);
 * } catch (error) {
 *   if (error.message.includes("déjà donné votre avis")) {
 *     console.log("User already reviewed this car");
 *   }
 * }
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
    if (!reviewData.email.trim()) {
      throw new Error("L'email est requis");
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(reviewData.email)) {
      throw new Error("Veuillez saisir un email valide");
    }

    if (reviewData.score < 1 || reviewData.score > 5) {
      throw new Error("La note doit être entre 1 et 5 étoiles");
    }

    if (!reviewData.comment.trim()) {
      throw new Error("Le commentaire est requis");
    }

    // ===== API REQUEST =====
    // Submit review to API endpoint
    const endpoint = `/cars/reviews/${carId}`;
    const response = await POST(endpoint, {}, reviewData);

    console.log("✅ Review creation successful:", response.data);

    // ===== RETURN CREATED REVIEW =====
    return response.data as ReviewType;
  } catch (error: any) {
    console.error("❌ Error creating review:", error);
    console.error("📍 Failed for car ID:", carId);
    console.error("📝 Review data:", reviewData);

    // ===== HANDLE SPECIFIC API ERRORS =====
    // Check if user has already reviewed this car
    if (
      error?.response?.status === 400 &&
      error?.response?.data?.message === "You have already reviewed this car."
    ) {
      throw new Error(
        "Vous avez déjà donné votre avis sur ce véhicule. Un seul avis par email est autorisé."
      );
    }

    // Handle other API errors with specific messages
    if (error?.response?.data?.message) {
      throw new Error(error.response.data.message);
    }

    // Re-throw error to be handled by calling component
    if (error instanceof Error) {
      throw error;
    }

    throw new Error("Échec de la création de l'avis");
  }
}
