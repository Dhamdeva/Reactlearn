function Header(props){
    return(
        <div>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">Dhamdeva</a>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                    <img src={props.img} alt=".." />
                </div>
            </nav>
        </div>
    )
}

export default Header;