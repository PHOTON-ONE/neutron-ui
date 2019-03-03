import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const styles = {
  root: {
    // border: "10px solid #99CC66",
     display: "inline-block",
    //  border: "10px dashed #BD0000",
    margin: "5px",
    // border: "0",
    // position: "fixed",
    top: "50%",
    left: "50%",
    // transform: "translate(-50%, -50%)",
    background: "lightblue",
    color: "white",
    padding: "10px 20px",
    borderRadius: "10px",
    // fontSize: "21px",
    
    cursor: "pointer",
    "&:active": {
      // border: "10px dashed #BD0000",
    },
  },
};

class Button extends Component {
  render() {
    const { classes, onClick, children, content } = this.props;

    return (
      <div className={classes.root} onClick={onClick}>
        {children || content}
      </div>
    );
  }
}

Button.propTypes = {
  classes: PropTypes.object.isRequired,

  onClick: PropTypes.func,
  children: PropTypes.any,
  content: PropTypes.any
};

export default withStyles(styles)(Button);
