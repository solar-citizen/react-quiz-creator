import classes from './Drawer.module.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { Fragment } from 'react';
import { NavLink } from 'react-router-dom';

const Drawer = (props) => {
  const cls = [classes.Drawer];

  if (!props.isOpen) {
    cls.push(classes.close);
  }

  const linkClickHandler = () => {
    props.onClose();
  };

  const renderLinks = (links) => {
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

  const links = [{ to: '/', label: 'List', exact: true }];

  if (props.isAuthenticated) {
    links.push(
      { to: '/quiz-creator', label: 'Create Test', exact: false },
      { to: '/logout', label: 'Log out', exact: false }
    );
  } else {
    links.push({ to: '/auth', label: 'Log in', exact: false });
  }

  return (
    <Fragment>
      <nav className={cls.join(' ')}>
        <ul>{renderLinks(links)}</ul>
      </nav>
      {props.isOpen ? <Backdrop onClick={props.onClose} /> : null}
    </Fragment>
  );
};

export default Drawer;
