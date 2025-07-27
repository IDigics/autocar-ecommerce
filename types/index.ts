export interface PaginationType {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export type CriteriaType = 
  | "price_asc" 
  | "price_desc" 
  | "name_asc" 
  | "name_desc" 
  | "date_asc" 
  | "date_desc";
