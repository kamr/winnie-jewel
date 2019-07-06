import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';

import PreviewImage from './PreviewImage'

const styles = {
  root: {
    textDecoration: 'none', /* no underline */
    backgroundColor: 'red',
    '&:hover': {
      color: '#000'
    },
    color: '#555',
    // fontWeight: "500",
    fontSize: "13px",
  },
  box: {
    width: '260px',
    height: '332'
  },
  image: {
    width: '100%',
    height: '260px',
  },
  textBox: {
    textAlign: 'center'
  },
  text: {
    padding: '10px',
  },
  // title: {
  //   color: '#333'
  // },
  // prices: {
  //   color: '#222'
  // }
};

class Preview extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const classes = this.props.classes;
    return (
      <NavLink
        to={"/product/" + this.props.productId}
        className={classes.root}
      >
        <div className={classes.box}>
          <div className={classes.image}>
            <PreviewImage
              productId={this.props.productId}
            />
          </div>
          <div className={classes.textBox}>
            <div className={classes.text + ' ' + classes.title}>
              {this.props.name.toUpperCase()}
            </div>
            <div className={classes.text + ' ' + classes.prices}>
              ${this.props.price}
            </div>
          </div>
        </div>
      </NavLink>
    );
  }
}

export default withStyles(styles)(Preview);
