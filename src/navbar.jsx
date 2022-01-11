import React from 'react';

const NavBar = (props) => {
    return (<div>
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">My Navbar</a>
                <span className='badge badge-pill badge-secondary'>{props.totalCounters}</span>
            </div>
        </nav>
    </div>);
}

export default NavBar;