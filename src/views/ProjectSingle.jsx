import { Link, useParams } from "react-router-dom"
import { PROJECTS } from "../../public/projects";

export default function ProjectSingle() {
    const params = useParams();
    const listado = PROJECTS;

    const listadoSeleccionado = listado.find(project => project.id === params.projectId);

    return <>
        <h1>{listadoSeleccionado.title}</h1>
        { listadoSeleccionado.links.map(link => <a href={link.url}><img src={link.img}></img></a>) }
    </>
}