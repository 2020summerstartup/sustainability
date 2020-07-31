import React from "react";
import { Spring } from "react-spring/renderprops";
import styles from "./envImpactCards.module.css";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

// set variables that I will need later when rendering cards
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

// cards to be rendered on the points page in account
class EnvImpactCards extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
    this.getData = this.getData.bind(this);
  }
  getData() {
    // sets the data that we will use to render the cards
    let data = {
      success: true,
      cards: [
        {
          id: 1,
          score: coEmissImpact,
          title: "Total lbs of CO2 saved!",
          colorStyling: null,
        },
        {
          id: 2,
          score: energyImpact,
          title: "Total KJs of energy conserved!",
          colorStyling: null,
        },
        {
          id: 3,
          score: waterImpact,
          title: "Total gallons of water conserved!",
          colorStyling: null,
        },
      ],
    };
    data.cards.forEach((card, id) => {
      if (id === 0){
        card.colorStyling = styles.co2
      }
      if (id === 1){
        card.colorStyling = styles.energy
      }
      if (id === 2){
        card.colorStyling = styles.water
      }
    })
    this.setState({
      cards: data.cards,
    });
  }
  componentWillMount() {
    this.getData();
  }

  render() {
    const { classes } = this.props;

    return (
      // <Spring
      //   from={{ opacity: 0, marginTop: -1200 }}
      //   to={{ opacity: 1, marginTop: 0 }}
      //   config={{ delay: 0, duration: 2000 }}
      // >
      //   {(props) => (
      //     <div style={props}>
      //       <div className="InfoCards">
      //         <div className="cards">
      <>
        {this.state.cards ? (
          this.state.cards.map((card, i) => (
            <div key={i}>
              <div
                className={`${styles.burstShape} ${card.colorStyling}`}
              >
                <h3 className="card-name">{card.score}</h3>
                <p className="card-description">{card.title}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="empty">
            Sorry no information is currently available
          </div>
        )}
      </>
      //         </div>
      //       </div>
      // </div>
      //   )}
      // </Spring>
    );
  }
}

export default withStyles(useStyles)(EnvImpactCards);
