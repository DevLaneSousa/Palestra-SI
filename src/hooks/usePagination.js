import { useMemo, useState } from "react";

// Paginação client-side simples e genérica — recebe uma lista e o tamanho
// de página, devolve a fatia atual e os controles de navegação.
export function usePagination(items, pageSize) {
  const [page, setPage] = useState(0);

  const totalPages = Math.max(1, Math.ceil(items.length / pageSize));
  const pageItems = useMemo(
    () => items.slice(page * pageSize, page * pageSize + pageSize),
    [items, page, pageSize]
  );

  function goTo(index) {
    setPage(index);
  }

  function goBy(delta) {
    setPage((p) => (p + delta + totalPages) % totalPages);
  }

  return { page, totalPages, pageItems, goTo, goBy };
}
