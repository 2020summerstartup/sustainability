import React from "react";
import Reward from "react-rewards";
import styles from "./envImpactCards.module.css";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";

let colors = ["yellow", "green", "blue"];
let coEmissImpact = localStorage.getItem("coEmiss");
let energyImpact = localStorage.getItem("energy");
let waterImpact = localStorage.getItem("water");

const useStyles = (theme) => ({
  color: {
    "&:after": {
      backgroundColor: `${colors}`,
    },
  },
});

class EnvImpactCards extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    let data = {
      success: true,
      cards: [
        {
          id: 1,
          score: coEmissImpact,
          title: "Pounds of CO2 saved!",
          colorStyling: null,
        },
        {
          id: 2,
          score: energyImpact,
          title: "Kilojoules of energy conserved!",
          colorStyling: null,
        },
        {
          id: 3,
          score: waterImpact,
          title: "Gallons of water conserved!",
          colorStyling: null,
        },
      ],
    };
    data.cards.forEach((card, id) => {
      if (id === 0) {
        card.colorStyling = styles.co2;
      }
      if (id === 1) {
        card.colorStyling = styles.energy;
      }
      if (id === 2) {
        card.colorStyling = styles.water;
      }
    });
    this.setState({
      cards: data.cards,
    });
  }
  componentDidMount() {
    this.getData();
  }

  render() {

    return (
      <>
        <Grid container justify="center" spacing={2} style={{ marginTop: "2rem" }}>
          {this.state.cards ? (
            this.state.cards.map((card, i) => (
              <Grid item xs={12} md={6} key={i}>
                <div>
                  <Reward
                    ref={(ref) => {
                      this.reward = ref;
                    }}
                    type="confetti"
                    config={{
                      springAnimation: true,
                      elementCount: 100,
                    }}
                  >
                    <div id={i} key={i}
                      className={`${styles.burstShape} ${card.colorStyling}`}
                      onClick={() => this.reward.rewardMe(i)}
                    >
                      {/* The next two comments are taken out of the above div tag to fix netlify deploy:
                         style={{ cursor: "pointer" }}
                         for some reason the onclick only refers to the last impact card */}
                      <Grid container justify="center">
                        <Typography variant="h3" component="h1">
                          {card.score}
                        </Typography>
                        <Typography variant="subtitle1">
                          {card.title}
                        </Typography>
                      </Grid>
                    </div>
                  </Reward>
                </div>
              </Grid>
            ))
          ) : (
            <div className="empty">
              Sorry no information is currently available
            </div>
          )}
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(EnvImpactCards);
