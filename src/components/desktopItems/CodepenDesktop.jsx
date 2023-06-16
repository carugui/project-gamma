import React from 'react'
import IconCodepen from "../svg/IconCodepen";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function CodepenDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        
        <div className="desktopItem" ref={nodeRef}>
        
            <a href="https://codepen.io/carugui" target="_blank"><IconCodepen></IconCodepen></a>
            <a href="https://codepen.io/carugui" target="_blank"><h1 className="h5">CodePen</h1></a>
            
        </div>
        

    )
}

export default CodepenDesktop;