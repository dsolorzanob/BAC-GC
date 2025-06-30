import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layouts/MainLayout";
import { AuthLayout } from "@/modules/authentication/layouts/AuthLayout";

import ResetPasswordPage from "@/modules/authentication/pages/ResetPassword";
import SignUpPage from "@/modules/authentication/pages/SignUp";
import LoginPage from "@/modules/authentication/pages/Login";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout de autenticación para páginas de login/registro */}
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="signup" element={<SignUpPage />} />
        </Route>

        {/* Layout principal para páginas con header y footer */}
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<div>Dashboard Page</div>} />
          <Route path="profile" element={<div>Profile Page</div>} />
        </Route>

        {/* Ruta de fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
