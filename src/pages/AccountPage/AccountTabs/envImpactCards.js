// commented by KR & JM
import React from "react";
import Reward from "react-rewards";
import styles from "./envImpactCards.module.css";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { addName } from '../../../redux/store/actions/test'

let colors = ["yellow", "green", "blue"];


const useStyles = () => ({
  color: {
    "&:after": {
      backgroundColor: `${colors}`,
    },
  },
});

// Changes display message depnding on user's impact
// Intializes variables for text/title to be displayed on impact cards
var theCO;
var theEnergy;
var theH2O;

// Carbon Dioxide message
const CODisplay = () => {
  if (parseInt(localStorage.getItem("coEmiss")) === 0) {
    theCO = "Pounds of CO2 saved."
  } else if (parseInt(localStorage.getItem("coEmiss")) === 1) {
    theCO = "Pound of CO2 saved!"
  } else {
    theCO = "Pounds of CO2 saved!"
  }
};

// Energy message
const EnergyDisplay = () => {
  if (parseInt(localStorage.getItem("energy")) === 0) {
    theEnergy = "Megajoules of energy conserved."
  } else if (parseInt(localStorage.getItem("energy")) === 1) {
    theEnergy = "Megajoule of energy conserved!"
  } else {
    theEnergy = "Megajoules of energy conserved!"
  };
};

// Water conserved message
const H2ODisplay = () => {
  if (parseInt(localStorage.getItem("water")) === 0) {
    theH2O = "Gallons of water saved."
  } else if (parseInt(localStorage.getItem("water")) === 1) {
    theH2O = "Gallon of water saved!"
  } else {
    theH2O = "Gallons of water saved"
  }
};

// Call the functions to make sure title display on cards (suns) are updated
CODisplay();
EnergyDisplay();
H2ODisplay();

// Enviornmental impact cards for account/points page
class EnvImpactCards extends React.Component {
  constructor() {
    super();
  
    this.state = {
      cards: [],
      coEmiss: localStorage.getItem("coEmiss"),
      energy: localStorage.getItem("energy"),
      water: localStorage.getItem("water"),
    };

    this.getData = this.getData.bind(this);
  }


  // Data for impact cards
  getData() {
    let data = {
      success: true,
      cards: [
        {
          id: 1,
          score: this.state.coEmiss,
          title: `${theCO}`,
          colorStyling: null,
        },
        {
          id: 2,
          score: this.state.energy,
          title: `${theEnergy}`,
          colorStyling: null,
        },
        {
          id: 3,
          score: this.state.water,
          title: `${theH2O}`,
          colorStyling: null,
        },
      ],
    };
    // Colors depending on impact category
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
    const name = this.props;
    console.log(name);

    return (
      <Grid
        container
        justify="center"
        spacing={2}
        style={{ marginTop: "2rem", overflow: "hidden !important" }}
      >
        {/* Display of cards - maps through data */}
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
                    onClick={
                      // this.props.addName()
                      // console.log('clicked')
                      () => this.reward.rewardMe(card.id)
                    }
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
            Sorry, no information is currently available
          </div>
        )}
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    a: '42',
    names: state.test.example
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addName: () => {dispatch(addName())}
  }
}


// Styles with Material UI
export default withStyles(useStyles)((connect(mapStateToProps, mapDispatchToProps))(EnvImpactCards));

