import React from 'react'
import IconFile from "../svg/IconFile";
import Draggable from 'react-draggable'

function FileDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef}>
            
                <a href="instagram.com"><IconFile></IconFile></a>
                <a href=""><h1 className="">{props.text}</h1></a>
                
            </div>
        </Draggable>

    )
}

export default FileDesktop;