import React, { useContext } from "react";
import points from "../../../img/points.svg";
import { AuthUserContext } from "../../../services/Session";
import SignOutButton from "../../../components/SignOut";

import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {
  Info,
  InfoSubtitle,
  InfoCaption,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

import { getUser } from "../../../services/Firebase";
import { assignData } from "../../HomePage";
import EnvImpactCards from './envImpactCards'

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    margin: "auto",
    maxWidth: "60rem",
    minHeight: "15rem",
    [theme.breakpoints.up("sm")]: {
      maxWidth: "60rem",
      minHeight: "20rem",
    },
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      width: "100%",
      height: "100%",
      bottom: 0,
      zIndex: 1,
      borderRadius: "black",
      background: "linear-gradient(to top, #000, rgba(0,0,0,0) 45%)",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
}));

var thePoints;

const pointsDisplay = () => {
  if (parseInt(localStorage.getItem("total")) === 0) {
    thePoints = <p> Go to the home page and log points!</p>;
  } else if (parseInt(localStorage.getItem("total")) < 400 ) {
    thePoints = <p> You're amazing! Keep it up!</p>
  } else {
    thePoints = <p> You're a superstar 🤩 </p>
  }
};
  // const getPoints = () => {
  //   if (parseInt(localStorage.getItem("total")) === 0) {
  //     return <h1> No </h1>
  //   } return <h1> Yes </h1>
  // };

export const TotalPointsCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const classes = useStyles();
  const authContext = useContext(AuthUserContext);
  pointsDisplay();
  


  getUser(authContext.email).onSnapshot(
    (docSnapshot) => {
      if (docSnapshot.exists) {
        assignData(docSnapshot.data());
      } else {
        console.log(null);
        // alert("Sorry You don't have any data yet, please go to Home page");
      }
    },
    (err) => {
      console.log(`Encountered error: ${err}`);
    }
  );

  return (
    <>
      <AuthUserContext.Consumer>
        {(authUser) => (
          <>
            <NoSsr>
              <GoogleFontLoader
                fonts={[
                  { font: "Spartan", weights: [300] },
                  { font: "Montserrat", weights: [200, 400, 700] },
                ]}
              />
            </NoSsr>
            <Card className={classes.card}>
              <CardMedia classes={mediaStyles} image={points} />
              <Box py={3} px={2} className={classes.content}>
                <Info useStyles={useGalaxyInfoStyles}>
                  <InfoSubtitle>You have earned</InfoSubtitle>
                  <InfoTitle> {localStorage.getItem("total")} Points</InfoTitle>
                  <InfoCaption>{thePoints} </InfoCaption>
                </Info>
              </Box>
            </Card>
            <EnvImpactCards/>
            <SignOutButton />
          </>
        )}
      </AuthUserContext.Consumer>
    </>
  );
});
export default TotalPointsCard;
