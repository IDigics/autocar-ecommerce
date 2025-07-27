import { useEffect } from "react";
import usePagination from "@/hooks/use-pagination";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ProductType } from "../types/products";
import { PaginationType } from "@/types";
import { CriteriaType } from "../types";
import { retrieveProductsFromServerSide } from "../services/products/products-extraction";

interface Params {
  pageSize: number;
  sort?: CriteriaType;
  similarProductSlug?: string;
  category?: string[];
  subCategory?: string[];
  brand?: string[];
  minPrice?: number;
  maxPrice?: number;
  queryKeys?: (string | number)[];
  search?: string;
}

export default function useProducts({
  pageSize,
  sort,
  similarProductSlug,
  category,
  subCategory,
  brand,
  minPrice,
  maxPrice,
  search,
  queryKeys = [],
}: Params) {
  const { page, setPage, pagesNumber, setPagesNumber } =
    usePagination();

  const { data, isLoading } = useQuery<{
    products: ProductType[];
    pagination: PaginationType;
  } | null>({
    queryKey: [
      "products",
      page,
      sort,
      similarProductSlug,
      category,
      subCategory,
      brand,
      minPrice,
      maxPrice,
      search,
      ...queryKeys,
    ],
    queryFn: () =>
      retrieveProductsFromServerSide({
        page,
        pageSize,
        category,
        subCategory,
        brand,
        minPrice,
        maxPrice,
        sort,
        search,
      }),
    placeholderData: keepPreviousData,
  });


  useEffect(() => {
    setPagesNumber(
      data?.pagination?.totalPages ? data?.pagination?.totalPages : 1
    );
  }, [data]);

  return {
    products: data?.products,
    productsAreLoading: isLoading,
    setPage,
    page,
    pagesNumber,
  };
}
