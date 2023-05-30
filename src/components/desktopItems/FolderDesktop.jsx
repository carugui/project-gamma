import React from 'react'
import IconFolder from "../svg/IconFolder";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function FolderDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div className="desktopItem" ref={nodeRef}>
            
                <a href="instagram.com"><IconFolder></IconFolder></a>
                <a href=""><h1 className="h5">{props.text}</h1></a>
                
            </div>
        </Draggable>

    )
}

export default FolderDesktop;