import React from "react";
// Image import
import dorm4 from "../../../img/dorm4.svg";

import { AuthUserContext } from "../../../services/Session";
import SignOutButton from "../../../components/SignOut";

// Material UI imports
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
// import Typography from "@material-ui/core/Typography";
import * as ROUTES from "../../../constants/routes";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import leaderBoardUpdate, {
  assignRanking,
} from "../../CompetePage/leaderBoardUpdate";
import { getDorm } from "../../../services/Firebase";

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
      background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
  linkText: {
    color: "white",
  },
  link: {
    textDecoration: "none",
    underline: "none",
  },
}));

var dormName = localStorage.getItem("dorm");
if (dormName !== "") {
  getDorm()
    .doc(dormName)
    .onSnapshot((docSnapshot) => {
      assignRanking(docSnapshot.data());
    });
}
leaderBoardUpdate();

// Displays message depending on ranking
var rank;
const rankDisplay = () => {
  if (parseInt(localStorage.getItem("ranking")) === 1) {
    rank = <p>You're in 1st place!</p>;
  } else if (parseInt(localStorage.getItem("ranking")) === 2) {
    rank = <p>You're in 2nd place!</p>;
  } else if (parseInt(localStorage.getItem("ranking")) === 3) {
    rank = <p>You're in 3rd place!</p>;
  } else if (parseInt(localStorage.getItem("ranking")) >= 4) {
    rank = <p>You're in {localStorage.getItem("ranking")}th place!</p>;
  }
};

// Main Component - Galaxy Card for Dorm
export const DormCard = React.memo(function GalaxyCard() {
  // Image aligned on top, styles called
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const classes = useStyles();

  // Rank message function call
  rankDisplay();
  return (
    // Authorized users only
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
            <CardMedia classes={mediaStyles} image={dorm4} />
            <Box py={3} px={2} className={classes.content}>
              <Info useStyles={useGalaxyInfoStyles}>
                <InfoSubtitle style={{ color: "white", fontWeight: "bold" }}>
                  {localStorage.getItem("name")}, you're representing{" "}
                  {localStorage.getItem("dorm")} Dorm
                </InfoSubtitle>
                <InfoTitle>{rank}</InfoTitle>
                {/* Direct link to change dorm from line on Galaxy Card */}
                <InfoCaption>
                  <Link
                    to={ROUTES.CHANGEDORM}
                    className={classes.link}
                    style={{ underline: "enum: none", color: "white", fontWeight: "bold" }}
                  >
                    Change your dorm in settings&nbsp;
                    <span role="img" aria-label="settings">
                      ⚙️
                    </span>
                  </Link>
                </InfoCaption>
              </Info>
            </Box>
          </Card>
          <SignOutButton />
        </>
      )}
    </AuthUserContext.Consumer>
  );
});
export default DormCard;
