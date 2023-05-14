import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Body';
import Footer from './components/Footer';
import Welcome from './components/Welcome';  
import projects from './projects';

function App() {
    const schoolProjects = projects.filter(project => project.type === "school");
    const personalProjects = projects.filter(project => project.type === "personal");

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Welcome />} /> 
                    <Route path="/projects" element={  
                        <>
                            {projects.map((project) => (
                                <Project 
                                    key={project.id} 
                                    id={project.id} 
                                    title={project.title} 
                                    description={project.description} 
                                    images={project.images}  // pass the images array to the Project component
                                />
                            ))}
                        </>
                    }/>
                    <Route path="/school-projects" element={
                        <>
                            {schoolProjects.map((project) => (
                                <Project 
                                    key={project.id} 
                                    id={project.id} 
                                    title={project.title} 
                                    description={project.description} 
                                    images={project.images}  // pass the images array to the Project component
                                />
                            ))}
                        </>
                    }/>
                    <Route path="/personal-projects" element={
                        <>
                            {personalProjects.map((project) => (
                                <Project 
                                    key={project.id} 
                                    id={project.id} 
                                    title={project.title} 
                                    description={project.description} 
                                    images={project.images}  // pass the images array to the Project component
                                />
                            ))}
                        </>
                    }/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
