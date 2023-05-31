import { Link } from 'react-router-dom';
import './Button.scss';

function Button(props) {
    return (
        <>
            {props.link ? 
                <Link to={props.goTo} target={props.target ? props.target : '_self'} className={`btn linkAsBtn ${props.optionalClasses} ${props.type === '' ? '' : `btn--${props.type}`} ${props.size !== 'regular' ? `btn--${props.size}` : '' }`}>
                    {props.text === '' ? '' : props.text}
                </Link>
            :
                <button onClick={props.handleClick} className={`btn ${props.optionalClasses} ${props.type === '' ? '' : `btn--${props.type}`} ${props.size !== 'regular' ? `btn--${props.size}` : '' }`} type="button" disabled={props.status === 'disabled' ? true : false}>
                    {props.text === '' ? '' : props.text}
                </button>
            }
        </>
    )
}

export default Button