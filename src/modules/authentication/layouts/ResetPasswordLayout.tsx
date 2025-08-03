import React from "react";
import logo from "@/assets/logos/bac-logo.svg";

interface ResetPasswordLayoutProps {
  children: React.ReactNode;
}

export const ResetPasswordLayout: React.FC<ResetPasswordLayoutProps> = ({
  children,
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="w-[90%] md:w-[70%] lg:w-[30%] h-[400px] gap-2 flex flex-col">
        <div className="flex justify-center">
          <img src={logo} alt="logo" className="w-50" />
        </div> 
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};
