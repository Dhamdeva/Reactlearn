import React, { useEffect, useState } from "react";

export function Todo() {
  const [id, setId] = useState(1);
  const [list, setList] = useState({ value: "", status: false });
  const [todolist, setTodoList] = useState([]);
  const [filterValue, setFilter] = useState("");
  const [editList, setEditList] = useState("edit");

  const handleAdd = () => {
    const newItem = {
      id: id,
      ...list
    };
    setList({ value: "", status: false });
    setId(id + 1);
    if (editList === "edit") {
      setTodoList([...todolist, newItem]);
    } else {
      const updatedList = [...todolist];
      updatedList[editList] = newItem;
      setTodoList(updatedList);
      setEditList('edit');
    }
  };

  const handleCheck = (id, status) => {
    const updatedList = todolist.map((todo) => {
      if (todo.id === id) {
        return { ...todo, status: status };
      } else {
        return todo;
      }
    });
    setTodoList(updatedList);
  };

  const handleDelete = (index) => {
    const updatedList = [...todolist];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  const handleEdit = (index) => {
    const itemEdit = todolist[index];
    setList({ value: itemEdit.value, status: itemEdit.status });
    setEditList(index);
  };

  return (
    <div className="container-fluid p-0">
      <div className="container my-4">
        <select
          className="select col-md-3 my-3"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value={""}>All</option>
          <option value={"true"}>Completed</option>
          <option value={"false"}>Open</option>
        </select>
        <br />

        {todolist
          .filter((Complet) => {
            if (filterValue === "true") {
              return Complet.status;
            } else if (filterValue === "false") {
              return !Complet.status;
            } else {
              return Complet;
            }
          })
          .map((element, index) => {
            return (
              <div className="d-flex" key={index}>
                <label>{element.id}</label>
                <input
                  className="mx-3"
                  type="checkbox"
                  defaultChecked={element.status}
                  onChange={(e) => handleCheck(element.id, e.target.checked)}
                />
                <label>{element.value}</label>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <button onClick={() => handleDelete(index)}>Delete</button>
              </div>
            );
          })}

        <input
          type="text"
          onChange={(e) =>
            setList({ ...list, value: e.target.value, status: false })
          }
        />
        <button onClick={handleAdd}>
          {editList === "edit" ? "ADD" : "Update"}
        </button>
      </div>
    </div>
  );
}
