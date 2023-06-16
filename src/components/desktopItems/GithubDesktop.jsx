import React from 'react'
import IconGithub from "../svg/IconGithub";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function GithubDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        
        <div className="desktopItem" ref={nodeRef}>
        
            <a href="https://github.com/carugui" target="_blank"><IconGithub></IconGithub></a>
            <a href="https://github.com/carugui" target="_blank"><h1 className="h5">Mi GitHub</h1></a>
            
        </div>
        

    )
}

export default GithubDesktop;