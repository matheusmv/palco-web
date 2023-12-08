import { Route, Routes } from 'react-router-dom';

import Login from '../pages/Login';
import SignUp from '../pages/SignUp';

import { AuthenticatedRoute } from './AuthenticatedRoute';

import Home from '../pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<AuthenticatedRoute />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;
