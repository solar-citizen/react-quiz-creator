import { combineReducers } from 'redux';
import quizReducer from './quiz';
import quizCreateReducer from './quizCreate';
import authReducer from './auth';

export default combineReducers({
  quiz: quizReducer,
  quizCreate: quizCreateReducer,
  auth: authReducer,
});
