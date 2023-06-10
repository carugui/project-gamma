import { Link } from "react-router-dom";
import { PROJECTS } from "../../public/projects";
import WebDesktop from "../components/desktopItems/WebDesktop";
import Button from "../components/button/Button";
import Window from "../components/window/Window";

export default function ProjectsList() {
    const listado = PROJECTS;

    return <>

        <Window title='Proyectos' size="medium" goTo="/" content =
        
            {listado.map(proyecto =>

                <WebDesktop
                    featured={proyecto.featured}
                    text={proyecto.title}
                    goTo={ '/proyectos/' + proyecto.id}
                >
                {/* {proyecto.links.map(link => <Button type="secondary">{ link.name }</Button>)} */}
                    
                </WebDesktop>

            )}
        
        />

    </>
}