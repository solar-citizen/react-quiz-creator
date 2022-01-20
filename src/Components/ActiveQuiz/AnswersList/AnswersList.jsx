import classes from './AnswersList.module.css';
import AnswerItem from './AnswerItem/AnswerItem';

const AnswersList = (props) => (
  <ul className={classes.AnswersList}>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          answer={answer}
          key={index}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null} //условие, потому что по умолчанию <answerState: null>
        />
      );
    })}
  </ul>
);

export default AnswersList;
