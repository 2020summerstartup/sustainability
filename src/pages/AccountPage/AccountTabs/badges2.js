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
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 3,
          title: "Walking Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 2,
          title: "Straw Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 4,
          title: "Bag Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 5,
          title: "Market Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 6,
          title: "Tea Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 7,
          title: "No Waste Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 8,
          title: "Meatless Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 9,
          title: "Cleaning Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 10,
          title: "Save Gas Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 11,
          title: "Clothing Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 12,
          title: "Air Dry Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
        {
          id: 13,
          title: "Climate Badge",
          titleStylingFront: null,
          titleStylingBack: null,
          leafStyling: null,
        },
      ],
    };
    data.badges.forEach((badge, id) => {
      if (id % 2 === 0) {
        badge.titleStylingFront = styles.titleLeftFront;
        badge.titleStylingBack = styles.titleLeftBack;
        badge.leafStyling = styles.left;
      } else {
        badge.titleStylingFront = styles.titleRightFront;
        badge.titleStylingBack = styles.titleRightBack;
        badge.leafStyling = styles.right;
      }
    });
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
                {/* <div className={styles.flipLeaf}> */}
                <div className={badge.leafStyling}>
                  <div className={styles.leafFront}>
                    <Typography variant="h6" className={badge.titleStylingFront}>
                      {badge.title}
                    </Typography>
                  </div>
                  <div className={styles.leafBack}>
                    <Typography variant="h6" className={badge.titleStylingBack}>
                      {badge.id} <br/> Actions Completed!
                    </Typography>
                  </div>
                </div>
                {/* </div> */}
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
      </div>
    );
  }
}

export default Badges2;
