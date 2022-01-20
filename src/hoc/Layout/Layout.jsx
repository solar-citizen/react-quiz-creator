import React, { Component } from 'react';
import classes from './Layout.module.css';
import Quiz from '../../Containers/Quiz/Quiz';
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle';

class Layout extends Component {
  state = {
    menu: false,
  };

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu,
    });
  };

  render() {
    return (
      <div className={classes.Layout}>
        <MenuToggle
          onToggle={this.toggleMenuHandler}
          isOpen={this.state.menu}
        />

        <Quiz />
      </div>
    );
  }
}

export default Layout;
