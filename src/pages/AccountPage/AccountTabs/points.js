import React from "react";
import points from "../../../img/points.svg";
import { AuthUserContext } from "../../../services/Session";
import SignOutButton from "../../../components/SignOut";
// Import Galaxy Card Styles and Material UI
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
import TotalBuzz from "./totalBuzz";
import EnvImpactCards from "./envImpactCards";


const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    margin: "auto",
    // Width and height change the size of the card
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
      // Gradient in background, black to transparent
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
}));

// Encouraging message on bottom of card
var thePoints;

const pointsDisplay = () => {
  if (parseInt(localStorage.getItem("total")) === 0) {
    thePoints = " Go to the home page and log points!";
  } else if (parseInt(localStorage.getItem("total")) < 400) {
    thePoints = " You're amazing! Keep it up!";
  } else {
    thePoints = " You're a superstar 🤩 ";
  }
};

// Main compoenent - Displays the number of points user has
export const TotalPointsCard = React.memo(function GalaxyCard() {
  // Image's top portion is prioritized to display
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  // Grabs styles defined above
  const classes = useStyles();
  // For message created with thePoints
  pointsDisplay();

  return (
    <>
      {/* Only authorized users cna view points */}
      <AuthUserContext.Consumer>
        {(authUser) => (
          <>
          {/* Dorm Galaxy Card */}
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
                  <InfoSubtitle style={{ color: "white", fontWeight: "bold" }}>
                    You have earned
                  </InfoSubtitle>
                  <InfoTitle> {localStorage.getItem("total")} Points</InfoTitle>
                  <InfoCaption style={{ color: "white", fontWeight: "bold" }}>
                    {thePoints}{" "}
                  </InfoCaption>
                </Info>
              </Box>
            </Card>
            {/* Displays number of actions and overall impact */}
            <TotalBuzz />
            <EnvImpactCards />
            <SignOutButton />
          </>
        )}
      </AuthUserContext.Consumer>
    </>
  );
});
export default TotalPointsCard;
