import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import api from "./services/api";

import "./App.css";

function App() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        api.get("projects").then((response) => {
            console.log(response);
            setProjects(response.data);
        });
    }, []);

    async function handleAddProject() {
        const response = await api.post("projects", {
            title: `Novo projeto ${Date.now()}`,
            owner: "Nelson",
        });

        const project = response.data;

        setProjects([...projects, project]);
    }
    return (
        <>
            <Header title="ReactJS" />

            <button type="button" onClick={handleAddProject}>
                Adicionar projeto
            </button>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
        </>
    );
}

export default App;
