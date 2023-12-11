import { Route, Routes } from 'react-router-dom';

import Home from '../pages/Home';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import Search from '../pages/Search';
import SignUp from '../pages/SignUp';
import { AuthenticatedRoute } from './AuthenticatedRoute';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<AuthenticatedRoute />}>
        <Route index element={<Home />} />
        <Route path="/search" element={<Search />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;
