import React from "react";
// Unused dorm photos
// import dorm from "../../../img/dorm.svg";
// import dorm2 from "../../../img/dorm2.svg";
// import dorm3 from "../../../img/dorm3.svg";
import dorm4 from "../../../img/dorm4.svg";


import { AuthUserContext } from "../../../services/Session";
import SignOutButton from "../../../components/SignOut";

import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
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

var rank;
var dormName = localStorage.getItem("dorm")
if (dormName !== "") {
  getDorm()
    .doc(dormName)
    .onSnapshot((docSnapshot) => {
      assignRanking(docSnapshot.data());
    });
}
leaderBoardUpdate();

const rankDisplay = () => {
  if (parseInt(localStorage.getItem("ranking")) === 1) {
    rank = <p>You're in 1st place!</p>;
  }
  else if (parseInt(localStorage.getItem("ranking")) === 2) {
    rank = <p>You're in 2nd place!</p>;
  }
  else if (parseInt(localStorage.getItem("ranking")) === 3) {
    rank = <p>You're in 3rd place!</p>;
  } else if (parseInt(localStorage.getItem("ranking")) >= 4) {
    rank = <p>You're in {localStorage.getItem("ranking")}th place!</p>;
  }
};

export const DormCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const classes = useStyles();

  rankDisplay();
  return (
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
            <CardMedia classes={mediaStyles} image={dorm4} />
            <Box py={3} px={2} className={classes.content}>
              <Info useStyles={useGalaxyInfoStyles}>
                <InfoSubtitle>
                  {localStorage.getItem("name")}, you're representing{" "}
                  {localStorage.getItem("dorm")} dorm
                  </InfoSubtitle>
                <InfoTitle>{rank}</InfoTitle>
                <InfoCaption>
                  <Link to={ROUTES.CHANGEDORM} className={classes.link}>
                    <Typography
                      variant="body1"
                      className={classes.linkText}
                      style={{ underline: "enum: none" }}
                      component={'span'}
                    >
                      Change your dorm in settings&nbsp;
                        <span role="img" aria-label="settings">
                        ⚙️
                        </span>
                    </Typography>
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
