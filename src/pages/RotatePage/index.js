import { AutoRotatingCarousel} from 'material-auto-rotating-carousel';
import React, { Component } from 'react';
import styles from "./rotate.module.css";
import {Slide} from 'material-auto-rotating-carousel';
import LandingPage from "../LandingPage/muiLandingPage";
import welcomeImg from "../../img/welcome.svg";
import suslogoImg from "../../img/suslogo.svg";
import pointsGif from "../../img/points.gif";
import addGif from "../../img/add.gif";
// import First from './first.png';
// import Login from './login.gif';
// import Swipe from './Swipe.png';
// import Result from './result.gif';
// import './css/Main.css';

// Following line was unused and throwing a warning so I commented it out -Katie
// const Button = require("@material-ui/core/Button").default;

export class Rotate extends Component {
    constructor() {
      super();
      this.state = {
              }
    }
    render(){
        return(
            <div>
              <AutoRotatingCarousel autoplay={false} interval = {9000} hideArrows = {false} open={true} mobile = {true} label = 'Get started' onStart = {()=>window.location.href='/signup'}>
                <Slide
                // media ={<LandingPage class="responsive"/> }
               
                  media={<img src={suslogoImg} class="responsive" />}
                  mediaBackgroundStyle={{ backgroundColor: "#15601e" }}
                  style={{ backgroundColor:  "#15601e" }}
                  title='What will we accomplish?'
                  subtitle= 'Lets be sustainable together and make this world a better place one action at a time!'
                />
                
                <Slide
                media={<img src={pointsGif} style={{
                    // display: "flex",
                    // alignContent: "center",
                    // justifyContent: "center",
                    // backgroundSize: "color",
                    marginTop: "2rem",
                    maxHeight: "40rem" ,
                    maxWidth: "15rem"}}  
                />}
                // media={<img src={pointsGif}  className={`${"snapgrid"} ${styles.image}`}/>}
                //   media={<img src={`url(${"https://media.giphy.com/media/f6m60G0oFoyEITq2Rs/giphy.gif"})`} class="snapgrid"/>}
                  mediaBackgroundStyle={{ backgroundColor: "#1c8028" }}
                  style={{ backgroundColor: "#1c8028" }}
                  title="Earn points!"
                  subtitle="Click the plus icon to earn points and log your sustainable actions. Save your favorites so they're easy to find! Special surprise for mastering an action"
                />
                <Slide
                //   media={<img src={Swipe} class="responsive"/>}
                  mediaBackgroundStyle={{ backgroundColor: "#24a133" }}
                  style={{ backgroundColor:  "#24a133" }}
                  title='Compete Across Dorms!'
                  subtitle='Encourage your dorm friends to be more eco-friendly!'
                />
                <Slide
                media={<img src={addGif} style={{
                  marginTop: "2rem",
                  maxHeight: "40rem" ,
                maxWidth: "15rem"}} />}  
                  mediaBackgroundStyle={{ backgroundColor: "#4fb35b" }}
                  style={{ backgroundColor: "#4fb35b" }}
                  title='Add to Home Screen!'
                  subtitle='Easy to access to our app!'
                />
              </AutoRotatingCarousel>
            </div>
        );
  }
}
export default Rotate;
