import Layout from './hoc/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import Auth from '../src/Containers/Auth/Auth';
import Quiz from '../src/Containers/Quiz/Quiz';
import QuizCreator from '../src/Containers/QuizCreator/QuizCreator';
import QuizList from '../src/Containers/QuizList/QuizList';

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path='/auth' element={<Auth />} />
        <Route path='/quiz-creator' element={<QuizCreator />} />
        <Route path='/quiz/:id' element={<Quiz />} />
        <Route path='/' element={<QuizList />} />
      </Routes>
    </Layout>
  );
};

export default App;
