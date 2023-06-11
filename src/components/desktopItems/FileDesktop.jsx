import React from 'react'
import { Link } from 'react-router-dom';
import IconFile from "../svg/IconFile";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function FileDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div className="desktopItem" ref={nodeRef}>

                <Link to={props.goTo} onClick={props.clickTo} target={props.target ? props.target : '_self'}>
                
                    <IconFile></IconFile>
                    <h1 className="h5">{props.text}</h1>
                
                </Link>
                
            </div>
        </Draggable>

    )
}

export default FileDesktop;