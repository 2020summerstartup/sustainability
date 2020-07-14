// THIS FILE HAS CODE LARGELY DUPLICATED FROM INDEX.JS IN ACTIONCARD. IT'S SUPER JANKY AND WE NEED TO FIX IT. (I made this mess
// so I'm happy to fix it eventually lol.) -Katie

import React, { Fragment, useState } from 'react';
import favorite from "../../img/favorite.svg";
import { AuthUserContext, withAuthorization } from "../Session";

import GoogleFontLoader from 'react-google-font-loader';
import NoSsr from '@material-ui/core/NoSsr';
import { fade, makeStyles } from '@material-ui/core/styles';
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

import clsx from "clsx";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Grid from "@material-ui/core/Grid";

import Toolbar from "@material-ui/core/Toolbar";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";

import ActionData from "../ActionData/index.json";

// I pulled these from Home's index.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: '1rem',
    boxShadow: 'none',
    position: 'relative',
    minWidth: 500,
    minHeight: 300,
    '&:after': {
      content: '""',
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
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
  root: {
    minWidth: "280",
    backgroundColor: "var(--text-secondary)",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "1rem",
    marginBottom: "0.5rem",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "0.5rem",
  },
  searchInput: {
    width: "15rem",
    // marginBottom: "-8px !important",
    paddingBottom: "0",
    underline: "0px !important",
    // borderBottom: "#24a113"
  },
  actionContainer: {
    paddingTop: "1rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: "var(--theme)",
  },
  cardContent: {
    textAlign: "left",
    paddingBottom: "0",
  },
  cardActions: {
    paddingTop: "0",
  },
  // underline: {
  //   "&&&:before": {
  //     borderBottom: `1px solid var(--theme)`
  //   },
  //   "&&:after": {
  //     borderBottom: `1px solid var(--theme)`
  //   }
  // },
}));

export const FaveCard = React.memo(function GalaxyCard() {
  const mediaStyles = useCoverCardMediaStyles({ bgPosition: 'top' });
  const styles = useStyles();
  const classes = useStyles();

  const [expandedId, setExpandedId] = React.useState(-1);
  // const [actionData, setActionData] = useState(ActionData);
  // const [actionData] = useState(ActionData);
  const [filter, setFilter] = useState("");
  toast.configure(); // Configure for toast messages later (not actually sure what this does tbh, but it was in
  // the one Amy wrote so I assume it's necessary here too) -Katie

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  // KEEP THIS!!! UPDATED VERSION
  const increment = (action) => {
    // add specified number of points to the saved point total
    localStorage.setItem(
      action.susAction,
      parseInt(localStorage.getItem(action.susAction)) + parseInt(action.points)
    );

    // updateUser(authContext.email, action.susAction, action.points).then(() =>
    // window.location.reload(true)
    // console.log(action.susAction, action.points)
    console.log(action.susAction, localStorage.getItem(action.susAction));
  };

  const favAction = (action) => {
    // Get the name and info of the stored action that we're working with
    var storageName = action.susAction.concat("Fav");
    // storedFav is a boolean (is the current action favorited?)
    // NOTE: the item in storage is a string, so the following line forces it to evaluate as a boolean
    var storedFav = localStorage.getItem(storageName) == 'true';
    // In case the action hasn't been favorited before
    // NOTE: false is NaN, so here I don't check if the boolean is NaN because it often is.
    if (storedFav == null) {
      console.log("storedFav was null or NaN", storedFav);
      storedFav = false; // If not initiallized, initialize here
    }
    storedFav = !storedFav; // Toggle the favorite
    // Notify user that action was added/removed from favorites
    if (storedFav) {
      var message = action.title.concat(" added to favorites");
    } else {
      var message = action.title.concat(" removed from favorites");
    }
    toast(message, { autoClose: 4000 });
    localStorage.setItem(storageName, storedFav); // Save the updated favorite value
  };

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
           
            favorite
 
          }
        />
        <Box py={3} px={2} className={styles.content}>
          <Info useStyles={useGalaxyInfoStyles}>
            <InfoSubtitle>Your faves are here </InfoSubtitle>
            <InfoTitle>Add more!</InfoTitle>
            <InfoCaption>Go to actions tab and press the heart to add❤️</InfoCaption>
          </Info>
        </Box>
      </Card>
      <Grid container spacing={3} className={classes.actionContainer}>
        {ActionData.map(
          (action, i) =>
            localStorage.getItem(action.susAction.concat("Fav")) == 'true' && (
              <Grid item xs={12} md={6} lg={4}>
                <Card className={classes.root} key={action.title}>
                  <CardHeader
                    className={classes.cardContent}
                    action={
                      <IconButton
                      onClick={() => increment(action)}
                        // Finally found how to get ride of random old green from click and hover!
                        style={{ backgroundColor: "transparent" }}
                        aria-label="settings"
                        title="Complete this sustainable action"
                      >
                      <AddCircleIcon fontSize="large" />
                      </IconButton>
                    }
                    title={action.title}
                    subheader={"Earn ".concat(action.points, " Points!")}
                  />
                  <CardActions disableSpacing>
                    <IconButton
                      aria-label="add to favorites"
                      style={{ backgroundColor: "transparent" }}
                      // THIS IS HOW TO PASS PARAMETERS PROPERLY OMG!! -Katie
                      onClick={() =>
                        favAction(action)
                      }
                      className="favoriteIcon" 
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <IconButton
                      className={clsx(classes.expand, {
                        [classes.expandOpen]: !expandedId,
                      })}
                      onClick={() => handleExpandClick(i)}
                      style={{ backgroundColor: "transparent" }}
                      aria-expanded={expandedId === i}
                      aria-label="Show More"
                      title="Learn more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={expandedId === i} timeout="auto" unmountOnExit>
                    <CardContent>
                      <CardMedia
                        className={classes.media}
                        image={action.image}
                        title={action.title}
                      />
                      <Typography variant="h4">Impact:</Typography>
                      <Typography variant="body">{action.impact}</Typography>
                    </CardContent>
                  </Collapse>
                </Card>
              </Grid>
            )
        )}
      </Grid>
    </>
     )}
     </AuthUserContext.Consumer>
   </div>
  );
});
export default FaveCard;