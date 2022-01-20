import React, { Component } from 'react';
import classes from './Quiz.module.css';
import ActiveQuiz from '../../Components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../Components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
  state = {
    quiz: [
      {
        id: 1,
        question: 'What is the color of the sky?',
        answers: [
          { text: 'Black', id: 1 },
          { text: 'Blue', id: 2 },
          { text: 'Red', id: 3 },
          { text: 'Green', id: 4 },
        ],
        rightAnswerId: 2,
      },
      {
        id: 2,
        question: 'What is the capital of Great Britain?',
        answers: [
          { text: 'Oslo', id: 1 },
          { text: 'Paris', id: 2 },
          { text: 'London', id: 3 },
          { text: 'Kyiv', id: 4 },
        ],
        rightAnswerId: 3,
      },
    ],
    activeQuestion: 0,
    answerState: null,
    isFinished: false,
    results: {},
  };

  onAnswerClickHandler = (answerId) => {
    // если уже есть правильный ответ на текущий вопрос
    // клики блокируются, пока не отрендерится новый вопрос
    /// без этого можно было прокликивать правильный ответ на текущем вопросе
    /// несколько раз, при условии, что в последующих вопрос правильный ответ
    /// находится на том же месте (имеет тот же rightAnswerId), он принимался
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if (this.state.answerState[key] === 'success') {
        return;
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success';
      }

      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          });
        }

        window.clearTimeout(timeout);
      }, 750);
    } else {
      results[question.id] = 'error';
      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      });
    }
  };

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    });
  };

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions:</h1>

          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Quiz;
