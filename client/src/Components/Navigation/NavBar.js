import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import { NavLink } from 'react-router-dom';

import WebNavBar from './WebNavBar'
import MobileDrawer from './MobileDrawer'

import axios from 'axios';
import SERVER_URL from '../../Constants/server';

const styles = theme => ({
  appBar: {
    // position: 'absolute',
    // marginLeft: 0,
    boxShadow: 'none',
    borderTop: '8px solid black'
  },
  badge: {
    top: -8,
    right: -7,
    // The border color match the background color.
    // border: "1px solid white",
    // backgroundColor: "#2196f3",
    backgroundColor: '#000',
    color: "white",
    height: '17px',
    width: '17px'
    // fontFamily: "Roboto",
  },
  navIconHide: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
    position: 'absolute'
  },
  cartButton: {
    // margin: theme.spacing.unit * 2,
    // position: 'absolute',
    backgroundColor: 'none',
    boxShadow: 'none',
    '&:hover': {
      // backgroundColor: '#FFF',
      boxShadow: 'none'
    }
  },
  title: {
    margin: '0 auto',
    marginTop: '8px',
    marginBottom: '-8px',
  },
  titleText: {
    fontFamily: "Bangla MN, Roboto, Helvetica, Arial, sans-serif",
    fontWeight: "bold",
    color: 'black',
    textDecoration: "none"
  }
});

class NavBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      mobileOpen: false,
      collections: [],
      currentTab: false
    }
  }

  componentWillMount() {
    const url = SERVER_URL + '/product/getCollections';
    axios.get(url)
      .then(res => {
        const collections = res.data;
        this.setState({ collections });
        this.updateTab();
      })
      .catch(err => console.log(err));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.updateTab();
    }
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };

  updateTab() {
    const split = this.props.location.pathname.split('/');
    var currentTab = false
    if (split.length >= 3 && split[1] === 'shop') {
      const collection = split[2];
      const tab = this.state.collections.indexOf(collection)
      if (tab >= 0) currentTab = tab
    }
    this.setState({
      currentTab: currentTab
    });
  }

  render() {
    const { classes } = this.props;

    const maybeDisplayBadge = this.props.shoppingCartSize === 0 ? (<ShoppingCart/>) : (
      <Badge badgeContent={this.props.shoppingCartSize} color="primary" classes={{badge: classes.badge }}>
        <ShoppingCart />
      </Badge>
    );

    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton disableRipple color="inherit" aria-label="Open drawer" onClick={this.handleDrawerToggle} className={classes.navIconHide}>
              <MenuIcon />
            </IconButton>
            <div className={classes.title}>
              <Typography variant="display1" color="inherit" align="center" noWrap>
                <NavLink to="/" className={classes.titleText}>
                  MYSTIC GOLD
                </NavLink>
              </Typography>
            </div>
            <NavLink to="/checkout">
              <IconButton color="secondary" aria-label="Go to cart" className={classes.cartButton}>
                {maybeDisplayBadge}
              </IconButton>
            </NavLink>
          </Toolbar>
          <Hidden xsDown implementation="css">
            <WebNavBar currentTab={this.state.currentTab} collections={this.state.collections}/>
          </Hidden>
        </AppBar>
        <Hidden smUp>
          <MobileDrawer
            mobileOpen={this.state.mobileOpen}
            handleDrawerToggle={this.handleDrawerToggle}
            collections={this.state.collections}
          />
        </Hidden>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withRouter(withStyles(styles, { withTheme: true })(NavBar));
