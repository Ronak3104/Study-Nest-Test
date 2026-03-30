import { useState } from "react";

export default function usePagination(initialPage = 1) {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const nextPage = () => setCurrentPage((p) => p + 1);
  const prevPage = () => setCurrentPage((p) => Math.max(p - 1, 1));

  return { currentPage, nextPage, prevPage, setCurrentPage };
}
