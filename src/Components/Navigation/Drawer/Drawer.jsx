import classes from './Drawer.module.css';

const links = [1, 2, 3];

const Drawer = (props) => {
  const cls = [classes.Drawer];

  if (!props.isOpen) {
    cls.push(classes.close);
  }

  const renderLinks = () => {
    return links.map((link, index) => {
      return (
        <li key={index}>
          <a href='sampleHref'>Link {link}</a>
        </li>
      );
    });
  };

  return (
    <nav className={cls.join(' ')}>
      <ul>{renderLinks()}</ul>
    </nav>
  );
};

export default Drawer;
