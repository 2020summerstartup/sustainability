import React, {Component} from 'react';
import firebase from "../Firebase"

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: parseInt(localStorage.getItem(this.props.susAction))
        };
    }

    increment = () =>{
        this.setState({
            count: this.state.count + 10
        })
        localStorage.setItem(this.props.susAction, parseInt(localStorage.getItem(this.props.susAction))+parseInt(10));
    };

    decrement = () =>{
        if (this.state.count > 0){
        this.setState({
                count: this.state.count - 10
        })
        localStorage.setItem(this.props.susAction, parseInt(localStorage.getItem(this.props.susAction))-parseInt(10));
        }
        else{
            this.setState({
                count: 0
            })

        localStorage.setItem(this.props.susAction, 0);
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
            <button className='undoButton' onClick={this.decrement}><span role="img" aria-label="undo">↩️</span></button>
        </div>
        );
    }
}

export default Counter;