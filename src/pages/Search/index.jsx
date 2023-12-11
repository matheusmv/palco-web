import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';

import CustomButton from '../../components/Button/CustomButton';
import Container from '../../components/Container';
import HDivider from '../../components/Divider/HDivider';
import VDivider from '../../components/Divider/VDivider';
import EventGrid from '../../components/Grid/EventGrid';
import ProfileInfo from '../../components/Group/ProfileInfo';
import CustomHeader from '../../components/Header/CustomHeader';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import Sidebar from '../../components/Sidebar';
import DefaultSpinner from '../../components/Spinner/DefaultSpinner';
import { useAuth } from '../../hooks/useAuth';
import { useEventPage } from '../../hooks/useEventPage';
import { buildSearchFiltersFromUrlParamsEntries } from './utils';

function LoadingState() {
  return (
    <Container
      style={{ width: '100%', alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}
    >
      <DefaultSpinner />
    </Container>
  );
}

function Search() {
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const { ensureAuthenticated } = useAuth();
  const { user } = useSelector((state) => state.userReducer);

  const [search] = useSearchParams();
  const { events, page, handleCurrentPageChange, handleFilterChange } = useEventPage({
    itemsPerPage: 10,
    defaultFilters: buildSearchFiltersFromUrlParamsEntries(search.entries()),
  });

  const handlePageChange = (pageNumber) => {
    handleCurrentPageChange({ pageNumber });
  };

  useEffect(() => {
    ensureAuthenticated(
      () => {
        setLoading(false);
      },
      () => {
        navigate('/login', { replace: true });
      },
    );
  }, [ensureAuthenticated, navigate]);

  return (
    <Container style={{ width: '100%', flexDirection: 'column' }}>
      <CustomHeader>
        <CustomButton
          style={{ padding: 0, width: '42px', borderRadius: '5px' }}
          text={<HomeIcon fontSize="medium" />}
          onClickFn={() => navigate('/')}
        />
        <SearchBar onSearch={handleFilterChange} />
        <VDivider />
        <ProfileInfo username={user?.email} role={user?.role} />
      </CustomHeader>
      <Sidebar />
      <HDivider />
      <Container
        style={{
          width: '100%',
          height: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '50px 10px 50px 70px',
          backgroundColor: 'var(--clr-background-secondary)',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: 'var(--clr-white)',
          }}
        >
          <div style={{ flex: 6, width: '100%', maxHeight: '70vh' }}>
            {loading ? LoadingState() : <EventGrid events={events} />}
          </div>
          <div
            style={{
              width: '100%',
              height: 'fit-content',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Pagination
              currentPage={page.currentPage}
              totalItems={page.totalItems}
              totalPages={page.totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </Container>
    </Container>
  );
}

export default Search;
