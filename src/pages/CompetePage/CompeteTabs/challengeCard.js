import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import food from "./food.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const useStyles = makeStyles((theme) => ({
  root: {
      maxWidth: 400,
      maxHeight: 500,
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function ChallengeCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  function Notify() {
    toast("Saved to do later", {
        position: "top-right"
    });
}

  return (
    <Card className={classes.root}>
      <CardHeader
        // avatar={
        //   <Avatar aria-label="recipe" className={classes.avatar}>
        //     R
        //   </Avatar>
        // }
        action={
            <div onClick={()=>Notify()}> Start challenge! </div>
        //   <IconButton >
        //     <MoreVertIcon />
        //   </IconButton>
        }
        title="Zero food waste for a week challenge"
        subheader=""
      />
      <CardMedia
        className={classes.media}
        image = {food}
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          info about challenge
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
          {/* <button onClick={Notify}> */}
        <IconButton aria-label="add to favorites" onClick={Notify}>
          <FavoriteIcon />
        </IconButton>
        {/* </button> */}
        <IconButton aria-label="share">
          <ShareIcon />
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
          <Typography paragraph>Don't waste any food for a whole week!</Typography>
          <Typography paragraph>
            Challenge challenge challenge
          </Typography>
          <Typography paragraph>
            Here is information about the challenge!!
          </Typography>
          <Typography paragraph>
   
          </Typography>
          <Typography>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
