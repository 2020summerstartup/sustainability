import React from "react";
import { AuthUserContext, withAuthorization } from "../../../services/Session";
import DormSelect from "../../../components/DormSelect";
import changedormImg from "../../../img/changedorm.svg";

import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

function ChangeDorm() {
  const classes = useStyles();

  return (
    <div>
      <AuthUserContext>
        {(authUser) => (
          <div class="base-container">
            <CssBaseline />
            <div className={classes.paper}>
              <Typography variant="h5">Need to change your dorm?</Typography>
              <div className="image">
                <img alt="your account" src={changedormImg} />
              </div>
              <Typography variant="h6">Change your dorm here!</Typography>
              <DormSelect />
            </div>
          </div>
        )}
      </AuthUserContext>
    </div>
  );
}

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(ChangeDorm);
