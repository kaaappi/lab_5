import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideNav from "./components/navBar/SideNav";
import FirstTask from "./components/tasks/FirstTask";
import "./styles/App.css";
import SecondTask from "./components/tasks/SecondTask";

function App() {
  return (
    <BrowserRouter>
      <SideNav />
      <Routes>
        <Route path={"/"} element={<FirstTask />} />
        <Route path={"/second"} element={<SecondTask />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
