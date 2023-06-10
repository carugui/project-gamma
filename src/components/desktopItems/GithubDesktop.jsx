import React from 'react'
import IconGithub from "../svg/IconGithub";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function GithubDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div className="desktopItem" ref={nodeRef}>
            
                <a href="https://github.com/carugui"><IconGithub></IconGithub></a>
                <a href="https://github.com/carugui"><h1 className="h5">Mi GitHub</h1></a>
                
            </div>
        </Draggable>

    )
}

export default GithubDesktop;