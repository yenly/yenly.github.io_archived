import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../app.css';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

class App extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
          {this.props.children}
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
