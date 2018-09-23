import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom'


function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  tabs: {

  },
  tab: {
    boxShadow: 'none',
    opacity: 1,
    '&:hover': {
      backgroundColor: 'none',
      color: '#000000',
      boxShadow: 'none'
    }
  },
  bigIndicator: {
    height: 4
  }
});

class WebNavBar extends React.Component {

  // constructor(props) {
  //   super(props)
  // }

  render() {
    const classes = this.props.classes;

    const tabs = [];
    this.props.collections.forEach(function(collection, i) {
      tabs.push(
        <Tab
          disableRipple
          label={collection}
          className={classes.tab}
          component={NavLink}
          to={'/shop/' + collection}
          href="#basic-tabs"
          key={i} // better way to key?
        />
      );
    })

    return (
      <div className={classes.root}>
          <Tabs
            className={classes.tabs}
            classes={{ indicator: classes.bigIndicator }}
            value={this.props.currentTab}
            // onChange={(event, tab) => this.props.changeTab(tab)}
            centered={true}
          >
            {tabs}
          </Tabs>
      </div>
    );
  }
}

WebNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WebNavBar);
