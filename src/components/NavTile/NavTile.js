import React, { Component } from "react";
import PropTypes from "prop-types";
import withStyles from "react-jss";

const styles = {
    root: {
        color: "#99CC66"
    },
    thumbnail: {
        borderRadius: "8px"
    }
};

class NavTile extends Component {
    /**
     * @description FIlters defined props and returnes object of unknown props.
     * @returns {object}
     */
    filterProps = () => {
        let props = {...this.props};
        const propTypes = Object.keys(NavTile.propTypes);
        
        propTypes.forEach(e => {
            if(props[e]) delete props[e];
        });

        return props;
    }

    /**
     * @description Returns title.
     * @argument {string} title Title of the tile.
     * @returns {node}
     */
    renderTitle = title => {
        return <h3>{title}</h3>;
    }

    /**
     * @description Renders the thumbnail.
     * @returns {node}
     */
    renderThumbnail = (image) => {
        const {classes} = this.props;

        return <img className={classes.thumbnail} src={image} />;
    }

    render() {
        const {classes, title, image} = this.props;

        return <div className={classes.root} {...this.filterProps()}>
            {this.renderThumbnail(image)}
            {this.renderTitle(title)}
        </div>;
    }
}

NavTile.propTypes = {
    classes: PropTypes.object.isRequired,

    title: PropTypes.string.isRequired,
    description: PropTypes.string,

    image: PropTypes.string.isRequired,
}

export default withStyles(styles)(NavTile);