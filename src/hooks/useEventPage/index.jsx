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

  const handleCurrentPageChange = async (pageNumber) => {
    await getPage(pageNumber);
  };

  const getPage = useCallback(async (page = 1, size = 5, onSuccessFn, onErrorFn) => {
    await fetchEventPage({ page, size })
      .then((eventPage) => {
        setEvents(eventPage.events);
        setPage(eventPage.meta);
        onSuccessFn?.();
      })
      .catch((err) => {
        console.error(err.response.data);
        onErrorFn?.();
      });
  }, []);

  useEffect(() => {
    getPage();
  }, [getPage]);

  return { events, page, handleCurrentPageChange, getPage };
}
