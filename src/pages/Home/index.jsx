import { useSelector } from 'react-redux';

import Container from '../../components/Container';
import Sidebar from '../../components/Sidebar';
import CustomHeader from '../../components/Header/CustomHeader';
import SearchBar from '../../components/SearchBar';
import VDivider from '../../components/Divider/VDivider';
import HDivider from '../../components/Divider/HDivider';
import ProfileInfo from '../../components/Group/ProfileInfo';
import PageTitle from '../../components/Group/PageTitle';
import EventTable from '../../components/Table/EventTable';

// TODO: integrate api and table pagination
// TODO: create event card component

function Home() {
  const { user } = useSelector((state) => state.userReducer);

  return (
    <Container style={{ flexDirection: 'column' }}>
      <Sidebar />
      <CustomHeader>
        <SearchBar />
        <VDivider />
        <ProfileInfo username={user.email} role={user.role} />
      </CustomHeader>
      <HDivider />
      <Container
        style={{
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
