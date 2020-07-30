import React from "react";
import { Spring } from "react-spring/renderprops";
import styles from "./pwa.module.css";
// list of colors for each dorm to display in a different color depending on their ranking
// I grabbed the background color from the monochrome spread here: https://www.colorhexa.com/24a113
// let colors = [rgb(139,139,139)];

class PwaCard extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: [],
    };
    // this.getData = this.getData.bind(this);
  }
//   getData() {
//     let data = {
//       success: true,
//       cards: [
//         {
//           id: 1,
//           title: "About Us",
//           description:
//             "The 2020 Summer Startup Team works with sustainability organizations at Harvey Mudd like ASHMC sustainability and Engineers of a Sustainable World to help promote more eco-friendly practices on our campus through friendly competition.",
//         },
//       ],
//     };
//     this.setState({
//       cards: data.cards,
//     });
//   }
//   componentWillMount() {
//     this.getData();
//   }

  render() {
    return (
    //   <Spring
    //     from={{ opacity: 0, marginTop: -1200 }}
    //     to={{ opacity: 1, marginTop: 0 }}
    //     config={{ delay: 0, duration: 2000 }}
    //   >
    //     {(props) => (
          <div>
            <div className="InfoCards">
              <div className="cards">
                      <div className={styles.cardStyle}
                        // style={{
                          
                        //   backgroundColor: "red",
                        // background: "linear-gradient(50deg, #8b8b8b 5%, #c2d6bf 20%, #24a113 36%, #c2d6bf 80%, #667a91 97%)",
                        // background: "linear-gradient(to right, #8b8b8b, #24a113, #667a91)",
                        //   color: "white",
                        //   padding: "1.5rem",
                        //   borderStyle: "solid",
                          // border: "5px solid #C0C0C0",
                          // borderRadius: "10px",
                          // margin: "0 0.5rem",
                          // maxWidth: "600px",
                          // marginTop: "2rem",
                        // }}
                        // className={styles.cardWrapper}
                      >
                        <h1 className="card-name">
  
                          
                            Add our app to your home screen!
                            </h1>
                        <p className="card-description">            
                        The 2020 Summer Startup Team works with sustainability organizations at Harvey Mudd like ASHMC sustainability and Engineers of a Sustainable World to help promote more eco-friendly practices on our campus through friendly competition.,
                        </p>
                      </div>
                      {/* </div> */}
                    </div>
                  {/* )) */}
                {/* ) : (
                  <div className="empty">
                    Sorry no information is currently available
                  </div> */}
               </div>
               </div>
    //     )}
    //   </Spring>
    );
  }
}

export default PwaCard;
