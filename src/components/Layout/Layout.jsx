import { Outlet } from "react-router-dom";

import { Navbar } from "../Navbar/Navbar";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
