import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';

import Home from './Routes/Home';
import Shop from './Routes/Shop';

const styles = theme => ({
  topbar: {
    height: '120px'
  },
  content: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  }
});

class Content extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.content}>
        <div className={classes.topbar}/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shop/:collection' component={Shop}/>
        </Switch>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Content);
