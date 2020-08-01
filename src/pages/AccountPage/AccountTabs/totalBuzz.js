import React from "react";
import { Spring } from "react-spring/renderprops";
import styles from "./totalBuzz.module.css";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const useStyles = (theme) => ({
//   borderBottom: {
//     "&:after": {
//       borderBottom: theme.palette.background.paper,
//       //   borderBottom: "13px solid",
//     },
//   },
});

// cards to be rendered on the points page in account
class TotalBuzz extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      // <Spring
      //   from={{ opacity: 0, marginTop: -1200 }}
      //   to={{ opacity: 1, marginTop: 0 }}
      //   config={{ delay: 0, duration: 2000 }}
      // >
      //   {(props) => (
      //     <div style={props}>
      //       <div className="InfoCards">
      //         <div className="cards">
        <div
          className={styles.speechBubble}
        >
          <h3 className="card-name">{localStorage.getItem("buzzes")}</h3>
          <p className="card-description">Total Actions Logged!</p>
        </div>
      //         </div>
      //       </div>
      // </div>
      //   )}
      // </Spring>
    );
  }
}

export default withStyles(useStyles)(TotalBuzz);
