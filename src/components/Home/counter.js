import React, {Component} from 'react';
import firebase from "../Firebase"

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        };
    }

    increment = () =>{
        this.setState({
            count: this.state.count + 10
        })
    };

    decrement = () =>{
        if (this.state.count > 0){
        this.setState({
                count: this.state.count - 10
        })
        }
        else{
            this.setState({
                count: 0
            })
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
            <p>You have earned a total of {this.state.count} points from recycling water bottles!</p>
            <button className='buzzButton' onClick={this.increment}>BUZZ</button>
            <button className='undoButton' onClick={this.decrement}>Undo</button>
        </div>
        );
    }
}

export default Counter;