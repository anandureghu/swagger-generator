import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import { config } from "./app/config/app.config";
import Navbar from "./app/Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={`/${config.REPOSITORY}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
