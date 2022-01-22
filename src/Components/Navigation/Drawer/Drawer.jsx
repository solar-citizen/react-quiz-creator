import classes from './Drawer.module.css';
import Backdrop from '../../UI/Button/Backdrop/Backdrop';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'List' },
  { to: '/auth', label: 'Authorization' },
  { to: '/quiz-creator', label: 'Create Test' },
];

const Drawer = (props) => {
  const cls = [classes.Drawer];

  if (!props.isOpen) {
    cls.push(classes.close);
  }

  const linkClickHandler = () => {
    props.onClose();
  };

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <NavLink
            to={link.to}
            activeclassname={classes.active}
            onClick={linkClickHandler}
          >
            {link.label}
          </NavLink>
        </li>
      );
    });
  };

  return (
    <Fragment>
      <nav className={cls.join(' ')}>
        <ul>{renderLinks()}</ul>
      </nav>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </Fragment>
  );
};

export default Drawer;
