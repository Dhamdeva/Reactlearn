import React, { useState } from "react";

function Form() {

    const [name, setName] = useState("");
    const [fname, setFname] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [formList, setFormList] = useState([]);


    const handleSubmit = () => {
        const newForm = {
            name: name,
            fname: fname,
            age: age,
            email: email,
            phone: phone
        }
        setName('');
        setFname('');
        setAge('');
        setEmail('');
        setPhone('');
        setFormList([...formList, newForm]);

        
    };


    return (
        <div className="container justify-content-around">
            <label htmlFor="html" className="col-md-5">Name:
                <input className="col-md-12" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </label>
            <label htmlFor="html" className="col-md-5 mx-2">father Name:
                <input className="col-md-12 mx-2" type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
            </label>
            <label htmlFor="html" className="col-md-5">Age:
                <input className="col-md-12" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
            </label>
            <label htmlFor="html" className="col-md-5 mx-2">email:
                <input className="col-md-12 mx-2" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
            <label htmlFor="html" className="col-md-5">Phone.No:
                <input className="col-md-12" type="number" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </label>
            <button onClick={handleSubmit} className="col-md-5 mx-2">Submit</button>
            <table className="mt-5" style={{ border: '1px solid black', padding: '5px' }}>
                <tr>
                    <td style={{ border: '1px solid black', padding: '5px' }}>Name</td>
                    <td style={{ border: '1px solid black', padding: '5px' }}>Father Name</td>
                    <td style={{ border: '1px solid black', padding: '5px' }}>Age</td>
                    <td style={{ border: '1px solid black', padding: '5px' }}>Email</td>
                    <td style={{ border: '1px solid black', padding: '5px' }}>PhoneNo</td>
                </tr>
                {formList.map((element) => {
                    return (<tr>
                        <td style={{ border: '1px solid black', padding: '5px' }}>{element.name}</td>
                        <td style={{ border: '1px solid black', padding: '5px' }}>{element.fname}</td>
                        <td style={{ border: '1px solid black', padding: '5px' }}>{element.age}</td>
                        <td style={{ border: '1px solid black', padding: '5px' }}>{element.email}</td>
                        <td style={{ border: '1px solid black', padding: '5px' }}>{element.phone}</td>
                    </tr>)
                })}
            </table>


        </div>
    )
}

export default Form;