import React from 'react'
import IconMail from "../svg/IconMail";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function MailDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div className="desktopItem" ref={nodeRef}>
            
                <a href="mailto:soy.carugui@gmail.com"><IconMail></IconMail></a>
                <a href="mailto:soy.carugui@gmail.com"><h1 className="h5">{props.text}</h1></a>
                
            </div>
        </Draggable>

    )
}

export default MailDesktop;