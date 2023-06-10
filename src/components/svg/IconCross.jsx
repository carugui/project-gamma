import {Route, Link, Routes, useNavigate} from 'react-router-dom';

function IconCross(props) {

    return (

        <Link to={props.goTo} onClick={props.clickTo} className={props.className} target={props.target ? props.target : '_self'}>
        
            <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="m2.121 2 10 10M2 12 12 2" stroke="#004999" strokeWidth="3" strokeLinecap="round"/>
            </svg>

        </Link>

    )
}

export default IconCross;