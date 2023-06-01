import { Link } from "react-router-dom";
import { PROJECTS } from "../../public/projects";
import WebDesktop from "../components/desktopItems/WebDesktop";
import Button from "../components/button/Button";

export default function ProjectsList() {
    const listado = PROJECTS;

    return <>
    {listado.map(proyecto =>

        <div>

            <WebDesktop
                featured={proyecto.featured}
                text={proyecto.title}
                goTo={ '/projects/' + proyecto.id}
            >
            {/* {proyecto.links.map(link => <Button type="secondary">{ link.name }</Button>)} */}
                
            </WebDesktop>

        </div>)}

    </>
}