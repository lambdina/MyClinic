import React from 'react';
import {Homepage} from "./components/Homepage";
import "./styles/css/app.css";
import { Route, Routes } from 'react-router-dom';
import {SearchResults} from "./components/SearchResults";


function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={"/"} element={<Homepage />} />
            <Route path={"/search"} element={<SearchResults  />} />
        </Routes>
    </div>
  );
}

export default App;
