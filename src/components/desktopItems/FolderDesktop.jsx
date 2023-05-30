import React from 'react'
import IconFolder from "../svg/IconFolder";
import Draggable from 'react-draggable'

function FolderDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef}>
            
                <a href="instagram.com"><IconFolder></IconFolder></a>
                <a href=""><h1 className="h5">{props.text}</h1></a>
                
            </div>
        </Draggable>

    )
}

export default FolderDesktop;