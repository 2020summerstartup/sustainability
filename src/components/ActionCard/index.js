import React, { Fragment, useState, useContext } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
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
import { fade, makeStyles } from "@material-ui/core/styles";

import ActionData from "../ActionData/index.json";
import { updateUserPoint } from "../Firebase";
import { AuthUserContext, withAuthorization} from "../Session";

// I pulled these from Home's index.js
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles((theme) => ({
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
    paddingBottom: "0",
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
  // OMG I finally fixed the underline problem!!!
  underline: {
    "&:before": {
      borderBottom: "2px solid var(--text-primary)",
      marginBottom: "8px",
    },
    "&:hover:not($disabled):not($focused):not($error):before": {
      borderBottom: "2px solid var(--theme)",
      marginBottom: "8px",
    },
    "&:after": {
      borderBottom: "2px solid var(--theme)",
      marginBottom: "8px",
    }
  },
  disabled: {},
  focused: {},
  error: {}
  // underline: {
  //   "&&&:before": {
  //     borderBottom: "none"
  //   },
  //   "&&:after": {
  //     borderBottom: "none"
  //   }
  // }
}));

const ActionCard = () => {
  const classes = useStyles();
  const [expandedId, setExpandedId] = React.useState(-1);
  const authContext = useContext(AuthUserContext)
  // const [actionData, setActionData] = useState(ActionData);
  // const [actionData] = useState(ActionData);
  const [filter, setFilter] = useState("");
  var favorited = localStorage.getItem('favorited'); // Is the action favorited? Eventually this will need to be loaded from firestore (I assume)
  if (favorited == null || isNaN(favorited)) {
    console.log("favorited was null or NaN");
    favorited = false; // If not initiallized, initialize here
  }
  toast.configure(); // Configure for toast messages later (not actually sure what this does tbh, but it was in
  // the one Amy wrote so I assume it's necessary here too) -Katie

  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };



  // KEEP THIS!!! UPDATED VERSION
  //   const increment = () => {
  //     // add specified number of points to the saved point total
  //     localStorage.setItem(currSusAction, parseInt(localStorage.getItem(currSusAction))+parseInt(`${points}`));
  //     updateUser(authContext.email, susAction, points).then(() => {window.location.reload(true)})
  //   };
  // };

  // KEEP THIS!!! UPDATED VERSION
  const increment = (action) => {
    // add specified number of points to the saved point total
    localStorage.setItem(
      action.susAction,
      parseInt(localStorage.getItem(action.susAction)) + parseInt(action.points)
    );

    updateUserPoint(authContext.email, action.susAction, parseInt(action.points)).then(() => {
      window.location.reload(true)
    })
    console.log(action.susAction, localStorage.getItem(action.susAction));
  };
  const favAction = (action) => {
    // Toggle favorited (so favorite if unfavorited and vice versa)
    favorited = !favorited;
    console.log("favorited?", favorited, action.susAction);
    // Save the value (right now just one instead of one per action) in local storage
    localStorage.setItem('favorited', favorited);
    if (favorited) {
      var message = action.title + " added to favorites"
    } else {
      message = action.title + " removed from favorites"
    }
    toast(message, { autoClose: 8000 });

  };

  const favNotify = (action) => {
  };

  return (
    <Fragment>
      <Toolbar>
        <div className={classes.searchContainer}>
          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <SearchIcon className={classes.searchIcon} />
            </Grid>
            <Grid item>
              <TextField
                onChange={handleSearchChange}
                className={classes.searchInput}
                label="Search Actions"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                InputProps={{classes:{underline: classes.underline}}}
              />
            </Grid>
          </Grid>
        </div>
      </Toolbar>
      <Grid container spacing={3} className={classes.actionContainer}>
        {ActionData.map(
          (action, i) =>
            action.title.toLowerCase().includes(filter.toLowerCase()) && (
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
    </Fragment>
  );
};

const condition = (authUser) => !!authUser;
export default withAuthorization(condition)(ActionCard);