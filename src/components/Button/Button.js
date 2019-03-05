import React, { Component } from "react";
import PropTypes from "prop-types";
import injectSheet from "react-jss";
import styles from './Button.styles';

class Button extends Component {
  renderClasses(variant, color, classes, prefs) {
    let _classes = [classes.root];

    _classes.push(classes[`variant_${variant}`]);
    _classes.push(
      classes[`color_${!prefs.disabled ? color : "disabled"}_${variant}`]
    );

    return _classes.join(" ");
  }

  renderIcon(icon) {
    return (
      <span className="btn-icon">
        <Icon name={icon} />
      </span>
    );
  }

  render() {
    const {
      children,
      variant,
      color,
      icon,
      classes,
      disabled,
      onClick,
      style
    } = this.props;

    let content = (
      <div
        tabIndex="0"
        onClick={onClick}
        className={this.renderClasses(variant, color, classes, { disabled })}
        style={style}
      >
        {icon ? this.renderIcon(icon) : <React.Fragment />} {children}
      </div>
    );

    content = variant === "icon" ? <div>{content}</div> : content;

    return content;
  }
}

export default injectSheet(styles)(Button);

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "flat", "outlined", "icon"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "inverted",
    "confirm",
    "warning",
    "cancel"
  ]),
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  onClick: PropTypes.func,
  style: PropTypes.object
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  disabled: false,
  style: {}
};