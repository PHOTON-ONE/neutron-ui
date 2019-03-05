const styles = theme => ({
    root: {
      minWidth: "64px",
      minHeight: "48px",
      lineHeight: "48px",
      display: "inline-block",
      cursor: "pointer",
      outline: 0,
  
      textTransform: "uppercase",
      fontWeight: "bold",
  
      transition: "all .255s ease",
      userSelect: "none",
      border: props => props.super
    },
  
    /** CONTAINED */
    variant_contained: {
      paddingLeft: "24px",
      paddingRight: "24px",
      borderRadius: "4px",
      boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
      "&:hover": {
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
      },
      "&:focus": {
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
      }
    },
  
    color_default_contained: {
      background: theme.bgMain,
      color: getContrastYIQ(theme.bgMain, theme.text, theme.btnText),
      "&:hover": {
        background: toRGBA(theme.bgMain, 1)
      }
    },
    color_primary_contained: {
      background: theme.primary,
      color: getContrastYIQ(theme.primary, theme.text, theme.btnText),
      "&:hover": {
        background: toRGBA(theme.primary, 1)
      }
    },
  
    color_secondary_contained: {
      background: theme.secondary,
      color: getContrastYIQ(theme.secondary, theme.text, theme.btnText),
      "&:hover": {
        background: toRGBA(theme.secondary, 1)
      }
    },
    color_disabled_contained: {
      background: toRGBA(theme.border, 0.2),
      opacity: 0.5,
      color: getContrastYIQ(
        theme.border,
        toRGBA(theme.text, 0.6),
        toRGBA(theme.btnText, 0.6)
      ),
      cursor: "not-allowed",
  
      "&:hover": {
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
      },
      "&:focus": {
        boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)"
      },
      "&.ripple:after": {
        backgroundImage: "none"
      }
    },
  
    /** OUTLINED */
    variant_outlined: {
      paddingLeft: "16px",
      paddingRight: "16px",
      border: `1px solid ${theme.borderLight}`,
      borderRadius: "4px",
  
      "&:hover": {
        border: `1px solid ${theme.border}`
      }
    },
    color_disabled_outlined: {
      color: toRGBA(theme.border, 0.9),
      cursor: "not-allowed",
      "&.ripple:after": {
        backgroundImage: "none"
      },
      "&:hover": {
        background: toRGBA(theme.border, 0.05)
      },
      "&:focus": {
        background: toRGBA(theme.border, 0.05)
      }
    },
    color_default_outlined: {
      color: getContrastYIQ(theme.text, theme.btnText, theme.text),
      "&.ripple:after": {
        backgroundImage: `radial-gradient(circle, ${toRGBA(
          theme.text,
          0.4
        )} 10%, transparent 10.01%)`
      },
      "&:hover": {
        background: toRGBA(theme.borderLight, 0.5)
      },
      "&:focus": {
        background: toRGBA(theme.borderLight, 0.6)
      }
    },
    color_primary_outlined: {
      color: theme.primary,
      "&:hover": {
        background: toRGBA(theme.primary, 0.1)
      },
      "&:focus": {
        background: toRGBA(theme.primary, 0.2)
      }
    },
    color_secondary_outlined: {
      color: theme.secondary,
      "&:hover": {
        background: toRGBA(theme.secondary, 0.1)
      },
      "&:focus": {
        background: toRGBA(theme.secondary, 0.2)
      }
    },
  
    /** FLAT */
    variant_flat: {
      paddingLeft: "8px",
      paddingRight: "8px",
      borderRadius: "4px",
      color: getContrastYIQ(theme.text, theme.btnText, theme.text)
    },
  
    color_default_flat: {
      "&.ripple:after": {
        backgroundImage: `radial-gradient(circle, ${toRGBA(
          theme.text,
          0.4
        )} 10%, transparent 10.01%)`
      },
      "&:hover": {
        background: toRGBA(theme.borderLight, 0.5)
      },
      "&:focus": {
        background: toRGBA(theme.borderLight, 0.6)
      }
    },
  
    color_primary_flat: {
      "&:hover": {
        background: toRGBA(theme.primary, 0.1)
      },
  
      "&:focus": {
        background: toRGBA(theme.primary, 0.2)
      },
  
      "&:ripple:after": {
        backgroundImage: `radial-gradient(circle, ${toRGBA(
          theme.primary,
          0.4
        )} 10%, transparent, 10.01%)`
      }
    },
  
    color_secondary_flat: {
      "&:hover": {
        background: toRGBA(theme.secondary, 0.1)
      },
  
      "&:focus": {
        background: toRGBA(theme.secondary, 0.2)
      },
  
      "&:ripple:after": {
        backgroundImage: `radial-gradient(circle, ${toRGBA(
          theme.secondary,
          0.4
        )} 10%, transparent, 10.01%)`
      }
    },
  
    color_disabled_flat: {
      cursor: "not-allowed",
      color: toRGBA(theme.text, 0.7),
  
      "&:ripple:after": {
        backgroundImage: "none"
      }
    },
  
    /** ICON BUTTON */
    variant_icon: {
      margin: "8px",
      flex: "0 0 auto",
      color: toRGBA(theme.text, 0.8),
      padding: "12px",
      overflow: "visible",
      fontSize: "1.5rem",
      textAlign: "center",
      transition: "all .355s cubic-bezier(0.4, 0, 0.2, 1)",
      borderRadius: "50%",
      position: "relative",
  
      "&:hover": {
        backgroundColor: toRGBA(theme.text, 0.08)
      },
      "&.ripple:after": {
        backgroundImage: `radial-gradient(circle, ${toRGBA(
          theme.text,
          0.4
        )} 10%, transparent 10.01%)`
      }
    }
  });
  
  export default styles;
  
  function isHex(h) {
    var a = parseInt(h, 16);
    return a.toString(16) === h;
  }
  
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16)
        }
      : null;
  }
  
  function toRGBA(hex, a = 1) {
    const rgb = hexToRgb(hex);
    if (rgb !== null) return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${a})`;
    return hex;
  }
  
  function getContrastYIQ(hexcolor = "#000", dark = "black", light = "white") {
    var r = parseInt(hexcolor.substr(0, 2), 16);
    var g = parseInt(hexcolor.substr(2, 2), 16);
    var b = parseInt(hexcolor.substr(4, 2), 16);
    var yiq = (r * 299 + g * 587 + b * 114) / 1000;
    return yiq >= 128 ? dark : light;
  }
  