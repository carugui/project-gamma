import React from 'react'
import IconGithub from "../svg/IconGithub";
import Draggable from 'react-draggable'

function GithubDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef}>
            
                <a href="instagram.com"><IconGithub></IconGithub></a>
                <a href=""><h1 className="h5">Github</h1></a>
                
            </div>
        </Draggable>

    )
}

export default GithubDesktop;