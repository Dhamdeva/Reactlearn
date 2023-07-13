import { Footer, Navbar } from "./Static";
import MainNavigator from "./controler/MainNavigator";
import './App.css';
import React from "react";

export function Home(){
    return(
        <div className="container-fluid p-0">
            <Navbar />
            <div className="d-flex ">
                <div className="side-nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Student Form</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/todo">Todo</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/table">Table</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/hist">Hist</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/staticdesign">Staticdesign</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/addtodolist">AddTodoList</a>
                        </li>
                    </ul>
                </div>
                <div className="main-content">
                    <div className="col-lg-12">
                        <MainNavigator />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

