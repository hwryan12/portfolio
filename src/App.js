import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Body';
import Footer from './components/Footer';
import Welcome from './components/Welcome';  
import projects from './projects';
import './App.css';

function App() {
    const [searchTerm, setSearchTerm] = useState(''); 
    const schoolProjects = projects.filter(project => project.type === "school");
    const personalProjects = projects.filter(project => project.type === "personal");
    const filteredProjects = projects.filter((project) => {
        return project.languages.some(language => language.toLowerCase().includes(searchTerm.toLowerCase()));
    });

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    }

    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Welcome />} /> 
                    <Route path="/projects" element={  
                        <>
                            <input type="text" className="searchInput" placeholder="Search by language..." value={searchTerm} onChange={handleSearch} />
                            {filteredProjects.map((project) => (
                                <Project 
                                    key={project.id} 
                                    id={project.id} 
                                    title={project.title} 
                                    description={project.description} 
                                    images={project.images}  
                                    languages={project.languages}
                                />
                            ))}
                        </>
                    }/>
                    <Route path="/school-projects" element={
                        <>
                            <input type="text" className="searchInput" placeholder="Search by language..." value={searchTerm} onChange={handleSearch} />
                            {schoolProjects.map((project) => (
                                <Project 
                                    key={project.id} 
                                    id={project.id} 
                                    title={project.title} 
                                    description={project.description} 
                                    images={project.images}  
                                    languages={project.languages}
                                />
                            ))}
                        </>
                    }/>
                    <Route path="/personal-projects" element={
                        <>
                            <input type="text" className="searchInput" placeholder="Search by language..." value={searchTerm} onChange={handleSearch} />
                            {personalProjects.map((project) => (
                                <Project 
                                    key={project.id} 
                                    id={project.id} 
                                    title={project.title} 
                                    description={project.description} 
                                    images={project.images}  
                                    languages={project.languages}
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