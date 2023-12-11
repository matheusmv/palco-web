export function getVisiblePaginationButtons(totalItems, currentPage, totalPages) {
  const visiblePages = Math.min(6, totalItems);
  const halfVisiblePages = Math.floor(visiblePages / 2);

  const startPage = Math.max(1, currentPage - halfVisiblePages);
  const endPage = Math.min(totalPages, startPage + visiblePages - 1);

  return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
}
