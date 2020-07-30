import React from "react";
import styles from "./badges2.module.css";

import Typography from "@material-ui/core/Typography";

class Badge2 extends React.Component {
  constructor() {
    super();
    this.state = {
      badges: [],
    };
    this.getData = this.getData.bind(this);
  }

  getData() {
    let data = {
      success: true,
      badges: [
        {
          id: 1,
          title: "Recycle Badge",
          styling: null,
        },
        {
          id: 3,
          title: "Walking Badge",
          styling: null,
        },
        {
          id: 2,
          title: "Straw Badge",
          styling: null,
        },
        {
          id: 4,
          title: "Bag Badge",
          styling: null,
        },
        {
          id: 5,
          title: "Market Badge",
          styling: null,
        },
        {
          id: 6,
          title: "Tea Badge",
          styling: null,
        },
        {
          id: 7,
          title: "No Waste Badge",
          styling: null,
        },
        {
          id: 8,
          title: "Meatless Badge",
          styling: null,
        },
        {
          id: 9,
          title: "Cleaning Badge",
          styling: null,
        },
        {
          id: 10,
          title: "Transportation Badge",
          styling: null,
        },
        {
          id: 11,
          title: "Clothing Badge",
          styling: null,
        },
        {
          id: 12,
          title: "Air Dry Badge",
          styling: null,
        },
        {
          id: 13,
          title: "Climate Badge",
          styling: null,
        },
      ],
    };
    badges = this.assignStyling(data.badges);
    this.setState({
      badges: badges,
    });
  }

  assignStyling(badges) {
    badges.forEach((badge) => {
      if (badge.id % 2 === 0) {
        badge.styling = styles.titleLeft;
      } else {
        badge.styling = styles.titleRight;
      }
    })
    return badges
  };

  componentWillMount() {
    this.getData();
  }

  render() {
    return (
      <div className={styles.root}>
        <Typography variant="h5">
          Congratulations {localStorage.getItem("name")}! You have earned
          [number] badges!
        </Typography>
        <div className={styles.leaves}>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>

        {this.state.badges ? (
          this.state.badges.map((badge, i) => (
            <div key={i}>
              <div className={styles.column}>
                <div className={styles.left}>
                  <Typography variant="h6" className={styles.titleLeft}>
                    {badge.title}
                  </Typography>
                </div>
                <div className={styles.right}>
                  <Typography variant="h6" className={styles.titleRight}>
                    {badge.title}
                  </Typography>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="empty">
            <Typography variant="h5">
              You haven't earned any badges yet :(
            </Typography>
          </div>
        )}
        {/* <div className={styles.column}>
          <div className={styles.left}>
            <Typography variant="h6" className={styles.titleLeft}>
              Recyling Badge
            </Typography>
          </div>
          <div className={styles.right}>
            <Typography variant="h6" className={styles.titleRight}>
              Cleaning Badge
            </Typography>
          </div>
          <div className={styles.left}>
            <Typography variant="h6" className={styles.titleLeft}>
              Gardening Badge
            </Typography>
          </div>
          <div className={styles.right}>
            <Typography variant="h6" className={styles.titleRight}>
              No Waste Badge
            </Typography>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Badge2;
