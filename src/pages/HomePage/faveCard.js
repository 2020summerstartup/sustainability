import React from "react";
import favorite2 from "../../img/favorite2.svg";

import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: "1rem",
    boxShadow: "none",
    position: "relative",
    margin: "auto",
    marginBottom: "1rem",
    maxWidth: "36rem",
    minHeight: "15rem",
    zIndex: 0,
    [theme.breakpoints.up("sm")]: {
      maxWidth: "75vh",
      minHeight: "40vh",
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

export const FavoriteCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const classes = useStyles();

  return (
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
        <CardMedia classes={mediaStyles} image={favorite2} />
        <Box py={3} px={2} className={classes.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle style={{ color: "white", fontWeight: "bold" }}>
              Your faves are here{" "}
            </InfoSubtitle>
            <InfoTitle>Add more!</InfoTitle>
            <InfoCaption
              style={{ color: "white", fontWeight: "bold", fontWeight: "bold" }}
            >
              Go to actions tab and press the heart to add&nbsp;
              <span role="img" aria-label="heart">
                ❤️
              </span>
            </InfoCaption>
          </Info>
        </Box>
      </Card>
    </>
  );
});

export default FavoriteCard;
