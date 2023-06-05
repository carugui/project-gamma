import './Window.scss';
import React from 'react'
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable'

function Window(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div className={`window ${props.size === '' ? '' : `window__size-${props.size}`}`} ref={nodeRef}>

                <header>
                    <h2 className='h5'>{props.title}</h2>
                </header>

                <div className='window__content'>
                    {props.content}
                </div>
                
            </div>
        </Draggable>

    )
}

export default Window;