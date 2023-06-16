import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import IconFolder from "../svg/IconFolder";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function FolderDesktop(props) {
    const nodeRef = React.useRef(null);

    const [isDraggable, setIsDraggable] = useState(false);


    // Comprobar el tamaño de la ventana, si es menor de 800px se usa la librería Draggable, si no, no se usa.
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
                
                    <div className="desktopItem" ref={nodeRef}>

                        <Link to={props.goTo} onClick={props.clickTo} target={props.target ? props.target : '_self'}>
                            <IconFolder></IconFolder>
                            <h1 className="h5">{props.text}</h1>
                        </Link>
                        
                    </div>
                </Draggable>
            )}
            {!isDraggable &&
                <div className="desktopItem" ref={nodeRef}>

                    <Link to={props.goTo} onClick={props.clickTo} target={props.target ? props.target : '_self'}>
                        <IconFolder></IconFolder>
                        <h1 className="h5">{props.text}</h1>
                    </Link>
                        
                </div>
            }

        </div>

    );
};

export default FolderDesktop;