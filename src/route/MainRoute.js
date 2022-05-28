import React from "react";
import { Routes, Route } from "react-router-dom";
import Mainlayout from "../layout/mainlayout";
import Dashboard from "../page/Dashboard"
function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Mainlayout />}>
          <Route path="dashboard" element={<Dashboard/>} />
        </Route>
      </Routes>
    </>
  );
}

export default MainRoute;
