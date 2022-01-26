import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './QuizList.module.css';
import axios from 'axios';

export default class QuizList extends Component {
  state = {
    quizes: [],
  };

  renderQuizes = () => {
    return this.state.quizes.map((quiz) => {
      return (
        <li key={quiz.id}>
          <NavLink to={'/quiz/' + quiz.id}>{quiz.name}</NavLink>
        </li>
      );
    });
  };

  async componentDidMount() {
    try {
      const response = await axios.get(
        'https://react-quiz-2-929a0-default-rtdb.europe-west1.firebasedatabase.app/quizes.json'
      );

      const quizes = [];

      Object.keys(response.data).forEach((key, index) => {
        quizes.push({
          id: key,
          name: `Quiz #${index + 1}`,
        });
      });

      this.setState({ quizes });
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div className={classes.QuizList}>
        <div>
          <h1>List of Quizes</h1>

          <ul>{this.renderQuizes()}</ul>
        </div>
      </div>
    );
  }
}
