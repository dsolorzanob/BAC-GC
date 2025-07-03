// src/layouts/LoginLayout.tsx
import React from "react";
import logo from "@/assets/logos/bac-logo.svg";

interface LoginLayoutProps {
  children: React.ReactNode;
}

export const LoginLayout: React.FC<LoginLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen w-full flex flex-col bg-background">
      {/* Header con logo */}
      <header className="w-full border-b border-border p-4 flex items-center justify-start">
        <img src={logo} alt="BAC logo" className="h-10" />
      </header>

      {/* Contenido principal */}
      <main className="flex-1 flex flex-col justify-center items-center px-4 py-8">
        {children}
      </main>
    </div>
  );
};