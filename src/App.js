import React from 'react';
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Project id="project1" title="Project 1" description="Description of Project 1..." image="path_to_project1_wireframe" />
            <Project id="project2" title="Project 2" description="Description of Project 2..." image="path_to_project2_wireframe" />
            {/* Add more projects as needed */}
            <Footer />
        </div>
    );
}

export default App;