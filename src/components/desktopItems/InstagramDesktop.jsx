import React from 'react'
import IconInstagram from '../svg/IconInstagram';
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function InstagramDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div className="desktopItem" ref={nodeRef}>
            
                <a href="https://www.instagram.com/carugui.jpg/" target="_blank"><IconInstagram></IconInstagram></a>
                <a href="https://www.instagram.com/carugui.jpg/" target="_blank"><h1 className="h5">Instagram</h1></a>
                
            </div>
        </Draggable>

    )
}

export default InstagramDesktop;