import React from 'react'
import { Link } from 'react-router-dom';
import IconFolder from "../svg/IconFolder";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function FolderDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
        
            <div className="desktopItem" ref={nodeRef}>

                <Link to={props.goTo} onClick={props.clickTo} target={props.target ? props.target : '_self'}>
                    <IconFolder></IconFolder>
                    <h1 className="h5">{props.text}</h1>
                </Link>
                
            </div>
        </Draggable>

    )
}

export default FolderDesktop;