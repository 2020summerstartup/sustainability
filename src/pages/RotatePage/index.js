import React, { Component } from "react";
// Package for Carousel
import { AutoRotatingCarousel, Slide } from "material-auto-rotating-carousel";
// Image and Gif Imports
import suslogoroundImg from "../../img/suslogo_roundedcorners.svg";
import earnGif from "../../img/earn.gif";
import competeGif from "../../img/compete.gif";
import addtohomeGif from "../../img/addToHome.GIF";

// Landing Page Carousel
export class Rotate extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <AutoRotatingCarousel
          autoplay={false}
          interval={7000}
          hideArrows={false}
          open={true}
          mobile={true}
          // Pushes user to signin page
          label="Get started"
          onStart={() => (window.location.href = "/signin")}
        >
          {/* Intro slide */}
          <Slide
            media={
              <img
                alt=""
                src={suslogoroundImg}
                className="responsive"
                style={{ width: "80%", height: "80%" }}
              />
            }
            mediaBackgroundStyle={{ backgroundColor: "#15601e" }}
            style={{ backgroundColor: "#15601e" }}
            title="What will we achieve?"
            subtitle="Let's be sustainable together and make this world a better place one action at a time with healthy competition for some awesome prizes!"
          />

          {/* Earn Points Slide */}
          <Slide
            media={
              <img
                alt=""
                src={earnGif}
                style={{
                  paddingTop: "2rem",
                  width: "auto",
                }}
              />
            }
            mediaBackgroundStyle={{ backgroundColor: "#1c8028" }}
            style={{ backgroundColor: "#1c8028" }}
            title="Log actions, earn points."
            subtitle="Being sustainable earns points for you and your dorm! Save your favorites! Special surprise for mastering an action ;)"
          />

          {/* Leaderboard Slide */}
          <Slide
            media={
              <img
                alt=""
                src={competeGif}
                style={{
                  paddingTop: "2rem",
                  width: "auto",
                }}
              />
            }
            mediaBackgroundStyle={{ backgroundColor: "#24a133" }}
            style={{ backgroundColor: "#24a133" }}
            title="Compete Across Dorms!"
            subtitle="See how your dorm stacks up against your friends' dorms! Prizes for winning dorm!"
          />

          {/* Add To Home Screen Slide */}
          <Slide
            media={
              <img
                alt=""
                src={addtohomeGif}
                className="snapgrid"
                style={{
                  paddingTop: "2rem",
                  width: "auto",
                }}
              />
            }
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
