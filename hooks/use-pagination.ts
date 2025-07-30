import { useState, useRef } from "react";

export default function usePagination() {
  const [page, setPage] = useState(1);
  const [pagesNumber, setPagesNumber] = useState(1);

  return {
    page,
    setPage,
    pagesNumber,
    setPagesNumber,
  };
}
