/**
 * REVIEW SECTION COMPONENT
 * ========================
 *
 * A comprehensive review system component for vehicle detail pages.
 * Displays all existing reviews for a car and provides a form for submitting new reviews.
 *
 * FEATURES:
 * - Display all reviews for a specific car with ratings and comments
 * - Star rating display system
 * - Review submission form with validation
 * - Loading states for fetching and submitting
 * - Error handling for failed operations
 * - Responsive design for mobile and desktop
 * - French localization
 *
 * COMPONENTS INCLUDED:
 * 1. Review statistics (average rating, total count)
 * 2. Individual review cards with star ratings
 * 3. Review submission form with validation
 * 4. Loading and error states
 *
 * USAGE:
 * ```tsx
 * // Show all reviews for a car
 * <ReviewSection carId={carId} />
 *
 * // Limit number of reviews displayed
 * <ReviewSection carId={carId} limit={5} />
 * ```
 *
 * STYLING:
 * - Consistent with AutoCar'z brand colors
 * - Gold star ratings (#FFD700)
 * - Navy blue headings (#0D1B2A)
 * - Clean white cards with subtle shadows
 */

"use client";

import React, { useState } from "react";
import useReviews from "@/hooks/use-reviews";
import { CreateReviewType } from "@/types";

// ===== COMPONENT PROPS INTERFACE =====
interface ReviewSectionProps {
  carId: string | number; // ID of the car to display reviews for
  limit?: number; // Optional limit for number of reviews to display (default: all)
}

// ===== STAR RATING COMPONENT =====
/**
 * StarRating - Displays star rating visually
 *
 * @param rating - Number from 0-5 representing the rating
 * @param size - Size class for the stars (default: "w-5 h-5")
 */
const StarRating: React.FC<{ rating: number; size?: string }> = ({
  rating,
  size = "w-5 h-5",
}) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`${size} ${
            star <= rating ? "text-[#FFD700]" : "text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

// ===== INTERACTIVE STAR RATING FOR FORM =====
/**
 * InteractiveStarRating - Clickable star rating for form input
 *
 * @param rating - Current rating value
 * @param onRatingChange - Callback when rating changes
 */
const InteractiveStarRating: React.FC<{
  rating: number;
  onRatingChange: (rating: number) => void;
}> = ({ rating, onRatingChange }) => {
  const [hoveredRating, setHoveredRating] = useState(0);

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => onRatingChange(star)}
          onMouseEnter={() => setHoveredRating(star)}
          onMouseLeave={() => setHoveredRating(0)}
          className="w-8 h-8 transition-colors hover:scale-110"
        >
          <svg
            className={`w-full h-full ${
              star <= (hoveredRating || rating)
                ? "text-[#FFD700]"
                : "text-gray-300"
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </button>
      ))}
    </div>
  );
};

