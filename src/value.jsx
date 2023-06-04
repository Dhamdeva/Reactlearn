import React from "react";
import { useState } from "react";

function Value(props){
    return(
        <div>
            <p>{props.add}</p>
            <p>{props.mul}</p>
            <p>{props.sub}</p>
            <p>{props.div}</p>
        </div>
    )
}

function Calc(props){
    const [add,setAdd]=useState(10);
    const [mul,setMul]=useState(10);
    const [sub,setSub]=useState(10);
    const [div,setDiv]=useState(10);
    
    return(
        <div>
            <button onClick={() => setAdd(add + 10)}>Click me Add</button>
            <button onClick={() => setSub(sub - 10)}>Click me Sub</button>
            <button onClick={() => setMul(mul * 10)}>Click me Mul</button>
            <button onClick={() => setDiv(div / 10)}>Click me Div</button>

            <Value add={add} sub={sub} mul={mul} div={div} />
        </div>
    )

}

export default Value;