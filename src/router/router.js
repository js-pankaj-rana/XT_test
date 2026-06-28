import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../containers/app";
import { PageNotFound } from "../components/pageNotFound";

const RouterHOC = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/:page" element={<App />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default RouterHOC;