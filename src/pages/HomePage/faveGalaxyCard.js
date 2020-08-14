import React from "react";
import favorite2 from "../../img/favorite2.svg";
import "../../components/GalaxyCards/galaxyCards.css";
// Material UI Imprts
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
// Galaxy Card Material UI Treasury Imports
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from "@mui-treasury/components/info";
import { useGalaxyInfoStyles } from "@mui-treasury/styles/info/galaxy";
import { useCoverCardMediaStyles } from "@mui-treasury/styles/cardMedia/cover";

// Main Component, exported to 
export const FavoriteGalaxyCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });

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
      <Card className="galaxyCard homeGalaxyCard">
        <CardMedia classes={mediaStyles} image={favorite2} />
        <Box py={3} px={2} className="galaxyContent">
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle style={{ color: "white", fontWeight: "bold" }}>
              Your faves are here{" "}
            </InfoSubtitle>
            <InfoTitle>Add more!</InfoTitle>
            <InfoCaption
              style={{ color: "white", fontWeight: "bold" }}
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

export default FavoriteGalaxyCard;
