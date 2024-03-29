import React, { Component } from 'react';
import classes from './QuizCreator.module.css';
import Button from '../../Components/UI/Button/Button';
import {
  createControl,
  validate,
  validateForm,
} from '../../form/formFramework';
import Input from '../../Components/UI/Input/Input';
import { Auxiliary } from '../../hoc/Auxiliary/Auxiliary';
import { Select } from '../../Components/UI/Select/Select';
import axios from '../../axios/axios-quiz';

// state.formControls.option1/2/3/4
function createOptionControl(optionNumber) {
  return createControl(
    {
      label: `Option ${optionNumber}`,
      errorMessage: 'Option cannot be empty',
      id: optionNumber,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: 'Enter the question',
        errorMessage: 'Question cannot be empty',
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
    option4: createOptionControl(4),
  };
}

export default class QuizCreator extends Component {
  state = {
    quiz: [],
    formControls: createFormControls(),
    rightAnswerId: 1,
    isFormValid: false,
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = (event) => {
    event.preventDefault();

    // alternative:
    // const quiz = this.state.quiz.concat();
    const quiz = [...this.state.quiz];
    const index = quiz.length + 1;

    const { question, option1, option2, option3, option4 } =
      this.state.formControls;

    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        {
          text: option1.value,
          id: option1.id,
        },
        {
          text: option2.value,
          id: option2.id,
        },
        {
          text: option3.value,
          id: option3.id,
        },
        {
          text: option4.value,
          id: option4.id,
        },
      ],
    };
    quiz.push(questionItem);

    this.setState({
      quiz,
      formControls: createFormControls(),
      rightAnswerId: 1,
      isFormValid: false,
    });
  };

  createQuizHandler = async (event) => {
    event.preventDefault();

    try {
      await axios.post('/quizes.json', this.state.quiz);
      // обнуление стейта после
      // отправки теста
      this.setState({
        quiz: [],
        formControls: createFormControls(),
        rightAnswerId: 1,
        isFormValid: false,
      });
    } catch (error) {
      console.log(error);
    }
  };

  onChangeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];

      return (
        <Auxiliary key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.onChangeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </Auxiliary>
      );
    });
  }

  selectChangeHandler = (event) => {
    this.setState({
      rightAnswerId: +event.target.value,
    });
  };

  render() {
    const select = (
      <Select
        label='Choose correct answer: '
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
          { text: 4, value: 4 },
        ]}
      />
    );

    return (
      <div className={classes.QuizCreator}>
        <div>
          <h1>Create Quiz</h1>

          <form onSubmit={this.submitHandler}>
            {this.renderControls()}

            {select}

            <Button
              type='primary'
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              Add Question
            </Button>
            <Button
              type='success'
              onClick={this.createQuizHandler}
              disabled={this.state.quiz.length === 0}
            >
              Create Quiz
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
