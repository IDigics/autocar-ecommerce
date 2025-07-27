import { ProductType, ProductInResponseType } from "../../types/products";

export function castToProductType(productInResponse: ProductInResponseType): ProductType {
  return {
    id: productInResponse.id,
    name: productInResponse.name,
    slug: productInResponse.slug,
    price: productInResponse.price,
    image: productInResponse.image
            ? `http://localhost:3000/uploads/${productInResponse.image}`
            : undefined,
    brand: productInResponse.brand,
    category: productInResponse.category,
    subCategory: productInResponse.subCategory,
    fuelType: productInResponse.fuelType,
    description: productInResponse.description,
    availability: productInResponse.availability,
    currency: productInResponse.currency,
  };
}
