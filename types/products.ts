/**
 * PRODUCT TYPE DEFINITIONS
 * ========================
 *
 * This file contains all TypeScript interfaces and types related to automotive products.
 * These types ensure type safety when working with car/vehicle data throughout the application.
 *
 * TYPE CATEGORIES:
 * 1. ProductType - Internal application product structure
 * 2. ProductInListResponseType - API response for product lists
 * 3. ProductInResponseType - API response for single product details
 *
 * DATA FLOW:
 * API Response → ProductInResponseType → Transformed to → ProductType (internal use)
 *
 * MODIFICATION GUIDELINES:
 * - Update types when API structure changes
 * - Keep internal ProductType flexible for component usage
 * - Add JSDoc comments for complex or automotive-specific fields
 */

// ===== INTERNAL PRODUCT TYPE =====
/**
 * ProductType - Internal application structure for automotive products
 *
 * This is the main interface used throughout the application components.
 * It's designed to be flexible and accommodate data from different API endpoints.
 *
 * USAGE AREAS:
 * - Product listing components
 * - Product detail pages
 * - Shopping cart functionality
 * - Search and filter systems
 */
export interface ProductType {
  // ===== CORE IDENTIFICATION =====
  id: number; // Unique product identifier
  name: string; // Display name for the vehicle
  slug: string; // URL-friendly identifier for routing

  // ===== PRICING INFORMATION =====
  price: number; // Vehicle price (in euros by default)
  currency?: string; // Currency code (EUR, USD, etc.)
  availability?: boolean; // Whether the vehicle is available for purchase

  // ===== VISUAL REPRESENTATION =====
  image?: string; // Main product image URL or filename

  // ===== CATEGORIZATION =====
  brand?: string; // Vehicle manufacturer (Audi, BMW, etc.)
  category?: number; // Primary category ID (SUV, Sedan, etc.)
  subCategory?: number; // Secondary category ID (Luxury SUV, etc.)
  fuelType?: number; // Fuel type ID (Gasoline, Diesel, Electric, etc.)

  // ===== PRODUCT DESCRIPTION =====
  description?: string; // Detailed product description

  // ===== VEHICLE SPECIFICATIONS =====
  // Performance & Engine
  mileage?: number; // Odometer reading in kilometers
  model?: string; // Specific model name (e.g., "A4", "X5")
  gear?: string; // Transmission type (Manual, Automatic)
  offerType?: string; // Sale type (New, Used, Certified Pre-owned)
  horsePower?: number; // Engine power in horsepower
  year?: number; // Manufacturing year
  engineSize?: number; // Engine displacement in liters

  // Physical Attributes
  doors?: number; // Number of doors (2, 4, 5)
  seats?: number; // Seating capacity
  color?: string; // Exterior color

  // History & Condition
  previousOwner?: number; // Number of previous owners

  // Quality Metrics
  averageReviewScore?: number; // Customer review average (0-5 scale)

  // ===== RAW API DATA =====
  // Complex objects from backend (used for detailed views)
  mainImage?: {
    id: number; // Image record ID
    url: string; // Full image URL
    type: string; // Image format/type
  };
}

// ===== API RESPONSE TYPES =====

/**
 * ProductInListResponseType - API response structure for product listings
 *
 * This represents the simplified data structure returned by the /cars list endpoint.
 * Used for product grids, search results, and category pages where full details aren't needed.
 *
 * PERFORMANCE CONSIDERATION:
 * - Lightweight structure for faster loading
 * - Contains only essential information for list displays
 * - Image field contains just filename (not full URL)
 */
export interface ProductInListResponseType {
  id: number; // Unique identifier
  brand: string; // Manufacturer name (string, not object)
  model: string; // Model name
  fuelType: string; // Fuel type name (string, not object)
  offerType: string; // Offer type (New/Used/etc.)
  price: number; // Vehicle price
  year: number; // Manufacturing year
  color: string; // Vehicle color
  rating: number; // Review rating
  image: string; // Image filename only
}

/**
 * ProductInResponseType - API response structure for single product details
 *
 * This represents the complete data structure returned by the /cars/{id} endpoint.
 * Contains full vehicle specifications and nested objects for detailed information.
 *
 * NESTED OBJECTS:
 * - brand: Complete brand information with ID and name
 * - fuelType: Fuel type details with ID and type string
 * - category/subCategory: Categorization with IDs and names
 * - mainImage: Complete image object with metadata
 * - secondaryImages: Array of additional vehicle photos
 *
 * USAGE:
 * - Product detail pages
 * - Vehicle comparison features
 * - Full specification displays
 */
export interface ProductInResponseType {
  // ===== CORE INFORMATION =====
  id: number; // Unique identifier

  // ===== VEHICLE SPECIFICATIONS =====
  mileage: number; // Odometer reading
  model: string; // Model name
  gear: string; // Transmission type
  offerType: string; // Sale offer type
  price: number; // Vehicle price
  horsePower: number; // Engine horsepower
  year: number; // Manufacturing year
  engineSize: number; // Engine displacement
  doors: number; // Number of doors
  seats: number; // Seating capacity
  previousOwner: number; // Previous owner count
  color: string; // Vehicle color
  averageReviewScore: number; // Customer rating average

  // ===== NESTED BRAND INFORMATION =====
  brand: {
    id: number; // Brand ID for filtering/categorization
    name: string; // Brand display name
  };

  // ===== NESTED FUEL TYPE INFORMATION =====
  fuelType: {
    id: number; // Fuel type ID for filtering
    type: string; // Fuel type display name
  };

  // ===== NESTED CATEGORY INFORMATION =====
  category: {
    id: number; // Category ID for navigation
    name: string; // Category display name
  };

  // ===== NESTED SUBCATEGORY INFORMATION =====
  subCategory: {
    id: number; // Subcategory ID for filtering
    name: string; // Subcategory display name
  };

  // ===== IMAGE INFORMATION =====
  mainImage: {
    id: number; // Image record ID
    url: string; // Full image URL path
    type: string; // Image format/MIME type
  };

  // ===== ADDITIONAL IMAGES =====
  secondaryImages: any[]; // Array of additional vehicle photos
  // TODO: Define proper type for secondary images
}

// ===== FUTURE TYPE EXTENSIONS =====
/**
 * Additional product-related types can be added here:
 *
 * export interface ProductFilter {
 *   brands?: string[];
 *   priceRange?: [number, number];
 *   fuelTypes?: number[];
 *   yearRange?: [number, number];
 * }
 *
 * export interface ProductComparison {
 *   products: ProductType[];
 *   criteria: string[];
 * }
 *
 * export interface ProductReview {
 *   id: number;
 *   productId: number;
 *   rating: number;
 *   comment: string;
 *   authorName: string;
 *   createdAt: string;
 * }
 */
