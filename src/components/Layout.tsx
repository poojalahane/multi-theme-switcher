import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const theme = useSelector((state: RootState) => state.theme.value);

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        theme === "theme1"
          ? "bg-gray-100 text-black font-sans"
          : theme === "theme2"
          ? "bg-gray-900 text-white font-serif flex"
          : "bg-gray-100 text-purple-900 font-pacifico"
      }`}
    >
      <Header />
      <main className="p-4 w-full">{children}</main>
    </div>
  );
};

export default Layout;
