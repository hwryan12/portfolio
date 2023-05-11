import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">My Web Design Portfolio</a>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#project1">Project 1</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#project2">Project 2</a>
                </li>
            </ul>
        </nav>
    );
};

export default Header;

