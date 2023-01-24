import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 0,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    color: "#d9b99b",
  },
  border: {
    border: "solid",
    color: "#d9b99b",
  },
  fullHeightCard: {
    height: "100%",
    color: "#d9b99b",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
    color: "#d9b99b",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "#d9b99b",
  },
  overlay2: {
    position: "absolute",
    top: "20px",
    right: "20px",
    color: "#d9b99b",
  },
  grid: {
    display: "flex",
    color: "#d9b99b",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px",
    color: "#d9b99b",
  },
  title: {
    padding: "0 16px",
    color: "#d9b99b",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
    color: "#d9b99b",
  },
});
