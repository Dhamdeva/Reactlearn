import { useEffect, useState } from "react";



export function Todo(){
    const [id,setId]=useState(1);
    const [list,setList]=useState();
    const [todolist,setTodoList]=useState([]);
    const [filterValue,setFilter]=useState();

    const  handleAdd=() => {
        const newItem={
            id:id,
            ...list
        };
        setList("");
        setId(id+1);
        setTodoList([...todolist,newItem]);
    }
    const handleCheck =(id, status) =>{
        todolist.map((todo)=>{
            if(todo.id==id) {
                todo.status = status;
            } 
            return todo;
        });
        // todolist[index].status=e.target.checked;
        setTodoList(todolist)
    }
    const handleDelete = (index) =>{
        const updateList=[...todolist];
        updateList.splice(index,1);
        setTodoList(updateList);
    }
    // let displayList = todolist;
    // useEffect()
    return(

        
        <div className="container-fluid p-0">
            
                <div className="container my-4">
                <select className="select col-md-3 my-3" 
                onChange={(e) => setFilter(e.target.value)}>
                    <option value={""}>All</option>
                    <option value={"true"}>Completed</option>
                    <option value={"false"}>Open</option>
                </select><br/>

                    {todolist.filter((Complet) => {
                    if (filterValue === "true") {
                        return Complet.status;
                    }else if(filterValue === "false") {
                        return !Complet.status;
                    }
                    else {  
                        return Complet;
                    }
                    }).map((element,index) => {
                        return(
                            <div className="d-flex" key={index}>
                                <label >{element.id}</label>
                                <input className="mx-3" type="checkbox"  defaultChecked={element.status}   onChange={(e) => handleCheck(element.id, e.target.checked)} />
                                <label >{element.value}</label>
                                {/* <button onClick={handleDelete}>Delete</button> */}
                            </div>
                        )
                    })
                    }
                    <input type="text" onChange={(e) => setList({value:e.target.value, status:false})}/>
                    <button onClick={handleAdd}>Add</button>
                </div>
                    
        </div>
    )
}