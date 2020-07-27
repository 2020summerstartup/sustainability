import React from "react";
import { Spring } from "react-spring/renderprops";

// list of colors for each dorm to display in a different color depending on their ranking
// I grabbed the background color from the monochrome spread here: https://www.colorhexa.com/24a113
let colors = ["#24a113", "#39AA2A", "#4FB342", "#65BD59"];

class InfoCards extends React.Component {
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
          title: "About Us",
          description:
            "The 2020 Summer Startup Team works with sustainability organizations at Harvey Mudd like ASHMC sustainability and Engineers of a Sustainable World to help promote more eco-friendly practices on our campus through friendly competition.",
        },
        {
          id: 3,
          title: "Challenges",
          description:
            "Earth Day Challenge! Waste Challenge! Food and Drink Challenge! Recycling Challenge! Check out the current challenges on the compete page.",
        },
        {
          id: 2,
          title: "How to Participate & Earn Points",
          description:
            "Sign up with your HMC email! Log your sustainable actions on the home page, and earn points for your dorm by living more sustainably!",
        },
        {
          id: 4,
          title: "Current Rewards",
          description:
            "Rewards include dorm pizza parties, sustainability swag, and BRAGGING RIGHTS. Funded by ASHMC Sustainability and ESW! (Except for the bragging rights. Those are free.) NOTE: We should talk about how these prizes would actually be funded. Can we chat with ASHMC Sustainability?",
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
                    // <div
                    //   key={card.id}
                    //   // animation for dorm name and score *change later
                    //   style={{
                    //     animationDelay: i * 0.5 + "s",
                    //   }}
                    //   className="card"
                    // >
                    <div
                      key={i}
                    // style={{
                    //   animationDelay: i * 0.5 + "s",
                    // }}
                    >
                      <div
                        style={{
                          backgroundColor: colors[i],
                          color: "white",
                          padding: "1.5rem",
                          borderRadius: "10px",
                          margin: "0 0.5rem",
                          maxWidth: "600px",
                          marginTop: "2rem",
                        }}
                        // className={styles.cardWrapper}
                      >
                        <h1 className="card-name">{card.title}</h1>
                        <p className="card-description">{card.description}</p>
                      </div>
                      {/* </div> */}
                    </div>
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

export default InfoCards;
