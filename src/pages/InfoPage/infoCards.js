import React from "react";
import { Spring } from "react-spring/renderprops";
import styles from "./infoCards.module.css";

import Typography from "@material-ui/core/Typography";

// monochrome spread here: https://www.colorhexa.com/24a113
let colors = ["#15601e", "var(--theme)", "#e36569", "var(--theme-secondary)"];

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
          id: 2,
          title: "How to Participate & Earn Points",
          description:
            "After you complete a sustainable action, log the action on the Home page by tapping the plus icon to earn points. Support your dorm by living more sustainably! See how your dorm compares with the others by checking out the Leaderboard on the Compete page!",
        },
        {
          id: 3,
          title: "Master Sustainable Actions & Earn Badges",
          description:
            "Keep logging each sustainable action multiple times to earn badges. After logging an action, there will be a pop-up notification letting you know how many more times you need to log the action in order to master it. Click the dropdown on each action card to view the number of times you need to complete the action to earn a badge. View the badges you've earned in the Badges tab in Profile!",
        },
        // challenges coming soon
        // {
        //   id: 4,
        //   title: "Challenges",
        //   description:
        //     "Earth Day Challenge! Waste Challenge! Food and Drink Challenge! Recycling Challenge! Challenges coming soon on the compete page.",
        // },
        {
          id: 4,
          title: "Rewards for Being Most Sustainable ",
          description:
            "Rewards include dorm pizza parties, sustainability swag, and BRAGGING RIGHTS.",
        },
      ],
    };
    this.setState({
      cards: data.cards,
    });
  }
  componentDidMount() {
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
                    <div key={card.id}>
                      <div
                        className={styles.cardWrapper}
                        style={{
                          backgroundColor: colors[i],
                        }}
                      >
                        <Typography
                          variant="h5"
                          style={{ fontWeight: "bold" }}
                          gutterBottom
                        >
                          {card.title}
                        </Typography>
                        <Typography variant="body2">
                          {card.description}
                        </Typography>
                      </div>
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
