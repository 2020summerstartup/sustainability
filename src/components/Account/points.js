
import React, { useContext } from 'react';
import points from "../../img/points.svg";
// import getPoints from "./Account";
import { AuthUserContext, withAuthorization } from "../Session";
import { getUser } from "../Firebase";

import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {
  Info,
  InfoCaption,
  InfoSubtitle,
  InfoTitle,
} from '@mui-treasury/components/info';
import { useGalaxyInfoStyles } from '@mui-treasury/styles/info/galaxy';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';

import { AuthUserContext} from "../Session";
import {getUser, createUser, uploadUserPoint, uploadUserTotalPoint} from "../Firebase";
import {initPoints, assignData} from "../Home"

const useStyles = makeStyles(() => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 200,
    minHeight: 360,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '64%',
      bottom: 0,
      zIndex: 1,
      background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
    },
  },
  content: {
    position: 'absolute',
    zIndex: 2,
    bottom: 0,
    width: '100%',
  },
}));

export const TotalPointsCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  const authContext = useContext(AuthUserContext)

  getUser(authContext.email).onSnapshot(docSnapshot => {
    if (docSnapshot.exists) {
      assignData(docSnapshot.data())
    } else {
      alert("Sorry You don't have any data yet, please go to Home page");
    }
  }, err => {
  console.log(`Encountered error: ${err}`);
})

  return (
    <div>
    <AuthUserContext.Consumer>
      {(authUser) => (
    <>
      <NoSsr>
        <GoogleFontLoader
          fonts={[
            { font: 'Spartan', weights: [300] },
            { font: 'Montserrat', weights: [200, 400, 700] },
          ]}
        />
      </NoSsr>
      <Card className={styles.card}>
        <CardMedia
          classes={mediaStyles}
          image={
           
            points
 
          }
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle>You have earned</InfoSubtitle>
            <InfoTitle>{ localStorage.getItem("total") } Points</InfoTitle>
            <InfoCaption>Way to go!</InfoCaption>
          </Info>
        </Box>
      </Card>
    </>
     )}
     </AuthUserContext.Consumer>
   </div>
  );
});
export default TotalPointsCard;