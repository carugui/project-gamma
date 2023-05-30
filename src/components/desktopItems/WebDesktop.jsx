import React from 'react'
import IconWeb from "../svg/IconWeb";
import Draggable from 'react-draggable'

function WebDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef}>
            
                <a href="instagram.com"><IconWeb></IconWeb></a>
                <a href=""><h1 className="h5">{props.text}</h1></a>
                
            </div>
        </Draggable>

    )
}

export default WebDesktop;