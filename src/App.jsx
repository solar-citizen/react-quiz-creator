import Layout from './hoc/Layout/Layout';
import { Route, Switch } from 'react-router-dom';
import Auth from '../src/Containers/Auth/Auth';
import Quiz from '../src/Containers/Quiz/Quiz';
import QuizCreator from '../src/Containers/QuizCreator/QuizCreator';
import QuizList from '../src/Containers/QuizList/QuizList';

const App = () => {
  return (
    <Layout>
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/quiz-creator' component={QuizCreator} />
        <Route path='/quiz/:id' component={Quiz} />
        <Route path='/' exact component={QuizList} />
      </Switch>
    </Layout>
  );
};

export default App;
