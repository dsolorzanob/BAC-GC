import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MainLayout } from '@/components/layouts/MainLayout';
import SignUpPage from '@/modules/authentication/pages/SignUp';
import LoginPage from '@/modules/authentication/pages/Login';
import NewPasswordPage from '@/modules/authentication/pages/NewPassword';
import SendEmailPage from '@/modules/authentication/pages/ResetPassword';
import OTPPage from '@/modules/authentication/pages/OTP';
import PasswordChangeSuccess from '@/modules/authentication/pages/PasswordChangeSuccess';
import { PrivateRoute } from '@/router/PrivateRoute';
import { Dashboard } from '@/modules/Dashboard/pages/Dashboard';
import { DesignPage } from '@/modules/design/pages/DesignPage';
import InquiriesPage from '@/modules/inquiries/pages/InquiriesPage';
import UserList from '@/modules/user/pages/UserList';
import UserEditPage from '@/modules/user/pages/UserEditPage';
import UserCreatePage from '@/modules/user/pages/UserCreatePage';
import { InquiryDetail } from '@/modules/inquiries/pages/InquiryDetail';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="reset-password/send-email" element={<SendEmailPage />} />
          <Route
            path="reset-password/new-password"
            element={<NewPasswordPage />}
          />
          <Route path="reset-password/otp" element={<OTPPage />} />
          <Route
            path="reset-password/success"
            element={<PasswordChangeSuccess />}
          />
        </Route>

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="publicidades" element={<DesignPage />} />
            <Route path="consultas" element={<InquiriesPage />} />
            <Route
              path="consultas/:title-consulta/:id"
              element={<InquiryDetail />}
            />
            <Route path="usuarios" element={<UserList />} />
            <Route path="usuarios/crear" element={<UserCreatePage />} />
            <Route path="usuarios/editar/:id" element={<UserEditPage />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
