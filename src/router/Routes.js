import React from "react";
import Home from "../views/Home";
import NotFound from "../views/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

const MyRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollTopBehaviour />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default MyRoutes;
