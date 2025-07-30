import {
  ProductType,
  ProductInResponseType,
  ProductInListResponseType,
} from "../../types/products";

export function castToProductType(
  productInResponse: ProductInResponseType
): ProductType {
  // Safe access with fallbacks for undefined values
  const brandName = productInResponse.brand?.name || "";
  const modelName = productInResponse.model || "";

  // Debug: log image URL
  const imageUrl = productInResponse.mainImage?.url
    ? `http://localhost:3000/image/${productInResponse.mainImage.url}`
    : "/products/car.jpeg";
  console.log("Image URL:", imageUrl);

  return {
    id: productInResponse.id,
    name:
      brandName && modelName
        ? `${brandName} ${modelName}`
        : modelName || brandName || "Car", // Better name handling
    slug: `${(brandName || "car").toLowerCase()}-${(
      modelName || "model"
    ).toLowerCase()}`.replace(/\s+/g, "-"),
    price: productInResponse.price || 0,
    image: imageUrl,
    brand: brandName,
    category: productInResponse.category?.id,
    subCategory: productInResponse.subCategory?.id,
    fuelType: productInResponse.fuelType?.id,
    description: `${brandName} ${modelName} de ${
      productInResponse.year || "N/A"
    }, ${productInResponse.fuelType?.type || "N/A"}, ${
      productInResponse.gear || "N/A"
    }, ${productInResponse.horsePower || 0} CV, ${(
      productInResponse.mileage || 0
    ).toLocaleString()} km.`,
    availability: true, // Assuming available if returned by API
    currency: "DT", // Default currency
    // Additional fields
    mileage: productInResponse.mileage || 0,
    model: modelName,
    gear: productInResponse.gear,
    offerType: productInResponse.offerType,
    horsePower: productInResponse.horsePower || 0,
    year: productInResponse.year,
    engineSize: productInResponse.engineSize,
    doors: productInResponse.doors,
    seats: productInResponse.seats,
    previousOwner: productInResponse.previousOwner,
    color: productInResponse.color,
    averageReviewScore: productInResponse.averageReviewScore || 0,
    // Raw backend image data
    mainImage: productInResponse.mainImage,
  };
}

// For the simplified list response from /cars endpoint
export function castToProductTypeFromList(
  productInResponse: ProductInListResponseType
): ProductType {
  // Debug: log image URL
  const imageUrl = productInResponse.image
    ? `http://localhost:3000/image/${productInResponse.image}`
    : "/products/car.jpeg";
  console.log("List Image URL:", imageUrl);

  return {
    id: productInResponse.id,
    name: `${productInResponse.brand} ${productInResponse.model}`,
    slug: `${productInResponse.brand.toLowerCase()}-${productInResponse.model.toLowerCase()}`.replace(
      /\s+/g,
      "-"
    ),
    price: productInResponse.price || 0,
    image: imageUrl,
    brand: productInResponse.brand,
    description: `${productInResponse.brand} ${productInResponse.model} de ${productInResponse.year}, ${productInResponse.fuelType}`,
    availability: true,
    currency: "DT",
    // Additional fields from simplified response
    model: productInResponse.model,
    offerType: productInResponse.offerType,
    year: productInResponse.year,
    color: productInResponse.color,
    averageReviewScore: productInResponse.rating || 0,
    // Create a mainImage object from the simple image string
    mainImage: productInResponse.image
      ? {
          id: 0,
          url: productInResponse.image,
          type: "main",
        }
      : undefined,
  };
}
