import "./Button.scss";

function Button(props) {
  const { importante, type } = props;
  let className = 'button';

  if (importante) {
    className += ' importante';
  }

  if (type === 'ghost') {
    className += ' ghost';
  }

  return <button className={className}>Soy un botón</button>;
}

export default Button;
