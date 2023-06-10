import { Fragment } from "react";
import Window from "../components/window/Window";
import GithubDesktop from "../components/desktopItems/GithubDesktop";



export default function SocialMediaList({ onClose }) {

    return <>

        <Window title="Redes Sociales" size="medium" clickTo={onClose} content=
            {<Fragment>
                <GithubDesktop />
                <GithubDesktop />
            </Fragment>}
        />
    </>
}