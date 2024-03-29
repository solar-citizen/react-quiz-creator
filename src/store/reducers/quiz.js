import {
  FETCH_QUIZES_ERROR,
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZ_SUCCESS,
  FINISH_QUIZ,
  QUIZ_SET_STATE,
  QUIZ_NEXT_QUESTION,
  QUIZ_RETRY,
} from '../actions/actionTypes';

const initialState = {
  // QuizList.jsx
  quizes: [],
  loading: false,
  error: null,
  // Quiz.jsx
  quiz: null,
  activeQuestion: 0,
  answerState: null,
  isFinished: false,
  results: {},
};

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;

    case FETCH_QUIZES_START:
      return {
        ...state,
        loading: true,
      };

    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        loading: false,
        quizes: action.quizes,
      };

    case FETCH_QUIZES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case FETCH_QUIZ_SUCCESS:
      return {
        ...state,
        loading: false,
        quiz: action.quiz,
      };

    case QUIZ_SET_STATE:
      return {
        ...state,
        answerState: action.answerState,
        results: action.results,
      };

    case FINISH_QUIZ:
      return {
        ...state,
        isFinished: true,
      };

    case QUIZ_NEXT_QUESTION:
      return {
        ...state,
        answerState: null,
        activeQuestion: action.questionNumber,
      };

    case QUIZ_RETRY: {
      return {
        ...state,
        activeQuestion: 0,
        answerState: null,
        isFinished: false,
        results: {},
      };
    }
  }
}
