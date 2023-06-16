import React, { useEffect, useState } from 'react';
import IconMail from "../svg/IconMail";
import Draggable from 'react-draggable'
import './DesktopItems.scss'

function MailDesktop(props) {
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
                    <div className="desktopItem" ref={nodeRef}>
                    
                        <a href="mailto:soy.carugui@gmail.com"><IconMail></IconMail></a>
                        <a href="mailto:soy.carugui@gmail.com"><h1 className="h5">{props.text}</h1></a>
                        
                    </div>
                </Draggable>
            )}
            {!isDraggable &&
                <div className="desktopItem" ref={nodeRef}>
                    
                    <a href="mailto:soy.carugui@gmail.com"><IconMail></IconMail></a>
                    <a href="mailto:soy.carugui@gmail.com"><h1 className="h5">{props.text}</h1></a>
                
                </div>
            }
        </div>

    )
}

export default MailDesktop;