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
// let totalBuzz = localStorage.getItem("buzzes")


const useStyles = (theme) => ({
  color: {
    "&:after": {
      backgroundColor: `${colors}`,
    },
  },
});

// Change message depending on value of impact
var theCO;
var theEnergy;
var theH2O;

const CODisplay = () => {
  if (parseInt(coEmissImpact) === 0) {
    theCO = "Pounds of CO2 saved! It's fine...😐"
  } else if (parseInt(coEmissImpact) === 1) {
    theCO = "Pound of CO2 saved!"
  } else {
    theCO = "Pounds of CO2 saved!"
  }
};

const EnergyDisplay = () => {
  if (parseInt(energyImpact) === 0) {
    theEnergy = "Milojoules of energy conserved! It's fine...😐"
  } else if (parseInt(coEmissImpact) === 1) {
    theEnergy = "Milojoule of energy conserved!"
  } else {
    theEnergy = "Milojoules of energy conserved!"
  }
};

const H2ODisplay = () => {
  if (parseInt(waterImpact) === 0) {
    theH2O = "Gallons of water saved! It's fine...😐"
  } else if (parseInt(waterImpact) === 1) {
    theH2O = "Gallon of water saved!"
  } else {
    theH2O = "Gallons of water saved"
  }
};

CODisplay();
EnergyDisplay();
H2ODisplay();

// cards to be rendered on the points page in account
class EnvImpactCards extends React.Component {
  constructor() {
    super();
  
    this.state = {
      cards: [],
      coEmiss: coEmissImpact,
      energy: energyImpact,
      water: waterImpact,
    };

    this.getData = this.getData.bind(this);
  }
//   var theCO;
// CODisplay = () => {
//         if (parseInt(coEmissImpact) === 0) {
//           theCO = <p>Pounds of CO2 saved! It's ok! Go log more actions to see some impact</p>
//       } else if (parseInt(coEmissImpact) === 1 ) {
//           theCO = <p> Pound of CO2 saved!</p>
//         } else {
//           theCO = <p>Pounds of CO2 saved!</p>
//         }
  // }; 


  
  

  getData() {
    let data = {
      success: true,
      cards: [
        {
          id: 1,
          score: this.state.coEmiss,
          title: "Pounds of CO2 saved!",
          colorStyling: null,
        },
        {
          id: 2,
          score: this.state.energy,
          // title: "Kilojoules of energy conserved!",
          title: `${theEnergy}`,
          colorStyling: null,
        },
        {
          id: 3,
          score: this.state.water,
          // title: "Gallons of water conserved!",
          title: `${theH2O}`,
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
      <Grid
        container
        justify="center"
        spacing={2}
        style={{ marginTop: "2rem", overflow: "hidden !important" }}
      >
        {this.state.cards ? (
          this.state.cards.map((card, i) => (
            <Grid item xs={12} md={6} key={i}>
              <Reward
                ref={(ref) => {
                  this.reward = ref;
                }}
                type="confetti"
                config={{
                  springAnimation: false,
                  elementCount: 300,
                  startVelocity: 40,
                  spread: 90,
                }}
              >
                <div>
                  <div
                    id={card.id}
                    key={card.id}
                    style={{ cursor: "pointer" }}
                    className={`${styles.burstShape} ${card.colorStyling}`}
                    onClick={() => this.reward.rewardMe(card.id)}
                  >
                    <Grid container justify="center">
                      <Typography variant="h3" component="h1">
                        {card.score}
                      </Typography>
                      <Typography variant="subtitle1">{card.title}</Typography>
                    </Grid>
                  </div>
                </div>
              </Reward>
            </Grid>
          ))
        ) : (
          <div className="empty">
            Sorry no information is currently available
          </div>
        )}
      </Grid>
    );
  }
}

export default withStyles(useStyles)(EnvImpactCards);
