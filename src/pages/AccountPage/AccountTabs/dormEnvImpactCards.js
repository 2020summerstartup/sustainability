import React from "react";
import { Spring } from "react-spring/renderprops";
import { getDorm} from '../../../services/Firebase';


//gets the user's Environmental Impact Data from firebase

let dorm = localStorage.getItem('dorm')
getDorm().doc(dorm).get().then( snapshot => {
  let envImpact = snapshot.get('impact')
  localStorage.setItem('dormBuzzTotal', envImpact.buzzTotal);
  localStorage.setItem('dormCoEmiss', envImpact.coEmiss);
  localStorage.setItem('dormEnergy', envImpact.energy);
  localStorage.setItem('dormWater', envImpact.water);
})
console.log(localStorage.getItem('buzzTotal'))

// set variables that I will need later when rendering cards
let colors = ["#24a113", "#39AA2A", "#4FB342", "#65BD59"];
let buzzTotal = localStorage.getItem('dormBuzzTotal');
let coEmiss = localStorage.getItem('dormCoEmiss');
let energy = localStorage.getItem('dormEnergy');
let water = localStorage.getItem('dormWater');

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
            score: buzzTotal,
            title: "Total Actions Logged!",
            },
          {
            id: 3,
            score: coEmiss,
            title: "Total lbs of CO2 saved!",
          },
          {
            id: 2,
            score: energy,
            title: "Total KJs of energy conserved!",
          },
          {
            id: 4,
            score: water,
            title: "Total gallons of water conserved!",
          },
        ],
      };
      this.setState({
        cards: data.cards,
      });
    }
    componentWillMount() {
      this.getData();
    }
  
    render() {
      return (
        <Spring
          from={{ opacity: 0, marginTop: -1200 }}
          to={{ opacity: 1, marginTop: 0 }}
          config={{ delay: 0, duration: 2000 }}
        >
          {(props) => (
            <div style={props}>
              <div className="InfoCards">
                <div className="cards">
                  {this.state.cards ? (
                    this.state.cards.map((card, i) => (
                    <center>
                      <div>
                        <div
                          style={{
                            backgroundColor: colors[i],
                            color: "white",
                            padding: "1.5rem",
                            borderRadius: "10px",
                            margin: "0 0.5rem",
                            maxWidth: "400px",
                            marginTop: "2rem",
                          }}
                        >
                          <h3 className="card-name">{card.score}</h3>
                          <p className="card-description">{card.title}</p>
                        </div>
                      </div>
                      </center>
                    ))
                  ) : (
                    <div className="empty">
                      Sorry no information is currently available
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Spring>
      );
    }
  }
  
  export default EnvImpactCards;