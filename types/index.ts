export interface PaginationType {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export type CriteriaType =
  | "id_asc"
  | "price_asc"
  | "price_desc"
  | "year_asc"
  | "year_desc"
  | "review_asc"
  | "review_desc";
