import React from 'react';
import Header from './components/Header';
import Project from './components/Body';
import Footer from './components/Footer';
import projects from './projects';  // import the projects array

function App() {
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