// ===== MAIN REVIEW SECTION COMPONENT =====
const ReviewSection: React.FC<ReviewSectionProps> = ({ carId, limit }) => {
  // ===== HOOKS AND STATE =====
  const {
    reviews,
    totalReviews,
    averageRating,
    isLoading,
    isSubmitting,
    submitReview,
    submitError,
    isSubmitSuccess,
    resetSubmitState,
  } = useReviews({ carId, limit });

  // ===== FORM STATE =====
  const [formData, setFormData] = useState<CreateReviewType>({
    email: "",
    score: 0,
    comment: "",
  });
  const [showForm, setShowForm] = useState(false);
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  // ===== FORM VALIDATION =====
  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {};

    if (!formData.email.trim()) {
      errors.email = "L'email est requis";
    } else {
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        errors.email = "Veuillez saisir un email valide";
      }
    }

    if (formData.score === 0) {
      errors.score = "Veuillez sélectionner une note";
    }

    if (!formData.comment.trim()) {
      errors.comment = "Le commentaire est requis";
    } else if (formData.comment.trim().length < 10) {
      errors.comment = "Le commentaire doit contenir au moins 10 caractères";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // ===== FORM SUBMISSION HANDLER =====
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await submitReview(formData);

      // Reset form on success
      setFormData({
        email: "",
        score: 0,
        comment: "",
      });
      setFormErrors({});
      setShowForm(false);
    } catch (error) {
      console.error("Failed to submit review:", error);
    }
  };

  // ===== RESET FORM HANDLER =====
  const handleCancelForm = () => {
    setFormData({
      email: "",
      score: 0,
      comment: "",
    });
    setFormErrors({});
    setShowForm(false);
    resetSubmitState();
  };

  // ===== COMPONENT RENDER =====
  return (
    <div className="mt-8 bg-white rounded-3xl shadow-lg p-8">
      {/* ===== SECTION HEADER ===== */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-[#0D1B2A]">Avis clients</h2>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-[#FFD700] hover:bg-[#e6c200] text-[#0D1B2A] px-4 py-2 rounded-lg font-semibold transition-colors"
        >
          {showForm ? "Annuler" : "Écrire un avis"}
        </button>
      </div>

      {/* ===== REVIEW STATISTICS ===== */}
      {totalReviews > 0 && (
        <div className="mb-6 p-4 bg-[#F8F8F5] rounded-lg">
          <div className="flex items-center space-x-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#0D1B2A]">
                {averageRating.toFixed(1)}
              </div>
              <StarRating rating={Math.round(averageRating)} />
            </div>
            <div className="flex-1">
              <p className="text-[#71797E]">
                Basé sur {totalReviews} avis client{totalReviews > 1 ? "s" : ""}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ===== REVIEW FORM ===== */}
      {showForm && (
        <div className="mb-8 p-6 border border-[#E5E5E5] rounded-lg">
          <h3 className="text-xl font-semibold text-[#0D1B2A] mb-4">
            Votre avis
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* EMAIL INPUT */}
            <div>
              <label className="block text-sm font-medium text-[#0D1B2A] mb-2">
                Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#FFD700] ${
                  formErrors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="votre.email@exemple.com"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
              )}
            </div>

            {/* RATING INPUT */}
            <div>
              <label className="block text-sm font-medium text-[#0D1B2A] mb-2">
                Note *
              </label>
              <InteractiveStarRating
                rating={formData.score}
                onRatingChange={(score) => setFormData({ ...formData, score })}
              />
              {formErrors.score && (
                <p className="text-red-500 text-sm mt-1">{formErrors.score}</p>
              )}
            </div>

            {/* COMMENT INPUT */}
            <div>
              <label className="block text-sm font-medium text-black mb-2">
                Commentaire *
              </label>
              <textarea
                value={formData.comment}
                onChange={(e) =>
                  setFormData({ ...formData, comment: e.target.value })
                }
                rows={4}
                className={`w-full px-3 py-2 border rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#FFD700] ${
                  formErrors.comment ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Partagez votre expérience avec ce véhicule..."
              />
              {formErrors.comment && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.comment}
                </p>
              )}
            </div>

            {/* SUBMIT ERROR */}
            {/* Displays API errors including "already reviewed" message */}
            {submitError && (
              <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {submitError.message ||
                  "Une erreur est survenue lors de l'envoi de votre avis"}
              </div>
            )}

            {/* FORM BUTTONS */}
            <div className="flex space-x-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#FFD700] hover:bg-[#e6c200] disabled:bg-gray-300 text-[#0D1B2A] px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                {isSubmitting ? "Envoi en cours..." : "Publier l'avis"}
              </button>
              <button
                type="button"
                onClick={handleCancelForm}
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-2 rounded-lg font-semibold transition-colors"
              >
                Annuler
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ===== SUCCESS MESSAGE ===== */}
      {isSubmitSuccess && !showForm && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Merci ! Votre avis a été publié avec succès.
        </div>
      )}

      {/* ===== LOADING STATE ===== */}
      {isLoading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#FFD700] mx-auto mb-4"></div>
          <p className="text-[#71797E]">Chargement des avis...</p>
        </div>
      )}

      {/* ===== REVIEWS LIST ===== */}
      {!isLoading && reviews.length > 0 && (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-4 border border-[#E5E5E5] rounded-lg hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-[#0D1B2A]">
                    {review.email}
                  </h4>
                  <StarRating rating={review.score} size="w-4 h-4" />
                </div>
              </div>
              <p className="text-black leading-relaxed">{review.comment}</p>
            </div>
          ))}
        </div>
      )}

      {/* ===== EMPTY STATE ===== */}
      {!isLoading && reviews.length === 0 && (
        <div className="text-center py-8">
          <p className="text-[#71797E] mb-4">
            Aucun avis pour ce véhicule pour le moment.
          </p>
          <p className="text-sm text-[#71797E]">
            Soyez le premier à partager votre expérience !
          </p>
        </div>
      )}
    </div>
  );
};

export default ReviewSection;
