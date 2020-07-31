import React from "react";
import styles from "./badges2.module.css";

import Typography from "@material-ui/core/Typography";

class Badges2 extends React.Component {
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
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 3,
          title: "Walking Badge",
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 2,
          title: "Straw Badge",
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 4,
          title: "Bag Badge",
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 5,
          title: "Market Badge",
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 6,
          title: "Tea Badge",
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 7,
          title: "No Waste Badge",
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 8,
          title: "Meatless Badge",
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 9,
          title: "Cleaning Badge",
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 10,
          title: "Transportation Badge",
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 11,
          title: "Clothing Badge",
          titleStyling: null,
        },
        {
          id: 12,
          title: "Air Dry Badge",
          titleStyling: null,
          leafStyling: null,
        },
        {
          id: 13,
          title: "Climate Badge",
          titleStyling: null,
          leafStyling: null,
        },
      ],
    };
    data.badges.forEach((badge, id) => {
      if (id % 2 === 0){
        badge.titleStyling = styles.titleLeft
        badge.leafStyling = styles.left
      }else{
        badge.titleStyling = styles.titleRight
        badge.leafStyling = styles.right
      }
    })
    this.setState({
      badges: data.badges,
    });
  }

  componentDidMount() {
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
                <div className={badge.leafStyling}>
                  <Typography variant="h6" className={badge.titleStyling}>
                    {badge.title}
                  </Typography>
                </div>
                {/* <div className={styles.right}>
                  <Typography variant="h6" className={badge.styling}>
                    {badge.title}
                  </Typography>
          </div>*/}
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

export default Badges2;
