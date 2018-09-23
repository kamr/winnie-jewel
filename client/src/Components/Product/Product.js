import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  box: {
    width: '260px',
    height: '340px',
    border: '2px black solid'
  },
  image: {
    width: '100%',
    height: '260px',
    backgroundColor: 'red'
  },
  textBox: {
    textAlign: 'center',
    padding: '10px'
  },
  title: {
    padding: '10px',
    color: '#333'
  },
  description: {
    color: '#666'
  }
};

class Product extends React.Component {

  // constructor(props) {
  //   super(props);
  // }

  render() {
    const classes = this.props.classes;
    return (
      <div className={classes.box}>
        <div className={classes.image}>
          TEST
        </div>
        <div className={classes.textBox}>
          <div className={classes.title}>
            {this.props.name}
          </div>
          <div className={classes.description}>
            description
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Product);
