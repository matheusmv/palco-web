import { useCallback, useEffect, useState } from 'react';

import { fetchEventPage } from '../../services/event-manager/api';

export function useEventPage({ initialPage = 1, itemsPerPage = 5, defaultFilters = {} } = {}) {
  const [page, setPage] = useState({
    events: [],
    meta: {
      itemsPerPage,
      totalItems: 0,
      currentPage: initialPage,
      totalPages: 0,
    },
    filters: {
      orderBy: 'date',
      order: 'asc',
      ...defaultFilters,
    },
  });

  const handleCurrentPageChange = useCallback(({ pageNumber }) => {
    setPage((state) => ({ ...state, meta: { ...state.meta, currentPage: pageNumber } }));
  }, []);

  const handleFilterChange = useCallback((newFilters) => {
    setPage((state) => ({ ...state, filters: { ...state.filters, ...newFilters } }));
  }, []);

  const getPage = useCallback(async (page = 1, size = 5, filters) => {
    try {
      const { events, meta } = await fetchEventPage({ page, size, filters });
      setPage((state) => ({
        ...state,
        events,
        meta,
      }));
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  }, []);

  const refreshPage = useCallback(() => {
    getPage(page.meta.currentPage, page.meta.itemsPerPage, page.filters);
  }, [getPage, page.filters, page.meta.currentPage, page.meta.itemsPerPage]);

  useEffect(() => {
    refreshPage();
  }, [refreshPage]);

  return {
    events: page.events,
    page: page.meta,
    filters: page.filters,
    handleCurrentPageChange,
    handleFilterChange,
  };
}
