import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./app/pages/HomePage";
import { config } from "./app/config/app.config";
import Navbar from "./app/Components/Navbar/Navbar";
import CreateHeaderPage from "./app/pages/CreateHeaderPage";
import CreateServersPage from "./app/pages/CreateServersPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={`/${config.REPOSITORY}`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add">
            <Route path="header" element={<CreateHeaderPage/>}/>
            <Route path="server" element={<CreateServersPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
