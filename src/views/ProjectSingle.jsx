import { Fragment } from "react";
import { Link, useParams } from "react-router-dom"
import { PROJECTS } from "../../public/projects";
import Window from "../components/window/Window";
import IconInfo from "../components/svg/IconInfo";
import Button from "../components/button/Button";

export default function ProjectSingle() {
    const params = useParams();
    const listado = PROJECTS;

    const listadoSeleccionado = listado.find(project => project.id === params.projectId);

    return <>


        <Window title={listadoSeleccionado.title} type='project-single' content =
    
            
            
            {<Fragment>

                <div className="content__1"><IconInfo /></div>
                <p className="content__2">{listadoSeleccionado.description}</p>
                <img className="content__3" width="200px" src={listadoSeleccionado.image} alt={listadoSeleccionado.title} />
                <div className="content__4">
                    <Button link='true' text='Visitar web'/>
                    <Button text='Volver' type='secondary'/>
                </div>

            </Fragment>}
        

        />
    </>
}