import './portrait.scss';


    const Portrait = () => {
      return (
        <>
         <h1>Hola soy tu segundo componente</h1>
         
         

        <div className='padre'>
            <div className='vertical-text'>
                <h1>Front-end Developer and Visual Artist</h1>
            </div>
            
            <div className='retrato'>
                <img src="../public/imagesSVG/retrato.svg" alt="Retrato" />
                <p>
                 Mi nombre es Andrea Casanova soy apasionada del arte y el diseño, Artista Visual multidisciplinar, tengo más de diez años de trayectoria, muchas exposiciones y algunos premios.

                Mi personalidad es inquieta y me gusta estar en constante aprendizaje, por eso comencé a incursionar por el diseño web y hoy me especializo en desarrollo Front end, diseño UX UI y marketing digital.

                Me encanta poner mis conocimientos al servicio de las necesidades de otros artistas y fotógrafos y ayudarlos a destacar sus obras, no obstante, estoy capacitada para desarrollar cualquier tipo de proyecto web.

 
            </p>
            </div>
            <div className='vestido'>
                <img src="../public/imagesSVG/dressyellow.svg" alt="otro retrato" />
            </div>
        </div>
        <div>
            
        </div>
        
        </>
      );
    };
    
    export default Portrait;
    


