"use client";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className="flex w-full h-screen items-center justify-center bg-auth overflow-scroll">
      <div className="bg-white opacity-100 shadow rounded-lg p-8">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
