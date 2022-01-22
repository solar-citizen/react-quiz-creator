import classes from './Auth.module.css';
import Button from '../../Components/UI/Button/Button';
import Input from '../../Components/UI/Input/Input';

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
          <Input label='Email' />
          <Input label='Password' errorMessage={'Test'} />

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
