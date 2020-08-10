import React from 'react';
import styles from "../../AccountPage/AccountTabs/badges2.module.css";

import Typography from "@material-ui/core/Typography";

const ComingSoon = () => {
    return (


<div className={styles.fancyBorder}>
          <Typography
            variant="h4"
            style={{
              color: "white",
              justify: "center",
              textShadow: "2px 2px 3px black",
            }}
          >
           Challenges are in development! 
           Come back soon!
          </Typography>
          <Typography
            variant="subtitle1"
            style={{ color: "white", textShadow: "2px 2px 3px black" }}
          >
          
          </Typography>
        </div>
    ); 
}

export default ComingSoon;