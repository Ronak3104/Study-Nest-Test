import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Add from "./pages/Add.jsx";
import List from "./pages/List.jsx";
import Bookings from "./pages/Bookings.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/addcourse" element={<Add />} />
      <Route path="/listcourse" element={<List />} />
      <Route path="/bookings" element={<Bookings />} />
    </Routes>
  );
};

export default App;
