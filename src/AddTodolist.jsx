import { useState } from "react";


export function AddTodolist() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [addList, setAddList] = useState([]);
  const [editList, setEditList] = useState('edit');

  const handleSubmit = () => {
    const newList = {
      title: title,
      description: description
    };
    setTitle("");
    setDescription("");
    if (editList === 'edit') {
      setAddList([...addList, newList]);
    } else {
      const updatedList = [...addList];
      updatedList[editList] = newList;
      setAddList(updatedList);
      setEditList('edit'); 
    }
  };

  const handleDelete = (index) => {
    const updatedList = [...addList];
    updatedList.splice(index, 1);
    setAddList(updatedList);
  };

  const handleEdit = (index) => {
    const itemToEdit = addList[index];
    setTitle(itemToEdit.title);
    setDescription(itemToEdit.description);
    setEditList(index);
  };

  return (
    <div className="container-fluid text-center">
      <h4>Todo List</h4>
      <div className="container add col-md-8 py-5">
        <label>
          Title:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label className="mx-3">
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <button className="mx-3" onClick={handleSubmit}>
          {editList === 'edit' ? "Add" : "Update"}
        </button>
      </div>
      <div className="container table mt-5">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {addList.map((list, index) => {
              return (
                <tr key={index}>
                  <td>{list.title}</td>
                  <td>{list.description}</td>
                  <td>
                    <button className="mx-3" onClick={() => handleEdit(index)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
