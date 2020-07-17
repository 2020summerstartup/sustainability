import React from "react";
import dorm from "../../../img/dorm.svg";
import { AuthUserContext } from "../../../services/Session";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import styles from "./dorm.module.css";
import * as ROUTES from "../../../constants/routes";
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    minWidth: 200,
    minHeight: 250,
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
  }
}));

export const DormCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const classes = useStyles();
  return (
    <div>
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
                    {authUser.email}, you're representing{" "}
                    {localStorage.getItem("dorm")} dorm
                  </InfoSubtitle>
                  <InfoTitle>
                    You're in Rank {localStorage.getItem("ranking")}
                  </InfoTitle>
                  <InfoCaption>
                    <Link to={ROUTES.CHANGEDORM}>
                      <Typography className={classes.linkText}>
                        Change your dorm in settings ⚙️
                      </Typography>
                    </Link>
                  </InfoCaption>
                </Info>
              </Box>
            </Card>
          </>
        )}
      </AuthUserContext.Consumer>
    </div>
  );
});
export default DormCard;
