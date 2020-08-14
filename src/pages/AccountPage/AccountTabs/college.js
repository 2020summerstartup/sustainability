// commented by JM
import React, { Suspense } from "react";
import ProgressCircle from "../../../components/ProgressCircle";
// Image import
import "../../../components/GalaxyCards/galaxyCards.css";
import Chart from "react-google-charts";
import dormImg from "../../../img/dorm.svg";
import styles from "./college.module.css";
import { AuthUserContext } from "../../../services/Session";

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
import leaderBoardUpdate from "../../CompetePage/leaderBoardUpdate";
import { getSchoolImpact } from "../../../services/Firebase";

// synchronize school's total impact with firestore, when they remain on the page, they will not see immediate changes that other users
// make but each time to return to the page, this function will run and new school impact points will be determined
getSchoolImpact();

// Styles used for Dorm Galaxy Card
const useStyles = makeStyles((theme) => ({
  linkText: {
    color: "white",
  },
  link: {
    textDecoration: "none",
    underline: "none",
  },
}));


leaderBoardUpdate(); // to make sure dorm ranking is up to date


var totalBuzzText; // set global variable to be displayed on pink card --> total school buzzes & assocaited text
const totalBuzzDisplay = () => { // sets action to either singular or plural 
  if (localStorage.getItem("SchoolBuzzes") === 1) { // if school has only logged one action, display this text
    totalBuzzText = <Typography variant="h4">1 Action!</Typography>;
  } else { // once school has logged for than one action, dispaly this text
    totalBuzzText = (
      <Typography variant="h4">
        <b>{localStorage.getItem("SchoolBuzzes")}</b> Actions!
      </Typography>
    );
  }
};


var rank; // set a global variable to be displayed on galaxy card --> dorm rank 
const rankDisplay = () => { // determine rank text display for the user dorm's place depending on the rank
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



// FOR BAR CHART
// these will be used to render the cards in class EnvImpactCards
// parseInt makes it a number/integer!
const data = [
  ["Impact", "Quantity", { role: "style" }],
  ["Pounds of CO2 Saved", parseInt(localStorage.getItem("SchoolCoEmiss")), "rgb(255, 184, 24)"],
  ["Megajoules of Energy Saved", parseInt(localStorage.getItem("SchoolEnergy")), "rgb(75, 179, 11)"],
  ["Gallons of Water Saved", parseInt(localStorage.getItem("SchoolWater")), "rgb(26, 97, 168)"], // CSS-style declaration
];

const options = {
  height: "400px",
  width: "100%",
  charArea: { width: "100%" },
  legend: { position: "none" },
};

class EnvImpactCardsSchool extends React.Component { // Cards to be rendered on dorms tab of profile page

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
          <Card className="galaxyCard">
            <CardMedia classes={mediaStyles} image={dormImg} />
            <Box py={3} px={2} className="galaxyContent">
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
          <Suspense
            fallback={
              <div className="base-container">
                <ProgressCircle />
              </div>
            }
          >
            <EnvImpactCardsSchool />
          </Suspense>
        </>
      )}
    </AuthUserContext.Consumer>
  );
});

export default DormCard;
