import React from "react"
import Layout from "../layout/Layout"
import projects from "../json/projects.json"

export default function Blog() {


  return (
    <Layout>
      <h1 className="project-heading">My Projects</h1>

      {projects.map((project => {
        return (<div className="projects-container" key={project.name}><br/>
          
          <h1 style={{fontSize:16}} className="project-item">{project.name}</h1><br/>
          <img style={{marginBottom: 20}} className="project-item" src={project.image} alt={project.name}/>
          <p className="project-item">{project.description}</p>
          <div className="project-item">
            <a href={project.github}><button className="projects-btn">GitHub</button></a>
            <a href={project.live}><button className="projects-btn">Live</button></a>
          </div>

        </div>)
      }))}
    </Layout>
  )
}