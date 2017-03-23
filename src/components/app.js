import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import '../app.css';

import MenuItem from 'material-ui/MenuItem';
import { Toolbar, ToolbarGroup, ToolbarTitle } from 'material-ui/Toolbar';
import FontIcon from 'material-ui/FontIcon';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

const iconStyles = {
  marginRight: 24,
};

const toolbarStyles = {
  opacity: 0.5,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  zIndex: 1101,
}

const toolbarTitleStyles = {
  fontWeight: 500,
  fontFamily: 'Roboto Slab',
  color: 'black',
}

class App extends Component {

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <Toolbar style={toolbarStyles}>
              <ToolbarGroup>
                <IconButton href="/"><FontIcon className="material-icons" style={iconStyles}>home</FontIcon></IconButton>
                <ToolbarTitle text="Yenly Ma" style={toolbarTitleStyles} />
              </ToolbarGroup>

              <ToolbarGroup>
                <FontIcon className="muidocs-icon-custom-sort" />
                <IconMenu
                  iconButtonElement={
                    <IconButton touch={true}>
                      <NavigationExpandMoreIcon />
                    </IconButton>
                  }
                >
                  <MenuItem href="/" primaryText="About Yenly" />
                  <MenuItem href="/#/projects" primaryText="Projects" />
                  <MenuItem href="https://yenly.github.io/kodo_no_boken/" primaryText="Kōdo No Bōken" />
                  {/* <MenuItem href="/#/my_art" primaryText="My Art" /> */}
                </IconMenu>
              </ToolbarGroup>

            </Toolbar>
            {this.props.children}
          </div>

        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
