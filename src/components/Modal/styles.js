export default {
  root: {
    display: "block",
    width: "600px",
    maxWidth: "80%",
    maxHeight: "80%",    
    position: "fixed",    
    zIndex: "100",    
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",    
    boxShadow: "0 0 60px 10px rgba(0, 0, 0, 0.9)",
    borderRadius: "5px"
  },
  content: {
    padding: "1.5rem",
    overflow: "auto",
    position: "relative",
    top: "0",
    left: "0",
    width: "80%",
    height: "80%",
    overflow: "auto",
    padding: "20px 50px 20px 20px",
  },
  modalOverlay: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    zIndex: "50",
  
  background: "rgba(0, 0, 0, 0.6)",
  },
  title: {
    textAlign: "left",
    textTransform: "uppercase",
    color: "#212121",
    fontSize: "24px",
    marginBottom: ".8rem",
    fontWeight: "bold",
  },
  content: {
    textAlign: "left",
    fontSize: "16px",
    margin: "15px"
  },
  actions: {
    marginTop: "1rem",
    textAlign: "right",
    float: "right",
    bottom: "0",
    margin: "10px"
  },
};
