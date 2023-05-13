import "./Button.scss";

function Button(props) {
  const { importante, type, hover, transform } = props;
  let className = 'button';
  

  if (importante) {
    className += ' importante';
  }

  if (type === 'ghost') {
    className += ' ghost';
  }
  
  if (hover === 'hover') {
    className += ' hover';
  }

  if (transform ){
    className += ' transform';
  }

  return <button className={className}>Soy un botón</button>;
}

export default Button;

