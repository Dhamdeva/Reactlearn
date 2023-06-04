import React, { useState } from "react";
import { Footer, Navbar } from "./Static";



function Studentform() {
    const [id, setId] = useState(4001);
    const [name, setName] = useState("");
    const [fname, setFname] = useState("");
    const [age, setAge] = useState("");
    const [tamil, setTamil] = useState("");
    const [english, setEnglish] = useState("");
    const [maths, setMaths] = useState("");
    const [science, setScience] = useState("");
    const [social, setSocial] = useState("");
    const [total, setTotal] = useState("");
    const [result, setResult] = useState("");
    const [formList, setFormList] = useState([]);
    const [filterStatus, setFilterStatus] = useState();


    const handleSubmit = () => {
        const newForm = {
            id: id,
            name: name,
            fname: fname,
            age: age,
            tamil: tamil,
            english: english,
            maths: maths,
            science: science,
            social: social,
            total: 0,
            result: ''
        }
        const totalMarks = totalMark(newForm);
        const result = isPass(newForm);
        newForm.total = totalMarks;
        newForm.result = result;
        setId(id + 1);
        setName('');
        setFname('');
        setAge('');
        setTamil('');
        setEnglish('');
        setMaths('');
        setScience('');
        setSocial('');
        setTotal();
        setResult();
        setFormList([...formList, newForm]);


    };
    const totalMark = (element) => {
        return (
            Number(element.tamil) +
            Number(element.english) +
            Number(element.maths) +
            Number(element.science) +
            Number(element.social)
        );
    };
    const isPass = (element) => {
        const marks = ["tamil", "english", "maths", "science", "social"];
        for (const mark of marks) {
            if (Number(element[mark]) < 35) {
                return "Fail";
            }
        }
        return "Pass";
    };


    return (
        <div className="container-fluid p-0">
            
            <div className="container-fluid justify-content-around form m-5">
                <h2 className="text-center">Student Register Form</h2>
                <label htmlFor="html" className="col-md-5 mx-3 mt-2">Name:
                    <input className="col-md-12 py-2 mx-3 mt-2" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label htmlFor="html" className="col-md-5 mx-3 mt-2">father Name:
                    <input className="col-md-12 py-2 mx-3 mt-2" type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
                </label>
                <label htmlFor="html" className="col-md-5 mx-3 mt-2">Age:
                    <input className="col-md-12 py-2 mx-3 mt-2" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </label>
                <label htmlFor="html" className="col-md-5 mx-3 mt-2">Tamil:
                    <input className="col-md-12 py-2 mx-3 mt-2" type="number" value={tamil} onChange={(e) => setTamil(e.target.value)} />
                </label>
                <label htmlFor="html" className="col-md-5 mx-3 mt-2">English:
                    <input className="col-md-12 py-2 mx-3 mt-2" type="number" value={english} onChange={(e) => setEnglish(e.target.value)} />
                </label>
                <label htmlFor="html" className="col-md-5 mx-3 mt-2">Maths:
                    <input className="col-md-12 py-2 mx-3 mt-2" type="number" value={maths} onChange={(e) => setMaths(e.target.value)} />
                </label>
                <label htmlFor="html" className="col-md-5 mx-3 mt-2">Science:
                    <input className="col-md-12 py-2 mx-3 mt-2" type="number" value={science} onChange={(e) => setScience(e.target.value)} />
                </label>
                <label htmlFor="html" className="col-md-5 mx-3 mt-2">Social:
                    <input className="col-md-12 py-2 mx-3 mt-2" type="number" value={social} onChange={(e) => setSocial(e.target.value)} />
                </label>
                <button onClick={handleSubmit} className=" button  my-4">Submit</button>
            </div>
            <h3 className="text-center"> Student Data</h3>
            <div className="student">
            <table className="mt-5 " >
                <tr>
                    <td rowSpan={10}><select onChange={(e) => setFilterStatus(e.target.value)}>
                        <option value={""}>All</option>
                        <option value={"Pass"}>Pass</option>
                        <option value={"Fail"}>Fail</option>
                        </select></td>
                </tr>
                <tr>
                    <td style={{ border: '1px solid black', padding: '20px' }}>Roll.No</td>
                    <td style={{ border: '1px solid black', padding: '20px' }}>Name</td>
                    <td style={{ border: '1px solid black', padding: '20px' }}>Father Name</td>
                    <td style={{ border: '1px solid black', padding: '20px' }}>Age</td>
                    <td style={{ border: '1px solid black', padding: '20px' }}>Tamil</td>
                    <td style={{ border: '1px solid black', padding: '20px' }}>English</td>
                    <td style={{ border: '1px solid black', padding: '20px' }}>Maths</td>
                    <td style={{ border: '1px solid black', padding: '20px' }}>Science</td>
                    <td style={{ border: '1px solid black', padding: '20px' }}>Social</td>
                    <td style={{ border: '1px solid black', padding: '20px' }}>Total</td>
                    <td style={{ border: '1px solid black', padding: '20px' }}>Result</td>
                </tr>
                {formList.filter((markList) => {
                    if (filterStatus) {
                        return (markList.result === filterStatus);
                    } else {
                        return  markList;
                    }
                }).map((element) => {

                    return (<tr key={element}>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.id}</td>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.name}</td>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.fname}</td>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.age}</td>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.tamil}</td>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.english}</td>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.maths}</td>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.science}</td>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.social}</td>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.total}</td>
                        <td style={{ border: '1px solid black', padding: '20px' }}>{element.result}</td>

                    </tr>)
                })}
            </table>
            </div>    


            
        </div>
    )
}

export default Studentform;