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
            <Window title={selectedProject.title} type='project-single' position='center' clickTo={projectSingleClose} content =
                
                {<Fragment>

                    <div className="content__1"><IconInfo /></div>
                    <div className='content__2'>
                        <p className="fs-big">{selectedProject.description}</p>
                        <p className="fs-big">Visita la página web <a href={selectedProject.website} target='_blank'>aquí</a></p>
                    </div>
                    
                    <a className="content__3" href={selectedProject.website} target='_blank'><img  src={selectedProject.image} alt={selectedProject.title} /></a>
                    <div className="content__4">
                        <Button link='true' target='_blank' text='Guía de estilos' goTo={selectedProject.styleguide}/>
                        <Button link='true' target='_blank' text='Figma' goTo={selectedProject.figma}/>
                    </div>
                    <div className="content__5">
                        <Button text='Volver' type='secondary' handleClick={projectSingleClose}/>
                        
                    </div>

                </Fragment>}
                
            /> 
        }
    </>
}