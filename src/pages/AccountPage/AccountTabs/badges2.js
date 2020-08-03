import React from "react";
import styles from "./badges2.module.css";
import fans from "../../../img/fans.svg";

import Typography from "@material-ui/core/Typography";
import GoogleFontLoader from "react-google-font-loader";
import NoSsr from "@material-ui/core/NoSsr";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import {
  Info,
  InfoSubtitle,
  InfoCaption,
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
      borderRadius: "black",
      background: "linear-gradient(to top, #000, rgba(0,0,0,0) 45%)",
    },
  },
  content: {
    position: "absolute",
    zIndex: 2,
    bottom: 0,
    width: "100%",
  },
}));

export const BadgesCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: "center" });
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
              <CardMedia classes={mediaStyles} image={fans} />
              <Box py={3} px={2} className={classes.content}>
                <Info useStyles={useGalaxyInfoStyles}>
                  <InfoSubtitle></InfoSubtitle>
                  <InfoTitle></InfoTitle>
                  <InfoCaption> </InfoCaption>
                </Info>
              </Box>
            </Card>

    </>
  );
});


class Badges2 extends React.Component {
  constructor() {
    super();
    this.state = {
      badges: [],
    };
    this.getData = this.getData.bind(this);
  }
  
 

  getData() {
    let data = {
      success: true,
      badges: [
        {
          id: 1,
          title: "Recycle Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 2,
          title: "Walking Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 3,
          title: "Straw Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 4,
          title: "Bag Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 5,
          title: "Market Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 6,
          title: "Tea Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 7,
          title: "No Waste Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 8,
          title: "Meatless Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 9,
          title: "Cleaning Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 10,
          title: "Save Gas Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 11,
          title: "Clothing Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 12,
          title: "Air Dry Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 13,
          title: "Climate Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
      ],
    };
    data.badges.forEach((badge, id) => {
      if (id % 2 === 0) {
        badge.titleStylingFront = styles.titleLeftFront;
        badge.titleStylingBack = styles.titleLeftBack;
        badge.leafStyling = styles.left;
      } else {
        badge.titleStylingFront = styles.titleRightFront;
        badge.titleStylingBack = styles.titleRightBack;
        badge.leafStyling = styles.right;
      }
    });
    this.setState({
      badges: data.badges,
    });
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    

    return (
      <>
     
    <BadgesCard />
      <div className={styles.root}>
        <div className={styles.fancyBorder}>
          <Typography
            variant="h5"
            style={{
              color: "white",
              justify: "center",
              textShadow: "2px 2px 3px black",
            }}
          >
            Congratulations {localStorage.getItem("name")}! You have earned
            [number] badges!
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "white", textShadow: "2px 2px 3px black" }}
          >
            Hover over the badges for another surprise!
          </Typography>
        </div>

        <div className={styles.leaves}>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>

        {this.state.badges ? (
          this.state.badges.map((badge, i) => (
            <div key={i}>
              <div className={styles.column}>
                {/* <div className={styles.flipLeaf}> */}
                <div className={badge.leafStyling}>
                  <div className={styles.leafFront}>
                    <Typography
                      variant="h6"
                      className={badge.titleStylingFront}
                    >
                      {badge.title}
                    </Typography>
                  </div>
                  <div className={styles.leafBack}>
                    <Typography variant="h6" className={badge.titleStylingBack}>
                      {badge.id} <br /> Actions Completed!
                    </Typography>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </div>
          ))
        ) : (
          <div className="empty">
            <Typography variant="h5">
              You haven't earned any badges yet :(
            </Typography>
          </div>
        )}
      </div>
      </>
    );
  }
  
}

export default Badges2;
