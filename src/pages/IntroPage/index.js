import React, { useState } from "react";
// import ReactDOM from "react-dom";
import IntroSlider from "react-intro-slider";

function IntroPage() {
  const [sliderIsOpen, setSliderIsOpen] = useState(true);
  const handleClose = () => {
    setSliderIsOpen(false);
  };
  const slides = [
    {
      title: "React Intro Slider",
      description: "Configurable app introduction slider",
      background: "#D497F0",
      image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Film_reel.svg"
    },
    {
      title: "Highly Customizable",
      description:
        "Behavior and looks can be customized by passing the necessary props to the slider",
      image:
        "https://i.pinimg.com/originals/e3/12/cc/e312ccd032c57a24de52b002270fffb1.png"
    },
    {
      title: "Still in development",
      background: "#ADD8E6",
      image:
        "http://holidaywonders.net/wp-content/uploads/2019/05/unique-cartoon-rocket-ship-clipart-clip-art-bay-inspiration.png",
      description: "More features will be added!"
    }
  ];

  return (
    <IntroSlider
      sliderIsOpen={sliderIsOpen}
      slides={slides}
      size="fullscreen"
      skipButton
      handleClose={handleClose}
      slideStyle={{ borderRadius: "10px" }}
      sliderStyle={{ borderRadius: "10px" }}
    />
  );
}

export default IntroPage;


