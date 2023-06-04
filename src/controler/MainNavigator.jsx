import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Studentform from "../Studentform";
import { Todo } from "../Todo";
import Table from "../Table";


function MainNavigator() {
  return (
    <Router>
    <div className="App">
        <Routes>
            <Route path="/" element={<Studentform />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/table" element={<Table />} />
        </Routes>
      
    </div>
    </Router>
  );
}

export default MainNavigator;