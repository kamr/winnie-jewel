import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import NavBar from './Components/Navigation/NavBar';
import Content from './Content'

const styles = {
  root: {
    flexGrow: 1,
  }
};


class App extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     currentTab: false
  //   };
  // }

  // changeTab(tab) {
  //   this.setState({
  //     currentTab: tab
  //   });
  // }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <NavBar
          // changeTab={this.changeTab.bind(this)}
          // currentTab={this.state.currentTab}
        />
        <Content/>
      </div>
    );
  }
}

export default withStyles(styles)(App);
