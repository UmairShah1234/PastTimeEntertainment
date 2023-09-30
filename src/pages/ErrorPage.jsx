import React from "react";
import Header from "../components/Header";
import { Container } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="bg-dark text-light">
      <Header />
      <Container>
        <div className="fs-1 my-5 py-5 text-center">
          Oops! {error?.status} {error?.statusText}
        </div>
      </Container>
    </div>
  );
};

export default ErrorPage;
