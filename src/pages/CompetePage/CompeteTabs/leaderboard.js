// commented by JM, many people contributed
import React from "react";
import { ReactComponent as TrophyImg } from "../../../img/trophy.svg";
import "./leaderboard.css";
import { firestore } from "../../../services/Firebase";
import leaderBoardUpdate, { assignRanking } from "../leaderBoardUpdate";

import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";

const useStyles = (theme) => ({
  trophyWrapper: {
    position: "relative",
    textAlign: "center",
    marginTop: "1rem",
  },
  firstDorm: {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  trophy: {
    height: "17rem",
  },
});

// list of colors for each dorm to display in a different color depending on their ranking
let colors = [
  "#FFD700", //gold
  "#C0C0C0", //silver
  "#cd7f32", //bronze
  "#7A7574", //gray 
  "#7A7574",
  "#7A7574",
  "#7A7574",
  "#7A7574",
  "#7A7574",
  "#7A7574",
  "#7A7574",
  "#7A7574",
];

leaderBoardUpdate(); // called to make sure ranking & scores are correct/ up-to-date



class Leaderboard extends React.Component {
  constructor() {
    super();
    this.state = {
      leaders: [], // initalize array variable that will be populated with dorms in rank order
      div: 1,
    };
    this.getData = this.getData.bind(this);
  }

  scalePoints (dorm) {
    // for point scaling by group size
    var division = 1;
    if (dorm == "North") {
      division = 80
    } else if (dorm == "East") {
      division = 80
    } else if (dorm == "West") {
      division = 80
    } else if (dorm == "South") {
      division = 80
    } else if (dorm == "Drinkward") {
      division = 200
    } else if (dorm == "Sontag") {
      division = 120
    } else if (dorm == "Case") {
      division = 150
    } else if (dorm == "Linde") {
      division = 150
    } else if (dorm == "Atwood") {
      division = 170
    } else if (dorm == "Staff") {
      division = 80
    } else if (dorm == "Faculty") {
      division = 80
    } else if (dorm == "Arrow Vista") {
      division = 80
    }
    this.setState({
      div: division,
    })
  }

  // sets the maxScore to the leading dorm's score
  getLeaderScore() {
    // find the document/dorm that has rank 1 --> is in first place
    firestore
      .collection("dorms")
      .where("rank", "==", 1) // only want the dorm that has rank 1 --> updated by leaderBoardUpdate() above
      .get()
      .then((snapshot) => {
        // set the maxPoints state to rank 1 dorm's score
        snapshot.forEach((doc) => { // this is a forEach loop bc I don't know how to do it any other way (will only have 1 dorm in it)
          const leaderScore = doc.data().score; // total points of dorm in first place
          this.scalePoints(doc.id)
          this.setState({
            maxPoints: Math.round((leaderScore * 1000 ) / this.state.div) , 
            firstDorm: doc.id, // doc.id is the dorm's name (ie. north has a doc.id of "North")
          });
        });
      });
  }

  getData() { // this function is called every 3 minutes when user is signed in 
    //import the real dorm score data from firestore
    const getLeaders = () => {
      const newLeaders = []; // initalize array variable that will contain dorms in rank order & used to set state of leaders
      firestore.collection("dorms").get().then((snapshot) => { // fetches a snapshot of the dorms collection in firestore w/ all the dorm data
          snapshot.docs.forEach((doc) => {
            if (doc.id !== "wholeSchool") { // only want the dorms (prevents wholeSchool from displaying as a dorm on the leaderboard)
            
              newLeaders.push({
                id: 1,
                name: doc.id,
                points: Math.round(( doc.data().score * 1000) / this.state.div),
              });
            }
          });
          newLeaders.sort((a, b) => b.points - a.points); // orders by decreasing points property
          this.setState({
            leaders: newLeaders, // update the leaders array state
          });
        });
    };
    this.getLeaderScore(); // find the first place dorm & set that as the maxScore
    getLeaders(); // function call
  }

  componentDidMount() {
    this.getData();
    setInterval(this.getData, 180000);  // data is refreshing every 3 minutes --> prevents continuous refreshing & exceeding firestore limits
  }

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className="Leaderboard">
          <Typography variant="h5" component={"span"}>
            Way to be sustainable, Mudders!
          </Typography>
          <div className={classes.trophyWrapper}>
            <TrophyImg className={classes.trophy} />
            {/* MUST ATTRIBUTE AUTHOR */}
            {/* <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
            <Typography
              variant="h7"
              className={classes.firstDorm}
              component={"span"}
            >
              {this.state.firstDorm} <br />
            </Typography>
          </div>
          <div style={{ marginTop: "1rem" }}>
            {this.state.leaders ? (
              this.state.leaders.map((dorm, i) => (
                <div
                  key={i}
                  // animation for dorm name and score
                  style={{
                    animationDelay: i * 0.5 + "s",
                  }}
                  className="leader"
                >
                  {/* only top three dorms get crown logo */}
                  <div className="leader-wrap">
                    {i < 3 ? (
                      <div
                        style={{
                          backgroundColor: colors[i],
                        }}
                        className="leader-ava"
                      >
                        {/* crown icon! */}
                        <svg
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                          height={24}
                          width={24}
                          viewBox="0 0 32 32"
                        >
                          <path d="M 16 3 C 14.354991 3 13 4.3549901 13 6 C 13 7.125993 13.63434 8.112309 14.5625 8.625 L 11.625 14.5 L 7.03125 11.21875 C 7.6313215 10.668557 8 9.8696776 8 9 C 8 7.3549904 6.6450096 6 5 6 C 3.3549904 6 2 7.3549904 2 9 C 2 10.346851 2.9241199 11.470238 4.15625 11.84375 L 6 22 L 6 26 L 6 27 L 7 27 L 25 27 L 26 27 L 26 26 L 26 22 L 27.84375 11.84375 C 29.07588 11.470238 30 10.346852 30 9 C 30 7.3549901 28.645009 6 27 6 C 25.354991 6 24 7.3549901 24 9 C 24 9.8696781 24.368679 10.668557 24.96875 11.21875 L 20.375 14.5 L 17.4375 8.625 C 18.36566 8.112309 19 7.125993 19 6 C 19 4.3549901 17.645009 3 16 3 z M 16 5 C 16.564129 5 17 5.4358709 17 6 C 17 6.5641291 16.564129 7 16 7 C 15.435871 7 15 6.5641291 15 6 C 15 5.4358709 15.435871 5 16 5 z M 5 8 C 5.5641294 8 6 8.4358706 6 9 C 6 9.5641286 5.5641291 10 5 10 C 4.4358709 10 4 9.5641286 4 9 C 4 8.4358706 4.4358706 8 5 8 z M 27 8 C 27.564129 8 28 8.4358709 28 9 C 28 9.5641283 27.564128 10 27 10 C 26.435872 10 26 9.5641283 26 9 C 26 8.4358709 26.435871 8 27 8 z M 16 10.25 L 19.09375 16.4375 L 20.59375 16.8125 L 25.59375 13.25 L 24.1875 21 L 7.8125 21 L 6.40625 13.25 L 11.40625 16.8125 L 12.90625 16.4375 L 16 10.25 z M 8 23 L 24 23 L 24 25 L 8 25 L 8 23 z" />
                        </svg>
                      </div>
                    ) : null}
                    <div className="leader-content">
                      <div className="leader-name">
                        {i + 1 + ". " + dorm.name}
                      </div>
                      <div className="leader-score">
                        <div className="leader-score_title">{dorm.points}</div>
                      </div>
                    </div>
                  </div>
                  <div
                    // animation for bar
                    style={{ animationDelay: 0.5 + i * 0.5 + "s" }}
                    className="leader-bar"
                  >
                    <div
                      style={{
                        backgroundColor: colors[i],
                        // calculates the bar to show how many points
                        width: (dorm.points / this.state.maxPoints) * 100 + "%",
                      }}
                      className="bar"
                    />
                  </div>
                </div>
              ))
            ) : (
              <div className="empty">No leaders</div>
            )}
            <Typography>
                 *Points are scaled by the number of people in each dorm
               </Typography>
          </div>
        </div>
      </>
    );
  }
}

export default withStyles(useStyles)(Leaderboard);
export { leaderBoardUpdate, assignRanking };
