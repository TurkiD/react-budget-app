import React from "react";
import Home from "../Pages/Home";
import Budget from "../Pages/App";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../component/Navbar";

function index() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/budget-app" element={<Budget />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default index;
