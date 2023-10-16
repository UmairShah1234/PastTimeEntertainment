import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

const Layout = () => {
  return (
    <div className="bg-dark text-light">
      <Header />
      <Outlet />
      <Footer />
      <WhatsApp />
    </div>
  );
};

export default Layout;
