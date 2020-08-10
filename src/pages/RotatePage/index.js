import React, { Component } from "react";
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
import suslogoroundImg from "../../img/suslogo_roundedcorners.svg";
import pointsGif from "../../img/points.gif";
import addGif from "../../img/add.gif";


export class Rotate extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <AutoRotatingCarousel
          autoplay={true}
          interval={7000}
          hideArrows={false}
          open={true}
          mobile={true}
          label="Get started"
          onStart={() => (window.location.href = "/signup")}

        >
          {/* Intro slide */}
          <Slide
            media={
              <img
                alt=""
                src={suslogoroundImg}
                class="responsive"
                style={{ width: "80%", height: "80%" }}
              />
            }
            mediaBackgroundStyle={{ backgroundColor: "#15601e" }}
            style={{ backgroundColor: "#15601e" }}
            title="What will we achieve?"
            subtitle="Lets be sustainable together and make this world a better place one action at a time with some healthy competition for some awesome prizes!"
          />
          {/* Earn Points Slide */}
          <Slide
            media={
              <img
                alt=""
                src={pointsGif}
                style={{
                  marginTop: "2rem",
                  margin: "auto",
                  height: "auto",
                  width: "auto",
                }}
              />
            }
            mediaBackgroundStyle={{ backgroundColor: "#1c8028" }}
            style={{ backgroundColor: "#1c8028" }}
            title="Log actions, earn points."
            subtitle="Log your actions to earn points for you and your dorm! Save your favorites! Special surprise for mastering an action ;)"
          />
          {/* Leadership board */}
          <Slide
            //   media={<img src={Swipe} class="responsive"/>}
            mediaBackgroundStyle={{ backgroundColor: "#24a133" }}
            style={{ backgroundColor: "#24a133" }}
            title="Compete Across Dorms!"
            subtitle="Prizes for the most sustainable dorm!"
          />
          <Slide
            media={<img alt="" src={addGif} class="snapgrid" style={{
              marginTop: "2rem",
              margin: "auto",
              height: "auto",
              width: "auto",
            }}
            />}
            mediaBackgroundStyle={{ backgroundColor: "#4fb35b" }}
            style={{ backgroundColor: "#4fb35b" }}
            title="Add to Home Screen!"
            subtitle="Last thing before you get started. Add our app to your home screen for easy to access to our app!"
          />
        </AutoRotatingCarousel>
      </div>
    );
  }
}
export default Rotate;
