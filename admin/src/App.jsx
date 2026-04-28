import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import Add from "./assets/pages/Add";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addcourse" element={<Add />} />
    </Routes>
  );
};

export default App;
