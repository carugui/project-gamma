import './style.scss';




const Nav = ()=> {
    return <>

        <header className="Menu">
        <h2 className="Menu-h1">
            <a href="#" className="Menu-a">
                Suscribete 
            </a>
        </h2> 
        <button className="Nav-button"> 
        <svg className="Menu-svg" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg> 
        </button>
        <nav className="Menu-nav">
            <ul className="Menu-ul">
                <li className="Menu-li"><a href="#" className="menu-1">Item-1</a></li>
                <li className="Menu-li"><a href="#" className="menu-2">Item-2</a></li>
                <li className="Menu-li"><a href="#" className="menu-3">Item-3</a></li>
                <li className="Menu-li"><a href="#" className="menu-4">Item-4</a></li>
                <li className="Menu-li"><a href="#" className="menu-5">Item-5</a></li>

            </ul>
        </nav>
        	
{/* comentarios de React JSX */}	
{/*toca copiar un archivo reset en index.css*/ }

        </header>
            
             


      
        

        

        

    
        
    </>
}
export default Nav