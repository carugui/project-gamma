import React from 'react'
import IconMail from "../svg/IconMail";
import Draggable from 'react-draggable'

function MailDesktop(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div ref={nodeRef}>
            
                <a href="instagram.com"><IconMail></IconMail></a>
                <a href=""><h1 className="h5">{props.text}</h1></a>
                
            </div>
        </Draggable>

    )
}

export default MailDesktop;