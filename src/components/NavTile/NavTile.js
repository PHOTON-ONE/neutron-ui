import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const styles = {
  root: {
    minWidth: "375px",
    display: "inline-block",
    minHeight: "200px",
    borderRadius: "8px",
    position: "relative",
    overflow: "hidden"

  },
  container: {
    position: "absolute",
    paddingTop: "2.5%",
    paddingBottom: "2.5%",
    width: "100%",
    bottom: 0,
    borderTop: "1px solid rgba(21, 21, 21, .3)",
    background: "#BA68C8",
    color: "#fff",
    borderRadius: "8px",
  },
  content: {
    position: "relative",
    paddingLeft: "5%",
    paddingRight: "5%",
    lineHeight: "10px",
  },
  thumbnail: {
    borderRadius: "8px",
    width: "560px",
    height: "250px",
    marginTop: "-25px"
  },
};

class NavTile extends Component {
  /**
   * @description Filters defined props and returnes object of unknown props.
   * @returns {object}
   */
  filterProps = () => {
    let props = { ...this.props };
    const propTypes = Object.keys(NavTile.propTypes);

    propTypes.forEach(e => {
      if (props[e]) delete props[e];
    });

    return props;
  };

  /**
   * @description Returns title.
   * @argument {string} title Title of the tile.
   * @returns {node}
   */
  renderTitle = title => {
    return <h3>{title}</h3>;
  };

  /**
   * @description Renders the thumbnail.
   * @returns {node}
   */
  renderThumbnail = image => {
    return <img className={this.props.classes.thumbnail} src={image} />;
  };

  renderContent = title => {
    return (
      <div className={this.props.classes.container}>
        <div className={this.props.classes.content}>
          {this.renderTitle(title)}
          <p>{this.props.description}</p>
        </div>
      </div>
    );
  };

  render() {
    const { classes, image, title } = this.props;

    return (
      <div className={classes.root} {...this.filterProps()}>
        {this.renderThumbnail(image)}
        {this.renderContent(title)}
      </div>
    );
  }
}

NavTile.propTypes = {
  classes: PropTypes.object.isRequired,

  title: PropTypes.string.isRequired,
  description: PropTypes.string,

  image: PropTypes.string.isRequired,
};

export default withStyles(styles)(NavTile);
