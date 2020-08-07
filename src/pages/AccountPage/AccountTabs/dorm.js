import React from "react";
import Chart from "react-google-charts";
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
import { getDorm, getSchoolImpact } from "../../../services/Firebase";

import styles from "./totalBuzz.module.css";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Reward from "react-rewards";
import styles1 from "./envImpactCards.module.css";

getSchoolImpact();
// synchronize school's total impact with firestore, when they remain on the page, they will not see immediate changes that other users
// make but each time to return to the page, this function will run and new school impact points will be determined

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

// set global variable var to be displayed on pink card --> total school buzzes & assocaited text
// May consider removing this later because it doesn't really seem like it would be that big of an issue & would likely only appear
// for a few people only momentarily
var totalBuzzText;
const totalBuzzDisplay = () => {
  if (localStorage.getItem("SchoolBuzzes") === 1) {
    // if school has only logged one action, display this text
    totalBuzzText = <Typography variant="h5">Logged 1 Action!</Typography>;
  } else {
    // once school has logged for than one action, dispaly this text
    totalBuzzText = (
      <Typography variant="h5">
        Logged <b>{localStorage.getItem("SchoolBuzzes")}</b> Actions!
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

// FOR PIE CHART!
const data = [
  ["Impact", "Quantity"],
  [`${coEmissImpact} Pounds of CO2 Saved`, 5000],  
  [`${energyImpact} Kilojoules of Energy Saved`, energyImpact],
  [`${waterImpact} Gallons of Water Saved`, waterImpact], // CSS-style declaration
];
const options = {
  title: "Harvey Mudd's Positive Sustainability Impacts!",
  slices: [
    {
      color: "rgb(255, 184, 24)",
    },
    { color: "rgb(75, 179, 11)" },
    { color: "rgb(26, 97, 168)" },
  ],
  is3D: true,
  tooltip: {
    showColorCode: true,
  },
  chartArea: {
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    position: "center",
    alignment: "center",
  },
  legend: {
    position: "right",
    alignment: "center",
    textStyle: {
      color: "233238",
      fontSize: 14
    }
  },
};

// cards to be rendered on the points page in account
class EnvImpactCardsSchool extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     cards: [],
  //     coEmiss: coEmissImpact,
  //     energy: energyImpact,
  //     water: waterImpact,
  //   };

  //   this.getData = this.getData.bind(this);
  // }

  useStyles = (theme) => ({
    // color: {
    //   "&:after": {
    //     backgroundColor: `${colors}`,
    //   },
    // },
  });

  // getData() {
  //   let data = {
  //     success: true,
  //     cards: [
  //       {
  //         id: 1,
  //         title: `Saved ${this.state.coEmiss} pounds of CO2!`,
  //         colorStyling: null,
  //       },
  //       {
  //         id: 2,
  //         title: `Conserved ${this.state.energy} kilojoules of energy!`,
  //         colorStyling: null,
  //       },
  //       {
  //         id: 3,
  //         title: `Conserved ${this.state.water} gallons of water!`,
  //         colorStyling: null,
  //       },
  //     ],
  //   };
  //   data.cards.forEach((card, id) => {
  //     if (id === 0) {
  //       card.colorStyling = styles1.co2;
  //     }
  //     if (id === 1) {
  //       card.colorStyling = styles1.energy;
  //     }
  //     if (id === 2) {
  //       card.colorStyling = styles1.water;
  //     }
  //   });
  //   this.setState({
  //     cards: data.cards,
  //   });
  // }

  // componentDidMount() {
  //   this.getData();
  // }

  render() {
    return (
      <Chart
        chartType="PieChart"
        width="100%"
        height="20rem"
        loader={<div>Loading Impact Chart...</div>}
        data={data}
        options={options}
      />
      // <Grid
      //   container
      //   justify="center"
      //   spacing={2}
      //   style={{ marginTop: "2rem", overflow: "hidden !important" }}
      // >
      //   {this.state.cards ? (
      //     this.state.cards.map((card, i) => (
      //       <Grid item xs={12} md={6} key={i}>
      //         <Reward
      //           ref={(ref) => {
      //             this.reward = ref;
      //           }}
      //           type="confetti"
      //           config={{
      //             springAnimation: false,
      //             elementCount: 300,
      //             startVelocity: 40,
      //             spread: 90,
      //           }}
      //         >
      //           <div>
      //             <div
      //               id={card.id}
      //               key={card.id}
      //               style={{ cursor: "pointer" }}
      //               className={`${styles.burstShape} ${card.colorStyling}`}
      //               onClick={() => this.reward.rewardMe(card.id)}
      //             >
      //               <Grid container justify="center">
      //                 <Typography variant="h5">{card.title}</Typography>
      //               </Grid>
      //             </div>
      //           </div>
      //         </Reward>
      //       </Grid>
      //     ))
      //   ) : (
      //     <div className="empty">
      //       Sorry no information is currently available
      //     </div>
      //   )}
      // </Grid>
    );
  }
}

export const DormCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "top" });
  const classes = useStyles();

  // update the dorm rank text & total school buzz text
  rankDisplay();
  totalBuzzDisplay();
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
                <InfoSubtitle style={{ color: "white", fontWeight: "bold" }}>
                  {localStorage.getItem("name")}, you're representing{" "}
                  {localStorage.getItem("dorm")} Dorm
                </InfoSubtitle>
                <InfoTitle>{rank}</InfoTitle>
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
                    {/* <Typography
                      variant="body1"
                      className={classes.linkText}
                      style={{ underline: "enum: none" }}
                      component={'span'}
                    > */}
                    Change your dorm in settings&nbsp;
                    <span role="img" aria-label="settings">
                      ⚙️
                    </span>
                    {/* </Typography> */}
                  </Link>
                </InfoCaption>
              </Info>
            </Box>
          </Card>

          <div className={styles.bannerShape}>
            <Grid
              container
              justify="center"
              style={{ placeItems: "center", marginBottom: "0.5rem" }}
            >
              <Typography variant="h6">As a school, we have...</Typography>
              <Grid container justify="center">
                {totalBuzzText}
              </Grid>
            </Grid>
          </div>
          <EnvImpactCardsSchool />
          <SignOutButton />
        </>
      )}
    </AuthUserContext.Consumer>
  );
});

export default DormCard;
