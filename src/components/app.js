import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../app.css';
import AppBar from 'material-ui/AppBar';
import Sidebar from './sidebar';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {
  constructor() {
    super();
    this.state = { sidebarOpen: true };
    this.handleOpen = this.handleOpen.bind(this);
  }

  // handleOpen = () => this.setState({ open: true });
  handleOpen = () => this.setState({ sidebarOpen : true });


  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar
              title="Yenly Ma"
              onLeftIconButtonTouchTap={this.handleOpen} />
            <Sidebar open={this.state.sidebarOpen} />
            {this.props.children}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
