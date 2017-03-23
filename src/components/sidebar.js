import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
// import Avatar from 'material-ui/Avatar';
import MenuItem from 'material-ui/MenuItem';
import AppBar from 'material-ui/AppBar';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';

const iconStyles = {
  marginRight: 24,
};

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
          docked={true}
          onRequestChange={(open) => this.setState({open})}
        >
          <AppBar
            title="Yenly Ma"
            iconElementLeft={<IconButton><FontIcon className="material-icons" style={iconStyles}>home</FontIcon></IconButton>} />
          <MenuItem onTouchTap={this.handleClose}>Projects</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Kodo No Boken</MenuItem>
          <MenuItem onTouchTap={this.handleClose}>Art</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
