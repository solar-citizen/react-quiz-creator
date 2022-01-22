import classes from './Auth.module.css';
import Button from '../../Components/UI/Button/Button';

const Auth = () => {
  const loginHandler = () => {};

  const registerHandler = () => {};

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.Auth}>
      <div>
        <h1>Authorization</h1>

        <form className={classes.AuthForm} onSubmit={submitHandler}>
          <input type='text' />
          <input type='text' />

          <Button type='success' onClick={loginHandler}>
            Log in
          </Button>
          <Button type='primary' onClick={registerHandler}>
            Register
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
