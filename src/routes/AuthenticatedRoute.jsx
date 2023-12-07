import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

export function AuthenticatedRoute() {
  const location = useLocation();

  const { user } = useAuth();

  if (!user) {
    return <Navigate to={'/login'} state={{ from: location }} replace />;
  }

  return <Outlet />;
}
