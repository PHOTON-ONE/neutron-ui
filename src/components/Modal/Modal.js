import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

// Importing styles
import styles from "./styles";

import Portal from "../Portal";
import Button from "../Button";

class Modal extends Component {
  /**
   * @description Returns action components.
   * @param {array} actions
   * @returns {node}
   */
  renderActions = actions => {
    return actions.map((e, i) => <Button {...e} key={`modal-action-${i}`} />);
  };

  render() {
    const { classes, open, title, content, actions, onDismiss } = this.props;

    // Return Fragment if modal is closed.
    if (!open) return <React.Fragment />;

    return (
      <Portal>
        <div onClick={onDismiss} className={classes.modal}>
          <div
            onClick={e => e.stopPropagation()}
            className={classes.modalContent}>
            <div className={classes.title}>{title}</div>
            <div className={classes.content}>{content}</div>
            <div className={classes.actions}>{this.renderActions(actions)}</div>
          </div>
        </div>
      </Portal>
    );
  }
}

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
  actions: PropTypes.array,

  onDismiss: PropTypes.func.isRequired,
};

export default withStyles(styles)(Modal);
