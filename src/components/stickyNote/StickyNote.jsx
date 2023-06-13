import React from 'react'
import Draggable from 'react-draggable'
import './StickyNote.scss'

function StickyNote(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div className={`${props.optionalClasses} stickyNote `} ref={nodeRef}>
            
                <p>{props.text}</p>
                
            </div>
        </Draggable>

    )
}

export default StickyNote;