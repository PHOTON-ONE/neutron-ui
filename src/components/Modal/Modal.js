import React from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const styles = {
    modal: {
        display: "none",
        position: "fixed",
        zIndex: "1",
        paddingTop: "100px",
        left: "0",
        top: "0",
        width: "100%",
        height: "100%",
        overflow: "auto",
        backgroundColor: "rgb(0,0,0)",
        backgroundColor: "rgba(0,0,0,0.4)"

    },
    modalContent: {
        backgroundColor: "#fefefe",
        margin: "auto",
        padding: "20px",
        border: "1px solid #888",
        width: "80 %"
    },
    title: {
        textAlign: "center",
        textTransform: "uppercase",
        color: "#4CAF50"
    },
    content: {
        textIndent: "50px",
        textAlign: "justify",
        letterSpacing: "3px"
    },
    actions: {
        background: "#F9FAFB",
        padding: "1rem 1rem",
        borderTop: "1px solid rgba(34, 36, 38, 0.15)",
        textAlign: "right"
    }

}

const Modal = props => {
    const { classes } = props;
    return ReactDOM.createPortal(
        <div
            onClick={props.onDismiss}
            className={classes.modal}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className={classes.modalContent}
            >
                <div className={classes.title}>{props.title}</div>
                <div className={classes.content}>
                    {props.content}
                </div>
                <div className={classes.actions}>
                    {props.actions}
                </div>
            </div>
        </div>,
        document.querySelector('#modal')
    );
};

export default withStyles(styles)(Modal);