import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from "@/components/layouts/MainLayout";
import SignUpPage from "@/modules/authentication/pages/SignUp";
import LoginPage from "@/modules/authentication/pages/Login";
import NewPasswordPage from "@/modules/authentication/pages/NewPassword";
import SendEmailPage from "@/modules/authentication/pages/ResetPassword";
import OTPPage from "@/modules/authentication/pages/OTP";
import { PrivateRoute } from "@/router/PrivateRoute";
import { Dashboard } from "@/modules/Dashboard/pages/Dashboard";
import ReportesBACPage from "@/modules/Consultas/Consultas";


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="signup" element={<SignUpPage />} />
          <Route path="reset-password/send-email" element={<SendEmailPage />} />
          <Route path="reset-password/new-password" element={<NewPasswordPage />} />
          <Route path="reset-password/otp" element={<OTPPage />} />
                <Route path="reportes" element={<ReportesBACPage />} />
        </Route>

        {/* Rutas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
      
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};
