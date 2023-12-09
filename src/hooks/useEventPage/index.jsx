import { useCallback, useEffect, useState } from 'react';

import { fetchEventPage } from '../../services/event-manager/api';

export function useEventPage() {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState({
    itemsPerPage: 5,
    totalItems: 0,
    currentPage: 1,
    totalPages: 0,
  });
  const [filters, setFilters] = useState({
    orderBy: undefined,
    order: 'asc',
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
