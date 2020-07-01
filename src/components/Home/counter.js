import React, {Component} from 'react';
import firebase from "../Firebase"

const susAction = props => props.susAction;

var grabbedData = localStorage.getItem(susAction);

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: parseInt(localStorage.getItem(susAction))
        };
    }

    increment = () =>{
        this.setState({
            count: this.state.count + 10
        })
        grabbedData = localStorage.getItem(susAction)
        localStorage.setItem(susAction, parseInt(grabbedData)+parseInt(10));
    };

    decrement = () =>{
        grabbedData = localStorage.getItem(susAction)
        if (this.state.count > 0){
        this.setState({
                count: this.state.count - 10
        })
        localStorage.setItem(susAction, parseInt(grabbedData)-parseInt(10));
        }
        else{
            this.setState({
                count: 0
            })

        localStorage.setItem(susAction, 0);
        }
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
            <button className='undoButton' onClick={this.decrement}>Undo</button>
        </div>
        );
    }
}

export default Counter;