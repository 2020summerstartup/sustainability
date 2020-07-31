import { AutoRotatingCarousel} from 'material-auto-rotating-carousel';
import React, { Component } from 'react';
import {Slide} from 'material-auto-rotating-carousel';
import LandingPage from "../LandingPage/muiLandingPage";
import welcomeImg from "../../img/welcome.svg";
import suslogoImg from "../../img/suslogo.svg";
// import First from './first.png';
// import Login from './login.gif';
// import Swipe from './Swipe.png';
// import Result from './result.gif';
// import './css/Main.css';


const { indigo, lightBlue, blue, cyan} = require('@material-ui/core/colors');
const Button = require('@material-ui/core/Button').default;

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
                //   media={<img src={Login} class="snapgrid"/>}
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
                //   media={<img src={Result} class="snapgrid" />}
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