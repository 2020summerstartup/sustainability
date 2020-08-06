import React from 'react';
import styles from "../../AccountPage/AccountTabs/badges2.module.css";


// import SignOutButtom from "../../../components/SignOut";
import Typography from "@material-ui/core/Typography";
// import GoogleFontLoader from "react-google-font-loader";
// import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles((theme) => ({
//     card: {
//       borderRadius: "1rem",
//       boxShadow: "none",
//       position: "relative",
//       margin: "auto",
//       maxWidth: "60rem",
//       minHeight: "15rem",
//       [theme.breakpoints.up("sm")]: {
//         maxWidth: "60rem",
//         minHeight: "20rem",
//       },
//       "&:after": {
//         content: '""',
//         display: "block",
//         position: "absolute",
//         width: "100%",
//         height: "100%",
//         bottom: 0,
//         zIndex: 1,
//         borderRadius: "black",
//         background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
//       },
//     },
//     content: {
//       position: "absolute",
//       zIndex: 2,
//       bottom: 0,
//       width: "100%",
//     },
//   }));
const ComingSoon = () => {
    // const classes = useStyles();

    return (


<div className={styles.fancyBorder}>
          <Typography
            variant="h4"
            style={{
              color: "white",
              justify: "center",
              textShadow: "2px 2px 3px black",
            }}
          >
           Challenges are in development! 
           Come back soon!
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "white", textShadow: "2px 2px 3px black" }}
          >
          
          </Typography>
        </div>
    ); 
}

export default ComingSoon;