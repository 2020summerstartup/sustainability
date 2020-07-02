import React, {Component} from 'react';
import firebase from "../Firebase"

var last_point;

class Counter extends Component{
    userData;
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            count: 0,
        };
    }

    recycle = (e) =>{
        this.setState(prevState => ({
            count: prevState.count + 10
          }));
        e.preventDefault()
        localStorage.setItem("data", JSON.stringify({count: this.state.count + 10,}))
    };

    walk = (e) =>{
        this.setState(prevState => ({
            count: prevState.count + 15
          }));
        e.preventDefault()
        localStorage.setItem("data", JSON.stringify({count: this.state.count + 15,}))
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
    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.name})
    }
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('data'));
     
        if (localStorage.getItem('data')) {
            this.setState({
                count: this.userData.count
        })
    } else {
        this.setState({
            count: 0,
        })
    }
    }
    render(){
    return (
        <div>
            <p>You have earned a total of {this.state.count} points!</p>
            <button className='buzzButton' onClick={this.recycle} onChange={this.handleChange}>Recycle Water Bottle</button>
            <button className='buzzButton' onClick={this.walk} onChange={this.handleChange}>Walk to Claremont Village</button>
            <button className='undoButton' onClick={this.decrement}>Undo</button>
        </div>
        );
    }
}

export default Counter;