import classes from './Layout.module.css';
import Quiz from '../../Containers/Quiz/Quiz';

const Layout = () => {
  return (
    <div className={classes.Layout}>
      <Quiz />
    </div>
  );
};

export default Layout;
