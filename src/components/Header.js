import React from 'react';

const Header = () => {
    return (
        <header>
            <h1>My Web Design Portfolio</h1>
            <nav>
                <ul>
                    <li><a href="#project1">Project 1</a></li>
                    <li><a href="#project2">Project 2</a></li>
                    {/* Add more projects as needed */}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
