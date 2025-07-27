import { GET } from "@/lib/http-methods";
import { PaginationType } from "@/types";
import { ProductInResponseType } from "../../types/products";
import { castToProductType } from "../../utils/types-casting/products";
import { CriteriaType } from "../../types";

export interface FilterParams {
  page: number;
  limit: number;
  brandSlugs?: string[];
  categoriesSlugs?: string[];
  priceRange?: number[];
  currency?: string;
  availability?: boolean;
  criteria?: CriteriaType;
  search?: string;
}

export async function retrieveProductsFromServerSide({
  page,
  limit,
  brandSlugs,
  categoriesSlugs,
  priceRange,
  currency,
  availability = true,
  criteria,
  search,
}: FilterParams) {
  const params = [];
  // Conditionally add the query parameters to the params array
  if (brandSlugs && brandSlugs.length > 0) {
    params.push(`brandSlugs=${brandSlugs}`);
  }

  if (categoriesSlugs && categoriesSlugs.length > 0) {
    params.push(`categorySlugs=${categoriesSlugs}`);
  }
  if (priceRange && priceRange.length > 0) {
    params.push(`minPrice=${priceRange[0]}&maxPrice=${priceRange[1]}`);
  }
  if (currency) {
    params.push(`currency=${currency}`);
  }
  params.push(`isStock=${availability}`);
  if (criteria) {
    params.push(`sortBy=${criteria}`);
  }
  if (search) {
    params.push(`search=${search}`);
  }
  const filterEndPoint = `/products?page=${page}&limit=${limit}&${params.join(
    "&"
  )}`;

  try {
    const res = await GET(filterEndPoint, {});

    return {
      pagination: res.data.pagination as PaginationType,
      products: (res.data.data as ProductInResponseType[]).map(
        (productInResponse) => castToProductType(productInResponse)
      ),
    };
  } catch (error) {
    // Mock data for testing when backend is not available
    const mockProducts: ProductInResponseType[] = [
      {
        id: 1,
        name: 'Ford Mustang',
        slug: 'ford-mustang',
        price: 65000,
        image: '/products/logo.png',
        brand: 'Ford',
        category: 3,
        subCategory: 2,
        fuelType: 3,
        currency: 'DT',
        availability: true,
      },
      {
        id: 2,
        name: 'BMW X5',
        slug: 'bmw-x5',
        price: 75000,
        image: '/products/car.jpeg',
        brand: 'BMW',
        category: 1,
        subCategory: 1,
        fuelType: 2,
        currency: 'DT',
        availability: true,
      },
      {
        id: 3,
        name: 'Audi A6',
        slug: 'audi-a6',
        price: 68000,
        image: '/products/car1.jpeg',
        brand: 'Audi',
        category: 3,
        subCategory: 3,
        fuelType: 3,
        currency: 'DT',
        availability: true,
      },
    ];

    return {
      pagination: {
        currentPage: page,
        totalPages: 1,
        totalItems: mockProducts.length,
        itemsPerPage: limit,
        hasNextPage: false,
        hasPreviousPage: false,
      } as PaginationType,
      products: mockProducts.map((productInResponse) =>
        castToProductType(productInResponse)
      ),
    };
  }
}
