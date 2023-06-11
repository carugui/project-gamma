import React, { useState } from 'react';
import { Link, useParams } from "react-router-dom"
import { PROJECTS } from "../../public/projects";
import WebDesktop from "../components/desktopItems/WebDesktop";
import Button from "../components/button/Button";
import Window from "../components/window/Window";
import { Fragment } from "react";
import IconInfo from '../components/svg/IconInfo';
import ProjectSingle from "./ProjectSingle";

export default function ProjectsList() {
    const listado = PROJECTS;

    /* FUNCIONAMIENTO VENTANA REDES SOCIALES */

    const [selectedProject, setSelectedProject] = useState(null);

    const projectSingleOpen = (project) => {
        setSelectedProject(project);
    };

    const projectSingleClose = () => {
        setSelectedProject(null);
    };
    return <>

        <Window title='Proyectos' size="medium" goTo="/" content =
        
            {listado.map(proyecto =>

                <WebDesktop
                    key={proyecto.id}
                    featured={proyecto.featured}
                    text={proyecto.title}
                    
                    clickTo={() => projectSingleOpen(proyecto)} 
                >
                {/* {proyecto.links.map(link => <Button type="secondary">{ link.name }</Button>)} */}
                    
                </WebDesktop>

            )}
        
        />
        {selectedProject && 
            <Window title={selectedProject.title} type='project-single' clickTo={projectSingleClose} content =
                
                {<Fragment>

                    <div className="content__1"><IconInfo /></div>
                    <p className="content__2">{selectedProject.description}</p>
                    <img className="content__3" src={selectedProject.image} alt={selectedProject.title} />
                    <div className="content__4">
                        <Button link='true' text='Visitar web'/>
                        <Button text='Volver' type='secondary' handleClick={projectSingleClose}/>
                    </div>

                </Fragment>}
                
            /> 
        }
    </>
}