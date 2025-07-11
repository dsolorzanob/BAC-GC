import { isAuthenticated } from '@/utils/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  return isAuthenticated() ? <Outlet /> : <Navigate to="/" replace />;
};
