import React from "react";
import dorm from "../../../img/dorm.svg";
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
import Paper from "@material-ui/core/Paper";
import * as ROUTES from "../../../constants/routes";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { render } from "@testing-library/react";
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


getDorm()
  .doc(localStorage.getItem("dorm"))
  .onSnapshot((docSnapshot) => {
    assignRanking(docSnapshot.data());
  });
leaderBoardUpdate();


var rank;
const rankDisplay = () => {
  if (localStorage.getItem("ranking") == 1) {
    rank = <p>You're in 1st place!</p>;
  }
  if (localStorage.getItem("ranking") == 2) {
    rank = <p>You're in 2nd place!</p>;
  }
  if (localStorage.getItem("ranking") == 3) {
    rank = <p>You're in 3rd place!</p>;
  } else if (localStorage.getItem("ranking") >= 4) {
    rank = <p>You're in {localStorage.getItem("ranking")}th place!</p>;
  }
};

rankDisplay();

export const DormCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const classes = useStyles();
  return (
    // <Paper>
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
              <CardMedia classes={mediaStyles} image={dorm} />
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
                        variant="p"
                        className={classes.linkText}
                        style={{ underline: "enum: none" }}
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
    // </Paper>
  );
});
export default DormCard;
