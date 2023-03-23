//App.js
import React from "react";
import { Link, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Join from "../pages/Join";
import Amenities from "../pages/Amenities";
import Schedule from "../pages/Schedule";

function App() {
  return (
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join" element={<Join />} />
          <Route path="/amenities" element={<Amenities />} />
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </>
  );
}

export default App;
