import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Studentform from "../Studentform";
import { Todo } from "../Todo";
import Table from "../Table";
import { Staticdesign } from "../Staticdesign";
import { Staticdes } from "../Staticdes";
import  Hist  from "../Hist";
import { AddTodolist } from "../AddTodolist";


function MainNavigator() {
  return (
    <Router>
    <div className="App">
        <Routes>
            <Route path="/" element={<Studentform />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/table" element={<Table />} />
            <Route path="/staticdesign" element={<Staticdesign />} />
            <Route path="/staticdes/:productId" element={<Staticdes />} />
            <Route path="/hist" element={<Hist />} />
            <Route path="/addtodolist" element={<AddTodolist />} />
        </Routes>
    </div>
    </Router>
  );
}

export default MainNavigator;