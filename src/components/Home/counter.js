import React, {Component} from 'react';
import firebase from "../Firebase"

var last_point;

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            count: 0
        };
    }

    recycle = () =>{
        this.setState(prevState => ({
            count: prevState.count + 10
          }));
    };

    walk = () =>{
        this.setState(prevState => ({
            count: prevState.count + 15
          }));
    };

    decrement = () =>{
        if (this.state.count > 0){
            this.setState(prevState => ({
                count: prevState.count - last_point
              }));
        }
        else{
            this.setState({
                count: 0
            })
        }
    };
    render(){
    return (
        <div>
            <p>You have earned a total of {this.state.count} points!</p>
            <button className='buzzButton' onClick={this.recycle}>Recycle Water Bottle</button>
            <button className='buzzButton' onClick={this.walk}>Walk to Claremont Village</button>
            <button className='undoButton' onClick={this.decrement}>Undo</button>
        </div>
        );
    }
}

export default Counter;