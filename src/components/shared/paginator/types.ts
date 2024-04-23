export type PaginatorInput = {
  alignment?: "left" | "center" | "end";
  pageSize?: number;
  table?: any;
  setPageSize?: number;
  onPageSizeChanged?: any;
  total?: number;
  currentPage?: number;
  numberOfRowsPerPage?: number;
  goToFirstPage?: any;
  hasPreviousPage?: boolean;
  goToPrevPage?: any;
  goToNextPage?: any;
  hasNextPage?: boolean;
  goToLastPage?: any;
};
