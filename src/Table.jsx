import { useState, useEffect } from "react";
import { nameList } from "./Data"



function Table() {
    const [sortName, setSortName] = useState([]);
    const [search, setSearch] = useState([]);
    const [ascending, setAscending] = useState([]);
    const [descending, setDescending] = useState([]);
    const [deptFilter, setDeptFilter] = useState();
    const [jobFilter, setJobFilter] = useState();
    const [nameListFilter, setnameListFilter] = useState(nameList);



    useEffect(() => {
        const searchedNameList = nameList.filter((names) => {
            return names.name.includes(search);
        })
        setnameListFilter(searchedNameList);
    }, [search]);

    useEffect(() => {
        let sortedList = [...nameList];

        if (ascending) {
            setDescending('');
            if (ascending === 'age') {
                sortedList = nameList.sort((a, b) => {
                    return a.Age - b.Age;
                })
            }
            if (ascending === 'name') {
                sortedList = nameList.sort((a, b) => {
                    return a.name.localeCompare(b.name);
                })
            }
            if (ascending === 'salary') {
                sortedList = nameList.sort((a, b) => {
                    return a.MonthlyIncome - b.MonthlyIncome;
                })
            }

            setnameListFilter(sortedList);
        }

    }, [ascending]);


    useEffect(() => {
        let sortedList = [...nameList];
        if (descending) {
            setAscending('');
            if (descending === 'age') {
                sortedList = nameList.sort((a, b) => {
                    return b.Age - a.Age;
                })
            }
            if (descending === 'name') {
                sortedList = nameList.sort((a, b) => {
                    return b.name.localeCompare(a.name);
                })
            }
            if (descending === 'salary') {
                sortedList = nameList.sort((a, b) => {
                    return b.MonthlyIncome - a.MonthlyIncome;
                })
            }
            setnameListFilter(sortedList);
        }

    }, [descending]);

    useEffect(() => {
        console.log("first time render");
    }, []);

    useEffect(() => {
        console.log("all time render");
    });





    return (
        <div className="container">
            <h2>Name List</h2>
            <div className="d-flex">
                <label htmlFor="name">NAME:
                    <input className="me-2" placeholder="search" type="search" onChange={(e) => setSearch(e.target.value)} />
                </label>
                <select className=" m-2" onChange={(e) => setDeptFilter(e.target.value)}>
                    <option value="">DEPARTMENT</option>
                    <option value="Sales">SALES</option>
                    <option value="Research & Development">RESEARCH & DEVELOPMENT</option>
                </select>
                <select className=" m-2" onChange={(e) => setJobFilter(e.target.value)}>
                    <option value="">JOB ROLE</option>
                    <option value="Sales Executive">SALES EXECUTIVE</option>
                    <option value="Research Scientist">RESEARCH SCIENTIST</option>
                    <option value="Laboratory Technician">LABORATORY TECHNICIAN</option>
                    <option value="Manufacturing Director">MANUFACTURING DIRECTOR	</option>
                    <option value="Healthcare Representative">HEALTHCARE REPRESENTATIVE</option>
                    <option value="Manager">MANAGER</option>
                    <option value="Sales Representative">SALES REPRESENTATIVE</option>
                    <option value="Research Director">RESEARCH DIRECTOR</option>
                </select>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>
                            Name
                            <button className="mx-2 but" onClick={(e) => setAscending('name')} ><i className="fa-solid fa-arrow-up " ></i></button>
                            <button className=" but" onClick={(e) => setDescending('name')} ><i className="fa-solid fa-arrow-down"></i></button>
                        </th>
                        <th>
                            Age
                            <button className="mx-2 but" onClick={(e) => setAscending('age')}><i className="fa-solid fa-arrow-up " ></i></button>
                            <button  className=" but"onClick={(e) => setDescending('age')}><i className="fa-solid fa-arrow-down"></i></button>
                        </th>
                        <th>Department</th>
                        <th>Jobrole</th>
                        <th>
                            Salary 
                            <button className="mx-2 but" onClick={(e) => setAscending('salary')}><i className="fa-solid fa-arrow-up " ></i></button>
                            <button className=" but"onClick={(e) => setDescending('salary')} ><i className="fa-solid fa-arrow-down"></i></button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {nameListFilter.filter((jobRole) => {
                        if (jobFilter) {
                            return (jobRole.JobRole === jobFilter);
                        } else {
                            return jobRole;
                        }
                    }).filter((department) => {
                        if (deptFilter) {
                            return (department.Department === deptFilter);
                        } else {
                            return department;
                        }
                    })
                        .map((names) => {
                            return (
                                <tr>
                                    <td>{names.EmployeeNumber}</td>
                                    <td>{names.name}</td>
                                    <td>{names.Age}</td>
                                    <td>{names.Department}</td>
                                    <td>{names.JobRole}</td>
                                    <td>{names.MonthlyIncome}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Table;