import { Fragment } from "react";
import { Link, useParams } from "react-router-dom"
import { PROJECTS } from "../../public/projects";
import Window from "../components/window/Window";

export default function ProjectSingle() {
    const params = useParams();
    const listado = PROJECTS;

    const listadoSeleccionado = listado.find(project => project.id === params.projectId);

    return <>


        <Window title={listadoSeleccionado.title} content =
    
            
            
            {<Fragment>

                <img width="200px" src={listadoSeleccionado.image} alt={listadoSeleccionado.title} />

                { listadoSeleccionado.links.map(link => 
                            
                            <a href={link.url}>
                                <img src={link.img}></img>
                            </a>
                        
                )}
                
                <h1>Hola</h1>

            </Fragment>}
        

        />
    </>
}