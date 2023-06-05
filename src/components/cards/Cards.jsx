import './cards.scss';
import React from 'react';


const Cards = (props) => {


    return (
      <>
        
      <article className='card-padre'style={{width: '33vw'}}>
          
            <h1 className='vertical-text'>{props.title}</h1>
          
          <image className="card__img"><img src={props.image} alt={props.alt} />
          </image>
    
          <p className='paragraph'>{props.paragraph}</p>
         
           
          <div>
                <button className='buttonprincipal'>Ver más</button>
          </div>
      </article>       
      </>
    );
  };
//poner esto en alguna parte por seguridad=>   dangerouslySetInnerHTML={{__html:props.paragraph}}
  export default  Cards;

