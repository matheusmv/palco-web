import { useCallback, useEffect, useState } from 'react';

import { fetchEventPage } from '../../services/event-manager/api';

export function useEventPage(
  { initialPage, itemsPerPage, defaultFilters } = { initialPage: 1, itemsPerPage: 5, defaultFilters: {} },
) {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState({
    itemsPerPage: itemsPerPage,
    totalItems: 0,
    currentPage: initialPage,
    totalPages: 0,
  });
  const [filters, setFilters] = useState({
    orderBy: 'date',
    order: 'asc',
    ...defaultFilters,
  });

  const handleCurrentPageChange = async ({ pageNumber }) => {
    setPage((state) => ({ ...state, currentPage: pageNumber }));
  };

  const handleFilterChange = useCallback(async (newFilters) => {
    setFilters((state) => ({ ...state, ...newFilters }));
  }, []);

  const getPage = useCallback(async (page = 1, size = 5, filters) => {
    try {
      const eventPage = await fetchEventPage({ page, size, filters });
      setEvents(eventPage.events);
      setPage(eventPage.meta);
    } catch (err) {
      console.error(err.response?.data || err.message);
    }
  }, []);

  const refreshPage = useCallback(() => {
    getPage(page.currentPage, page.itemsPerPage, filters);
  }, [getPage, page.currentPage, page.itemsPerPage, filters]);

  useEffect(() => {
    refreshPage();
  }, [refreshPage, handleFilterChange]);

  return { events, page, filters, handleCurrentPageChange, handleFilterChange };
}
