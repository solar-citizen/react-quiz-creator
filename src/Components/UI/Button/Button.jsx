import classes from './Button.module.css';

const Button = (props) => {
  // именно для массива нужно было тело функции
  // '=> { return () }', а не '=> ()'
  const cls = [classes.Button, classes[props.type]];

  return (
    <button
      className={cls.join(' ')}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;
