import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
// import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = props;
  }

  handleClose = () => this.setState({ open: false });

  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    return (
      <div>
        <Drawer
          width={280}
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose}>Projects</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Kodo No Boken</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Art</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
