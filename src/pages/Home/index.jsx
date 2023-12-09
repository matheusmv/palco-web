import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Container from '../../components/Container';
import HDivider from '../../components/Divider/HDivider';
import VDivider from '../../components/Divider/VDivider';
import PageTitle from '../../components/Group/PageTitle';
import ProfileInfo from '../../components/Group/ProfileInfo';
import CustomHeader from '../../components/Header/CustomHeader';
import SearchBar from '../../components/SearchBar';
import Sidebar from '../../components/Sidebar';
import DefaultSpinner from '../../components/Spinner/DefaultSpinner';
import EventTable from '../../components/Table/EventTable';
import { useAuth } from '../../hooks/useAuth';
import { setUser } from '../../store/user/reducer';
import { clearStorage } from '../../utils/auth/storage.proxy';

function Home() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userReducer);

  const { checkUserToken } = useAuth();

  useEffect(() => {
    checkUserToken(
      (user) => {
        dispatch(setUser(user));
        setLoading(false);
      },
      () => {
        clearStorage();
        navigate('/login', { replace: true });
      },
    );
  }, [checkUserToken, dispatch, navigate]);

  if (loading) {
    return (
      <Container style={{ alignItems: 'center', justifyContent: 'center' }}>
        <DefaultSpinner />
      </Container>
    );
  }

  return (
    <Container style={{ flexDirection: 'column', overflowX: 'hidden' }}>
      <CustomHeader>
        <SearchBar />
        <VDivider />
        <ProfileInfo username={user?.email} role={user?.role} />
      </CustomHeader>
      <Sidebar />
      <HDivider />
      <Container
        style={{
          height: 'fit-content',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          paddingLeft: '70px',
          paddingRight: '10px',
          backgroundColor: 'var(--clr-background-secondary)',
        }}
      >
        <PageTitle title={'Eventos'} />
        <EventTable />
      </Container>
    </Container>
  );
}

export default Home;
