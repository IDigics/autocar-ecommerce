import { GET } from "@/lib/http-methods";
import { PaginationType } from "@/types";
import { ProductInResponseType } from "../../types/products";
import { castToProductType } from "../../utils/types-casting/products";
import { CriteriaType } from "../../types";

export interface FilterParams {
  page: number;
  pageSize: number;
  brand?: string[];
  category?: string[];
  subCategory?: string[];
  minPrice?: number;
  maxPrice?: number;
  currency?: string;
  availability?: boolean;
  sort?: CriteriaType;
  search?: string;
}

export async function retrieveProductsFromServerSide({
  page,
  pageSize,
  brand,
  category,
  subCategory,
  minPrice,
  maxPrice,
  currency,
  availability = true,
  sort,
  search,
}: FilterParams) {
  const params = [];
  // Conditionally add the query parameters to the params array
  if (brand && brand.length > 0) {
    params.push(`brand=${brand.join(',')}`);
  }

  if (category && category.length > 0) {
    params.push(`category=${category.join(',')}`);
  }

  if (subCategory && subCategory.length > 0) {
    params.push(`subCategory=${subCategory.join(',')}`);
  }

  if (minPrice !== undefined) {
    params.push(`minPrice=${minPrice}`);
  }
  if (maxPrice !== undefined) {
    params.push(`maxPrice=${maxPrice}`);
  }
  if (currency) {
    params.push(`currency=${currency}`);
  }
  params.push(`isStock=${availability}`);
  if (sort) {
    params.push(`sort=${sort}`);
  }
  if (search) {
    params.push(`search=${search}`);
  }
  const filterEndPoint = `/cars?page=${page}&pageSize=${pageSize}&${params.join(
    "&"
  )}`;

  try {
    const res = await GET(filterEndPoint, {});

    return {
      pagination: res.data.pagination as PaginationType,
      products: (res.data.cars as ProductInResponseType[]).map(
        (productInResponse) => castToProductType(productInResponse)
      ),
    };
  } catch (error) {
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
        itemsPerPage: pageSize,
        hasNextPage: false,
        hasPreviousPage: false,
      } as PaginationType,
      products: mockProducts.map((productInResponse) =>
        castToProductType(productInResponse)
      ),
    };
  }
}
