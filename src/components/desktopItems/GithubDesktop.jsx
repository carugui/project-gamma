import React from 'react'
import IconGithub from "../svg/IconGithub";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function GithubDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div className="desktopItem" ref={nodeRef}>
            
                <a href="instagram.com"><IconGithub></IconGithub></a>
                <a href=""><h1 className="h5">Github</h1></a>
                
            </div>
        </Draggable>

    )
}

export default GithubDesktop;