import { Footer, Navbar } from "./Static";
import MainNavigator from "./controler/MainNavigator";
import './App.css';

export function Home(){
    return(
        <div className="container-fluid p-0">
            <Navbar />
            <div className="d-flex p-0">
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
                    </ul>
                </div>
                <div className="main-content">
                    <MainNavigator />
                </div>
            </div>
            <Footer />
        </div>
    )
}

