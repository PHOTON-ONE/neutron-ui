import React from 'react';
import PropTypes from "prop-types";
import withStyles from "react-jss";

import styles from "./styles";

class Input extends React.Component {
    render() {    
        const { classes, name, type, value, handleChange, placeholder } = this.props;
        return (  
            <div className={classes.root}>
                {/* <span className={classes.span}> */}
                    <label htmlFor={name} className={classes.label}>Test</label>
                    <input
                    className={classes.input}
                    id={name}
                    name={name}
                    type={type}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder} 
                    />
                {/* </span> */}
            </div>
        );
    }   
}

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
  };

export default withStyles(styles)(Input);