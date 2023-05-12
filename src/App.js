import React from 'react';
import Header from './components/Header';
import Project from './components/Body';
import Footer from './components/Footer';

function App() {
    const projects = [
        {id: "project1", title: "Project 1", description: "Description of Project 1...", image: "path_to_project1_wireframe"},
        {id: "project2", title: "Project 2", description: "Description of Project 2...", image: "path_to_project2_wireframe"},
        // Add more projects as needed
    ];

    return (
        <div className="App">
            <Header />
            {projects.map((project) => (
                <Project 
                    key={project.id} 
                    id={project.id} 
                    title={project.title} 
                    description={project.description} 
                    image={project.image}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;