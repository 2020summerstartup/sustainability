import React, { Fragment, useState, useContext } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
// import Avatar from "@material-ui/core/Avatar";
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
import { updateUser } from "../Firebase";
import { AuthUserContext } from "../Session";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 280,
    backgroundColor: "var(--text-secondary)",
  },
  searchContainer: {
    display: "flex",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    paddingLeft: "20px",
    paddingRight: "20px",
    marginTop: "5px",
    marginBottom: "5px",
  },
  searchIcon: {
    alignSelf: "flex-end",
    marginBottom: "0.5rem",
  },
  searchInput: {
    width: "15rem",
    margin: "0.5rem",
    marginTop: "0",
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
}));

const ActionCard = () => {
  const classes = useStyles();
  const [expandedId, setExpandedId] = React.useState(-1);
  // const [actionData, setActionData] = useState(ActionData);
  // const [actionData] = useState(ActionData);
  // const [filter, setFilter] = useState("");

  // console.log(actionData[actionId]);
  // const { title, points, susAction } = actionData[actionId];
  // const currSusAction = susAction;


  const handleExpandClick = (i) => {
    setExpandedId(expandedId === i ? -1 : i);
  };

  const authContext = useContext(AuthUserContext);

  // const getActionCard = (actionId) => {
  //   // Commented following line out because it spammed console, feel free to add it back in
  //   console.log(actionData[`${actionId}`]);
  //   const { title, points, susAction } = actionData[`${actionId}`];
  //   const currSusAction = `${susAction}`;

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
      localStorage.setItem(action.susAction, parseInt(localStorage.getItem(action.susAction))+parseInt(action.points));
      // updateUser(authContext.email, action.susAction, action.points).then(() => 
      // window.location.reload(true)
    };

  return (
    <Fragment>
      <Grid container spacing={3} className={classes.actionContainer}>
        {ActionData.map((action, i) => (
          <Grid item xs={12} md={6} lg={4}>
            <Card className={classes.root} key={action.id}>
              <CardHeader
                className={classes.cardContent}
                action={
                  <IconButton
                    onClick={increment(action)}
                    aria-label="settings"
                    title="Complete this sustainable action!"
                  >
                    <AddCircleIcon fontSize="large" />
                  </IconButton>
                }
                title={action.title}
                subheader={"Earn ".concat(
                  action.points,
                  " Points!"
                )}
              />
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton
                  onClick={() => handleExpandClick(i)}
                  aria-expanded={expandedId === i}
                  aria-label="show more"
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
                  <Typography variant="body">
                    {action.impact}
                  </Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Fragment>
  );
};

export default ActionCard;

