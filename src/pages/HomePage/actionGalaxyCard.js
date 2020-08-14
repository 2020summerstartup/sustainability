import React from "react";
import "../../components/GalaxyCards/galaxyCards.css";
// Image import
import actionImg from "../../img/actionTab.svg";
// Material UI Imports
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

// Main Component
// React.memo keep our app from over rendering when it doesn't need to
export const ActionCard = React.memo(function GalaxyCard() {
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
        {/* Fireworks picture for galaxy card */}
        <CardMedia
          classes={mediaStyles}
          image={actionImg}
          style={{ backgroundPosition: "center center" }}
        />
        {/* now we can see the fireworks^ */}
        <Box py={3} px={2} className="galaxyContent">
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoTitle>Sustainable actions!</InfoTitle>
            <InfoSubtitle
              style={{
                color: "white",
                fontWeight: "bold",
                marginTop: "0.5rem",
              }}
            >
              Click the{" "}
              <span role="img" aria-label="plus">
                ➕
              </span>{" "}
              plus icon once you've completed the action!
            </InfoSubtitle>
            <InfoCaption
              style={{
                color: "white",
                fontWeight: "bold",
                marginTop: "0.75rem",
              }}
            >
              Tap the drop down menu to find out more
              <span role="img" aria-label="down arrow">
                🔽
              </span>
            </InfoCaption>
          </Info>
        </Box>
      </Card>
    </>
  );
});

export default ActionCard;
