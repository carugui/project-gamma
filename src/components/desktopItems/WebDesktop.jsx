import React from 'react'
import { Link } from 'react-router-dom';
import IconWeb from "../svg/IconWeb";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function WebDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        
        <div className='desktopItem' ref={nodeRef}>

            <Link to={props.goTo} target={props.target ? props.target : '_self'}>
                <IconWeb></IconWeb>
                <h1 className="h5">{props.text}</h1>
            </Link>
            
        </div>
        

    )
}

export default WebDesktop;