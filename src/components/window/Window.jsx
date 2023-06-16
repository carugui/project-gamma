import './Window.scss';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Draggable from 'react-draggable'
import IconCross from '../svg/IconCross';

function Window(props) {
    const nodeRef = React.useRef(null);

    // Comprobar el tamaño de la ventana, si es menor de 800px se usa la librería Draggable, si no, no se usa.
    const [isDraggable, setIsDraggable] = useState(false);

    useEffect(() => {
        const windowsSize = () => {
            const isMobile = window.innerWidth <= 800;
            setIsDraggable(!isMobile);
        };

        windowsSize();
        window.addEventListener('resize', windowsSize);

        return () => {
            window.removeEventListener('resize', windowsSize);
        };
        
    }, []);


    return (

        <div>

            {isDraggable && (
                <Draggable nodeRef={nodeRef}>
                    <div className={`window ${props.optionalClasses} ${props.size === '' ? '' : `window__size-${props.size}`} ${props.position === '' ? '' : `window__position--${props.position}`}`} ref={nodeRef}>

                        <header>
                            <IconCross className="iconcross" goTo={props.goTo} clickTo={props.clickTo}/>
                            <h2 className='h5'>{props.title}</h2>
                        </header>

                        <div className={`window__content ${props.type === '' ? '' : `window__content--${props.type}`}`}>
                            {props.content}
                        </div>
                        
                    </div>
                </Draggable>
            )}
            {!isDraggable &&

                <div className={`window ${props.optionalClasses} ${props.size === '' ? '' : `window__size-${props.size}`} ${props.position === '' ? '' : `window__position--${props.position}`}`} ref={nodeRef}>

                    <header>
                        <IconCross className="iconcross" goTo={props.goTo} clickTo={props.clickTo}/>
                        <h2 className='h5'>{props.title}</h2>
                    </header>

                    <div className={`window__content ${props.type === '' ? '' : `window__content--${props.type}`}`}>
                        {props.content}
                    </div>

                </div>
            }
            
        </div>

    )
}

export default Window;