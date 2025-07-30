import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ProductInResponseType } from "../types/products";
import { retrieveProductFromServerSide } from "../services/products/product-extraction";

interface Params {
  id: string | number;
  queryKeys?: (string | number)[];
}

export default function useProduct({ id, queryKeys = [] }: Params) {
  console.log("🔍 useProduct called with ID:", id, "type:", typeof id);
  console.log("🔍 ID is truthy?", !!id);
  
  const { data, isLoading, error } = useQuery<ProductInResponseType | null>({
    queryKey: ["product", id, ...queryKeys],
    queryFn: () => {
      console.log("🎯 Query function executing for ID:", id);
      return retrieveProductFromServerSide({ id });
    },
    enabled: !!id, // Only run query if id exists
    placeholderData: keepPreviousData,
    staleTime: 0, // Always refetch to see debugging
    gcTime: 0, // Don't cache for debugging
  });

  console.log("📊 Query state - loading:", isLoading, "data:", !!data, "error:", !!error);

  if (error) {
    console.error("🚨 React Query error:", error);
  }

  return {
    product: data,
    productIsLoading: isLoading,
    productError: error,
  };
}
