import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./Main/Main.js";
import Characters from "./Characters/Characters.js";
import "../App.css";
import Layout from "./Layout/Layout.js";

const App = () => {
  return (
    <Routes>
      <Route path="/rick_and_morty" element={<Layout />}>
        <Route path="/rick_and_morty/main" element={<Main />} />
        <Route path="/rick_and_morty/characters" element={<Characters />} />
      </Route>
    </Routes>
  );
};

export default App;
