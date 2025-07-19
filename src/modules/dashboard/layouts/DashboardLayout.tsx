// src/modules/dashboard/layouts/DashboardLayout.tsx

import { Outlet } from "react-router-dom";
import { Header } from "@/components/layouts/Header";

export const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet />
    </div>
  );
};
