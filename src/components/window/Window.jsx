import './Window.scss';
import React from 'react'
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable'
import IconCross from '../svg/IconCross';

function Window(props) {
    const nodeRef = React.useRef(null);
    return (
        <Draggable nodeRef={nodeRef}>
            <div className={`window ${props.size === '' ? '' : `window__size-${props.size}`} ${props.position === '' ? '' : `window__position--${props.position}`}`} ref={nodeRef}>

                <header>
                    <IconCross className="iconcross" goTo={props.goTo} clickTo={props.clickTo}/>
                    <h2 className='h5'>{props.title}</h2>
                </header>

                <div className={`window__content ${props.type === '' ? '' : `window__content--${props.type}`}`}>
                    {props.content}
                </div>
                
            </div>
        </Draggable>

    )
}

export default Window;