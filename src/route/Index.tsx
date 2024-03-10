import React from "react";
import Home from "../Pages/Home";
import Budget from "../Pages/App";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget-app" element={<Budget />} />
      </Routes>
    </BrowserRouter>
  );
}

export default index;
