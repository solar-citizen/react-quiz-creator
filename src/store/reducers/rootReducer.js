import { combineReducers } from 'redux';
import quizReducer from './quiz';
import quizCreateReducer from './quizCreate';

export default combineReducers({
  quiz: quizReducer,
  quizCreate: quizCreateReducer,
});
