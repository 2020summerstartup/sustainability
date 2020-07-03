import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 280,
    backgroundColor: "var(--text-secondary)",
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
    backgroundColor: "#00bfa6",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid>
      <Card className={classes.root}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="recipe" className={classes.avatar}>
          //     R
          //   </Avatar>
          // }
          action={
            <IconButton aria-label="settings">
              <AddCircleIcon fontSize="large" />
            </IconButton>
          }
          title="Recycle Water Bottle"
          subheader="Earn 10 Points!"
        />
        {/* <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent> */}
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <CardMedia
              className={classes.media}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQglBrvos1eYpEK-0d41uUgv_tmIgENlB_-GQ&usqp=CAU"
              title="Recycle water bottle image"
            />
            <Typography paragraph>Impact:</Typography>
            <Typography paragraph>
              Plastic water bottles are becoming a growing segment of the
              municipal solid waste stream in the United States. The American
              Chemistry Council estimates that the average consumer uses 166
              plastic water bottles each year and that 2.5 million plastic
              bottles are thrown away every hour. While plastic water bottles
              offer convenience, they also create unnecessary waste in
              landfills. By recycling your plastic water bottles, you can
              positively impact the environment in several ways.
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
