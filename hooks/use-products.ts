import { useEffect } from "react";
import usePagination from "@/hooks/use-pagination";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ProductType } from "../types/products";
import { PaginationType } from "@/types";
import { CriteriaType } from "../types";
import { retrieveProductsFromServerSide } from "../services/products/products-extraction";

interface Params {
  limit: number;
  criteria?: CriteriaType;
  similarProductSlug?: string;
  categoriesSlugs?: string[];
  brandSlugs?: string[];
  queryKeys?: (string | number)[];
  search?: string;
}

export default function useProducts({
  limit,
  criteria,
  similarProductSlug,
  categoriesSlugs,
  brandSlugs,
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
      criteria,
      similarProductSlug,
      categoriesSlugs,
      brandSlugs,
      search,
      ...queryKeys,
    ],
    queryFn: () =>
      retrieveProductsFromServerSide({
        page,
        limit,
        categoriesSlugs,
        brandSlugs,
        criteria,
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
