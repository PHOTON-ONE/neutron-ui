export default {
    root: {
        position: "relative",
        padding: "10px 0",
        "root_first_of_type": {
            "paddingTop": "0"
        },
        "root_last_of_type": {
            "paddingBottom":"0"
        },
        // "root_input_type__text___focus": {
        //     "outline":"none",
        //     "background":"#ff4a56",
        //     "color":"white",
        //     "marginTop":"30px",
        // },
        // "root_input_type__text___valid": {
        //     "marginTop":"30px",
        // },
        // "root_input_type__text___focus___label": { 
        //     "MozTransform":"translate(0, -35px)",
        //     "MsTransform":"translate(0, -35px)",
        //     "WebkitTransform":"translate(0, -35px)",
        //     "transform":"translate(0, -35px)"
        // },
        // "root_input_type__text___valid___label": {
        //     "textTransform":"uppercase",
        //     "fontStyle":"italic",
        //     "MozTransform":"translate(5px, -35px) scale(0.6)",
        //     "MsTransform":"translate(5px, -35px) scale(0.6)",
        //     "WebkitTransform":"translate(5px, -35px) scale(0.6)",
        //     "transform":"translate(5px, -35px) scale(0.6)"
        // }
    },
    label: {
        "-mozTransition": "all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5)",
        "-o-transition": "all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5)",
        "-webkit-transition": "all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5)",
        transition: "all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5)",
        transformOrigin: "left center",
        color: "#ff4a56",
        fontWeight: "100",
        letterSpacing: "0.01em",
        fontSize: "17px",
        boxSizing: "border-box",
        padding: "10px 15px",
        display: "block",
        position: "absolute",
        marginTop: "-40px",
        zIndex: "2",
        pointerEvents: "none",
	},
    input: {
        "-mozTransition": "all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5)",
        "-o-transition": "all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5)",
        "-webkit-transition": "all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5)",
        transition: "all 0.25s cubic-bezier(0.53, 0.01, 0.35, 1.5)",     
        appearance: "none",
        backgroundColor: "none",
        border: "1px solid #ff4a56",
        lineHeight: "0",
        fontSize: "17px",
        width: "100%",
        display: "block",
        boxSizing: "border-box",
        padding: "10px 15px",
        borderRadius: "60px",
        color: "#ff4a56",
        fontWeight: "100",
        letterSpacing: "0.01em",
        position: "relative",
        zIndex: "1",
        "input_type__text___focus": {
            "outline":"none",
            "background":"#ff4a56",
            "color":"white",
            "marginTop":"30px",
        },
        "input_type__text___valid": {
            "marginTop":"30px",
        },
        "input_type__text___focus___label": { 
            "MozTransform":"translate(0, -35px)",
            "MsTransform":"translate(0, -35px)",
            "WebkitTransform":"translate(0, -35px)",
            "transform":"translate(0, -35px)"
        },
        "input_type__text___valid___label": {
            "textTransform":"uppercase",
            "fontStyle":"italic",
            "MozTransform":"translate(5px, -35px) scale(0.6)",
            "MsTransform":"translate(5px, -35px) scale(0.6)",
            "WebkitTransform":"translate(5px, -35px) scale(0.6)",
            "transform":"translate(5px, -35px) scale(0.6)"
        }
    }
};
  