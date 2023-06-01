import { Routes, Route } from "react-router-dom";
import React from "react";
import Main from "./Main/Main.js";
import Characters from "./Characters/Characters.js";
import "../App.css";
import Layout from "./Layout/Layout.js";

const App = () => {
  return (
    <Routes>
      <Route path="/RickAndMorty/" element={<Layout />}>
        <Route path="/RickAndMorty/" element={<Main />} />
        <Route path="/RickAndMorty/characters" element={<Characters />} />
      </Route>
    </Routes>
  );
};

export default App;
