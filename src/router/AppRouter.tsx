import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layouts/MainLayout";
import SignUpPage from "@/modules/authentication/pages/SignUp";
import LoginPage from "@/modules/authentication/pages/Login";
import NewPasswordPage from "@/modules/authentication/pages/NewPassword";
import SendEmailPage from "@/modules/authentication/pages/ResetPassword";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout de autenticación para páginas de login/registro */}
        <Route path="/" >
          <Route index element={<LoginPage />} />
          <Route path="reset-password/send-email" element={<SendEmailPage />} />
          <Route path="reset-password/new-password" element={<NewPasswordPage />} />
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
