import React, {Component} from 'react';
import firebase from "../Firebase"

// TODO: I'd love to get it so the entire page doesn't have to refresh just to have the counter update.
// That's an issue for further into development though -- it's not a big problem, so we don't need to
// worry about it yet.

// TODO: Outstanding issue: The user has to start by pressing "undo" to initialize the score to 0 instead of NaN.
// No idea how to initialize the counter the first time without it being overwritten every time the user opens the
// file. Maybe I can jank something together with "if val== NaN, then val = 0" or something?? Will try later.
// THIS ISSUE IS FIXED IN THE ACTION CARD, WHICH IS THE ONLY PLACE IT MATTERS NOW. THIS ENTIRE CLASS IS MOVING TOWARDS
// BECOMING OBSOLETE. -Katie.

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: parseInt(localStorage.getItem(this.props.susAction))
        };
    }

    increment = () =>{
        localStorage.setItem(this.props.susAction, parseInt(localStorage.getItem(this.props.susAction))+parseInt(10));
        this.setState({
            count: parseInt(localStorage.getItem(this.props.susAction))
        })
         window.location.reload(true);
    };

    // Trying to incorporate Jessica's counter here
    // This function works, but as soon as I change it to incrementX and give it a parameter the page just won't load.
    // I'm not sure what's actually going wrong with it yet.
    incrementFive = () =>{
        localStorage.setItem(this.props.susAction, parseInt(localStorage.getItem(this.props.susAction))+5);
        this.setState({
            count: parseInt(localStorage.getItem(this.props.susAction))
        })
        window.location.reload(true);
    };

    decrement = () =>{
        if (this.state.count > 0){
            localStorage.setItem(this.props.susAction, parseInt(localStorage.getItem(this.props.susAction))-parseInt(10));
            this.setState({
                count: parseInt(localStorage.getItem(this.props.susAction))
            })
        }
        else{
            this.setState({
                count: 0
            })
            localStorage.setItem(this.props.susAction, 0);
        }
        window.location.reload(true);
    };

    writeUserData(email, count) {
        firebase.database().ref('users/' + email).set({
          email: email,
          count: count
        });
      }
    
    render(){
    return (
        <div>
            <p>You have earned a total of {this.state.count} points from this sustainable action!</p>
            <button className='buzzButton' onClick={this.increment}>BUZZ</button>
            <span> </span>
            <button className='undoButton' onClick={this.decrement}><span role="img" aria-label="undo">↩️</span></button>
        </div>
        );
    }
}

export default Counter;