import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom'

const drawerWidth = 240;

const styles = theme => ({
  toolbar: {
    minHeight: '72px'
  },
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('xs')]: {
      position: 'relative',
    },
  }
});

class MobileDrawer extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const {
      classes,
      theme,
      handleDrawerToggle,
      collections
    } = this.props;
    console.log(this.props)

    const tabs = [];
    collections.forEach(function(collection, i) {
      tabs.push(
        <ListItem
          button
          key={i}
          onClick={handleDrawerToggle}
          component={NavLink}
          to={'/shop/' + collection}
        >
          <ListItemText primary={collection} />
        </ListItem>
      );
    })

    return (
      <Drawer
        variant="temporary"
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        open={this.props.mobileOpen}
        onClose={this.props.handleDrawerToggle}
        classes={{
          paper: classes.drawerPaper,
        }}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <div>
          <div className={classes.toolbar} />
          <Divider />
          {tabs}
          <Divider />
        </div>
      </Drawer>
    );
  }
}

export default withStyles(styles, { withTheme: true })(MobileDrawer);
