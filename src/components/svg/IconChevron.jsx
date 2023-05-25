function IconChevron(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" 
        height={48}
        width={48} 
        viewBox="0 -960 960 960"
        //className={`svgicon ${className ? className : '' } `}
        //Si tiene el parámetro de ClassName, pon el className, sino déjalo en blanco ''
        //className={`svg--${size ? `svg--${size}`: ''}`}
        {...props}
        >
            <path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"
            fill="currentColor"/>
        </svg>
    )
}

export default IconChevron;