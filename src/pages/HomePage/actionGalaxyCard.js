import React from "react";
// Image import
import actionImg from "../../img/actionTab.svg"
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

// Styles for Galaxy Card
const useStyles = makeStyles((theme) => ({
    galaxyCard: {
        borderRadius: "1rem",
        boxShadow: "none",
        position: "relative",
        margin: "auto",
        marginBottom: "1rem",
        // Width and Height are important for fitting on the screen
        maxWidth: "36rem",
        minHeight: "15rem",
        zIndex: 0,
        // For everything above "small" screen
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
            // Black to transparent background
            background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
        },
    },
    galaxyContent: {
        position: "absolute",
        zIndex: 2,
        bottom: 0,
        width: "100%",
    },
}));

// Main Component
export const ActionCard = React.memo(function GalaxyCard() {
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
            <Card className={classes.galaxyCard}>
                {/* Fireworks picture for galaxy card */}
                <CardMedia
                    classes={mediaStyles}
                    image={actionImg}
                    style={{ backgroundPosition: "center center" }}
                />
                {/* now we can see the fireworks^ */}
                <Box py={3} px={2} className={classes.galaxyContent}>
                    <Info useStyles={useGalaxyInfoStyles}>
                        <InfoSubtitle
                            style={{ color: "white", fontWeight: "bold" }}
                        >
                        </InfoSubtitle>
                        <InfoTitle>Log your actions here!</InfoTitle>
                        <InfoCaption style={{ color: "white", fontWeight: "bold" }}>
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
