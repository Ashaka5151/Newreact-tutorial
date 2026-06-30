import HeaderPage from "./Header";
import FooterPage from "./Footer";
import { Outlet } from "react-router";

function Connection() {
  return (
    <>
        <HeaderPage />
        <Outlet />
        <FooterPage />
    </>
  );
}

export default Connection;