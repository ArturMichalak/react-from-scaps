import App from "@app";
import Callback from "@components/auth-callback";
import Navigation from "@components/navigation";
import React, { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/ms-callback" element={<Callback provider="MS" />} />
        <Route path="/is-callback" element={<Callback provider="IS" />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
