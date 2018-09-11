import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom'

import axios from 'axios';
import PAYMENT_SERVER_URL from '../../Constants/server';

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

// are these styles being used? red?
const styles = theme => ({
  tab: {
    boxShadow: 'none',
    opacity: 1,
    // minWidth: 50,
    '&:hover': {
      backgroundColor: 'none',
      color: '#000000',
      boxShadow: 'none'
    },
    '&:selected': {
      borderBottom: '2px red solid'
    }
  }
});

class WebNavBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      collections: []
    }
  }

  componentDidMount() {
    const url = PAYMENT_SERVER_URL + '/product/getCollections';
    axios.get(url)
      .then(res => {
        const collections = res.data;
        this.setState({ collections });
      })
      .catch(err => console.log(err));
  }

  render() {
    const classes = this.props.classes;

    const tabs = [];
    this.state.collections.forEach(function(season, i) {
      tabs.push(
        <Tab
          disableRipple
          label={season}
          className={classes.tab}
          component={NavLink}
          to={'/shop/' + season}
          href="#basic-tabs"
          key={i} // better way to key?
        />
      );
    })

    return (
      <div>
          <Tabs
            value={this.props.currentTab}
            onChange={(event, tab) => this.props.changeTab(tab)}
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
  currentTab: PropTypes.number.isRequired,
};

export default withStyles(styles)(WebNavBar);
