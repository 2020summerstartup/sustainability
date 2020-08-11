import React from "react";
// Image import
import Chart from "react-google-charts";
import dorm4 from "../../../img/dorm4.svg";
import styles from "./dorm.module.css";

import { AuthUserContext } from "../../../services/Session";
import SignOutButton from "../../../components/SignOut";

// Material UI imports
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
import { getDorm, getSchoolImpact } from "../../../services/Firebase";

// synchronize school's total impact with firestore, when they remain on the page, they will not see immediate changes that other users
// make but each time to return to the page, this function will run and new school impact points will be determined
getSchoolImpact();

// Styles used for Dorm Galaxy Card
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
// Pulls user's dorm name from local storage and updates leaderboard
var dormName = localStorage.getItem("dorm");
if (dormName && dormName !== "") {
  getDorm()
    .doc(dormName)
    .onSnapshot((docSnapshot) => {
      assignRanking(docSnapshot.data());
    });
}
leaderBoardUpdate();

// set global variable var to be displayed on pink card --> total school buzzes & assocaited text
// May consider removing this later because it doesn't really seem like it would be that big of an issue & would likely only appear
// for a few people only momentarily
var totalBuzzText;
const totalBuzzDisplay = () => {
  if (localStorage.getItem("SchoolBuzzes") === 1) {
    // if school has only logged one action, display this text
    totalBuzzText = <Typography variant="h4">1 Action!</Typography>;
  } else {
    // once school has logged for than one action, dispaly this text
    totalBuzzText = (
      <Typography variant="h4">
        <b>{localStorage.getItem("SchoolBuzzes")}</b> Actions!
      </Typography>
    );
  }
};

// dynamically render the text displayed for the user dorm's place depending on the ranking of their dorm
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

// these variables will be use to render the cards in class EnvImpactCards
// JSON.parse makes it a string!
let coEmissImpact = JSON.parse(localStorage.getItem("SchoolCoEmiss"));
let energyImpact = JSON.parse(localStorage.getItem("SchoolEnergy"));
let waterImpact = JSON.parse(localStorage.getItem("SchoolWater"));

// FOR BAR CHART
const data = [
  ["Impact", "Quantity", { role: "style" }],
  ["Pounds of CO2 Saved", coEmissImpact, "rgb(255, 184, 24)"],
  ["Kilojoules of Energy Saved", energyImpact, "rgb(75, 179, 11)"],
  ["Gallons of Water Saved", waterImpact, "rgb(26, 97, 168)"], // CSS-style declaration
];

const options = {
  height: "400px",
  width: "100%",
  charArea: { width: "100%" },
  legend: { position: "none" },
};

// Cards to be rendered in profile/dorm
class EnvImpactCardsSchool extends React.Component {
  render() {
    return (
      <>
        <Typography variant="h6" className={styles.chartTitle}>
          <b>Harvey Mudd's Positive Sustainability Impacts!</b>
        </Typography>
        <Chart
          chartType="ColumnChart"
          data={data}
          options={options}
          style={{ margin: "auto", maxWidth: "50rem" }}
        />
      </>
    );
  }
}
// Dorm Galaxy Card
export const DormCard = React.memo(function GalaxyCard() {
  // Image aligned on top, styles called
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const classes = useStyles();

  // update the dorm rank text & total school buzz text
  rankDisplay();
  totalBuzzDisplay();
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
                    style={{
                      underline: "enum: none",
                      color: "white",
                      fontWeight: "bold",
                    }}
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
          {/* Displays actions logged for entire college */}
          <Grid container justify="center" style={{ placeItems: "center" }}>
            <div className={styles.ribbon}>
              <div className={styles.ribbonText}>
                <Typography variant="body1">
                  As a college, we have logged{" "}
                </Typography>
                <Grid container justify="center">
                  {totalBuzzText}
                </Grid>
              </div>
            </div>
          </Grid>
          <EnvImpactCardsSchool />
          <SignOutButton />
        </>
      )}
    </AuthUserContext.Consumer>
  );
});

export default DormCard;
