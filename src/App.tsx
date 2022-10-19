import React from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import Main from "./pages/Main";
import AllRollingPapers from "./pages/AllRollingPapers";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/:personalPath" element={<AllRollingPapers />} />
    </Routes>
  );
}

export default App;
