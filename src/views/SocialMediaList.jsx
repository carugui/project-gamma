import { Fragment } from "react";
import Window from "../components/window/Window";
import GithubDesktop from "../components/desktopItems/GithubDesktop";
import InstagramDesktop from "../components/desktopItems/InstagramDesktop";
import CodepenDesktop from "../components/desktopItems/CodepenDesktop";



export default function SocialMediaList({ onClose }) {

    return <>

        <Window title="Redes Sociales" size="medium" clickTo={onClose} content=
            {<Fragment>
                <GithubDesktop />
                <InstagramDesktop />
                <CodepenDesktop />
            </Fragment>}
        />
    </>
}