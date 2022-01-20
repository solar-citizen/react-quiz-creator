import React, { Component } from 'react';
import classes from './Layout.module.css';
import Quiz from '../../Containers/Quiz/Quiz';
import MenuToggle from '../../Components/Navigation/MenuToggle/MenuToggle';
import Drawer from '../../Components/Navigation/Drawer/Drawer';

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
        <Drawer isOpen={this.state.menu} />

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
