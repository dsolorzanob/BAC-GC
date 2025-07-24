import { isAuthenticated } from '@/utils/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicRoute = () => {
  return isAuthenticated() ? <Navigate to="/admin" replace /> : <Outlet />;
}; 