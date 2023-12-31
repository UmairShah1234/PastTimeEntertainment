import React from "react";
import Header from "../components/Header";
import { Link, Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";

const Layout = () => {
  return (
    <div className="bg-dark text-light">
      <Header />
      <Outlet />
      <Footer />
      <Link to={'https://wa.me/message/M53JJO5UE33UF1'} target="_blank">
      <WhatsApp />
      </Link>
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
