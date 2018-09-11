import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Home from './Routes/Home';
import Shop from './Routes/Shop';

const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  }
});

class Content extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/shop' component={Shop}/>
        </Switch>
      </main>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Content);
