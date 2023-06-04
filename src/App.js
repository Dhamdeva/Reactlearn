// import Footer from "./Footer";
// import  Header  from "./Header";
import './App.css';
// import { Config } from "./Config";
// import Main from "./Main";
import { useState } from 'react';

function Value(props){
  return(
      <div>
          <p>{props.value}</p>
          
      </div>
  )
}

function Calc(_props){
  const [value,setValue]=useState(10);
  
  return(
      <div>
         
          <button onClick={() => setValue(value + 10)}>Click me Add</button>
          <button onClick={() => setValue(value - 10)}>Click me Sub</button>
          <button onClick={() => setValue(value * 10)}>Click me Mul</button>
          <button onClick={() => setValue(value / 10)}>Click me Div</button>

          <Value value={value}  />
      </div>
  )

}
function App() {
  return (
    <div className="App">
      {/* <div className="container-fluid">
        <nav >
          <Header img={Config.img}/>
        </nav>
        <div className="d-flex">
            <div className="side-nav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="main-content">
              <Main />
            </div>
        </div>
        <div className="footer my-4">
        <Footer phone={Config.phone} created={Config.created} address={Config.address}/>
        </div>
      </div> */}
      <Calc> </Calc>
    </div>
  );
}

export default App;
