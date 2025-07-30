/**
 * USE REVIEWS HOOK
 * ================
 *
 * A custom React hook for managing vehicle review data with fetching,
 * creation, and state management capabilities.
 *
 * FEATURES:
 * - Automatic review data fetching with React Query
 * - Submit new reviews with optimistic updates
 * - Loading state management for both fetch and create operations
 * - Error handling for all review operations
 * - Cache invalidation after successful review creation
 * - Type-safe review data management
 *
 * USAGE EXAMPLE:
 * ```typescript
 * const {
 *   reviews,
 *   isLoading,
 *   submitReview,
 *   isSubmitting
 * } = useReviews(carId);
 *
 * const handleReviewSubmit = async (reviewData) => {
 *   await submitReview(reviewData);
 * };
 * ```
 *
 * DEPENDENCIES:
 * - @tanstack/react-query: For data fetching and caching
 * - Review service: For API communication
 * - Custom types: For type safety
 */

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getCarReviews,
  createCarReview,
} from "@/services/reviews/reviews-extraction";
import { CreateReviewType, ReviewsResponse } from "@/types";

// ===== HOOK PARAMETERS INTERFACE =====
/**
 * UseReviewsParams - Configuration interface for the useReviews hook
 *
 * Defines the required and optional parameters for review management.
 */
interface UseReviewsParams {
  carId: string | number; // ID of the car to manage reviews for
  limit?: number; // Maximum number of reviews to fetch (default: 10)
}

// ===== MAIN HOOK FUNCTION =====
/**
 * useReviews - Custom hook for vehicle review management
 *
 * This hook provides a complete interface for fetching, displaying, and
 * creating vehicle reviews with automatic cache management and loading states.
 *
 * @param params - Configuration object with car ID and optional limit
 * @returns Object with review data, loading states, and mutation functions
 */
export default function useReviews({ carId, limit = 10 }: UseReviewsParams) {
  // ===== QUERY CLIENT FOR CACHE MANAGEMENT =====
  const queryClient = useQueryClient();

  // ===== FETCH REVIEWS QUERY =====
  /**
   * React Query for fetching car reviews
   *
   * - Automatically fetches reviews when component mounts
   * - Caches data to prevent unnecessary refetches
   * - Provides loading and error states
   * - Refetches when carId or limit changes
   */
  const {
    data: reviewsData,
    isLoading,
    error: fetchError,
    refetch,
  } = useQuery<ReviewsResponse>({
    queryKey: ["reviews", carId, limit], // Unique cache key
    queryFn: () => getCarReviews(carId, limit), // API call function
    enabled: !!carId, // Only run if carId exists
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes (replaces cacheTime)
    retry: 2, // Retry failed requests twice
  });

  // ===== CREATE REVIEW MUTATION =====
  /**
   * React Query mutation for creating new reviews
   *
   * - Handles review submission with loading states
   * - Automatically invalidates and refetches review cache on success
   * - Provides error handling for failed submissions
   * - Optimistic updates for better UX
   */
  const createReviewMutation = useMutation({
    mutationFn: (reviewData: CreateReviewType) =>
      createCarReview(carId, reviewData),

    // ===== SUCCESS HANDLER =====
    onSuccess: (newReview) => {
      console.log("✅ Review created successfully:", newReview);

      // ===== CACHE INVALIDATION =====
      // Invalidate and refetch reviews to show the new review
      queryClient.invalidateQueries({
        queryKey: ["reviews", carId],
      });

      // ===== OPTIMISTIC UPDATE =====
      // Optionally update cache immediately without waiting for refetch
      queryClient.setQueryData<ReviewsResponse>(
        ["reviews", carId, limit],
        (oldData) => {
          if (!oldData) return oldData;

          return {
            ...oldData,
            reviews: [newReview, ...oldData.reviews],
            total: oldData.total + 1,
            // Recalculate average rating
            averageRating: calculateNewAverage(
              oldData.averageRating,
              oldData.total,
              newReview.rating
            ),
          };
        }
      );
    },

    // ===== ERROR HANDLER =====
    onError: (error) => {
      console.error("❌ Failed to create review:", error);
      // Error will be available in mutation.error for component handling
    },
  });

  // ===== HELPER FUNCTION FOR AVERAGE CALCULATION =====
  /**
   * Calculate new average rating when a review is added optimistically
   */
  const calculateNewAverage = (
    currentAverage: number,
    currentTotal: number,
    newRating: number
  ): number => {
    if (currentTotal === 0) return newRating;

    const totalRating = currentAverage * currentTotal;
    const newTotal = currentTotal + 1;
    const newAverage = (totalRating + newRating) / newTotal;

    return Math.round(newAverage * 10) / 10; // Round to 1 decimal place
  };

  // ===== SUBMISSION WRAPPER FUNCTION =====
  /**
   * Convenient wrapper for submitting reviews
   * Provides a simpler interface for components
   */
  const submitReview = async (reviewData: CreateReviewType) => {
    return createReviewMutation.mutateAsync(reviewData);
  };

  // ===== RETURN INTERFACE =====
  /**
   * Hook Return Values
   *
   * Provides a clean interface for components to access:
   * - Review data and metadata
   * - Loading states for both fetch and create operations
   * - Functions for submitting new reviews
   * - Error states for proper error handling
   */
  return {
    // ===== REVIEW DATA =====
    reviews: reviewsData?.reviews || [], // Array of review objects
    totalReviews: reviewsData?.total || 0, // Total number of reviews
    averageRating: reviewsData?.averageRating || 0, // Average rating score

    // ===== LOADING STATES =====
    isLoading, // Loading reviews
    isSubmitting: createReviewMutation.isPending, // Submitting new review

    // ===== ERROR STATES =====
    fetchError, // Error fetching reviews
    submitError: createReviewMutation.error, // Error creating review

    // ===== ACTIONS =====
    submitReview, // Function to submit new review
    refetchReviews: refetch, // Function to manually refetch reviews

    // ===== SUCCESS STATES =====
    isSubmitSuccess: createReviewMutation.isSuccess, // Review submitted successfully

    // ===== RESET FUNCTIONS =====
    resetSubmitState: createReviewMutation.reset, // Reset submit state
  };
}

// ===== HOOK USAGE PATTERNS =====
/**
 * Common usage patterns for this hook:
 *
 * 1. BASIC REVIEW DISPLAY:
 * ```typescript
 * const { reviews, isLoading, averageRating } = useReviews({ carId: 123 });
 *
 * if (isLoading) return <LoadingSpinner />;
 *
 * return (
 *   <div>
 *     <h3>Average Rating: {averageRating}/5</h3>
 *     {reviews.map(review => <ReviewCard key={review.id} review={review} />)}
 *   </div>
 * );
 * ```
 *
 * 2. REVIEW SUBMISSION WITH ERROR HANDLING:
 * ```typescript
 * const { submitReview, isSubmitting, submitError } = useReviews({ carId: 123 });
 *
 * const handleSubmit = async (formData) => {
 *   try {
 *     await submitReview(formData);
 *     toast.success("Avis ajouté avec succès!");
 *   } catch (error) {
 *     toast.error("Erreur lors de l'ajout de l'avis");
 *   }
 * };
 * ```
 *
 * 3. COMPREHENSIVE REVIEW MANAGEMENT:
 * ```typescript
 * const {
 *   reviews,
 *   totalReviews,
 *   averageRating,
 *   isLoading,
 *   submitReview,
 *   isSubmitting,
 *   isSubmitSuccess,
 *   resetSubmitState
 * } = useReviews({ carId: 123, limit: 20 });
 * ```
 */
