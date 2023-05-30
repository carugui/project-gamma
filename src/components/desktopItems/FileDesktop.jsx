import React from 'react'
import IconFile from "../svg/IconFile";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function FileDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div className="desktopItem" ref={nodeRef}>
            
                <a href="instagram.com"><IconFile></IconFile></a>
                <a href=""><h1 className="h5">{props.text}</h1></a>
                
            </div>
        </Draggable>

    )
}

export default FileDesktop;