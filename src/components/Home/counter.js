import React, {Component} from 'react';
import produce from "immer";

// TODO: Outstanding issue: The user has to start by pressing "undo" to initialize the score to 0 instead of NaN.
// No idea how to initialize the counter the first time without it being overwritten every time the user opens the
// file. Maybe I can jank something together with "if val== NaN, then val = 0" or something?? Will try later.

class Counter extends Component{
    userData;
    constructor(props){
        super(props)
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            count: 0,
            items: [],
        };
    }

    recycle = (e) =>{
        e.preventDefault()
        const nextState = produce(
            this.state,
            draft => {
                draft.count = this.state.count + 10
                draft.items.push({name: 10,})
            },
        )
        this.setState(nextState);
        localStorage.setItem("data", JSON.stringify({count: nextState.count, items: nextState.items}))
    };
 
    walk = (e) =>{
        e.preventDefault()
        const nextState = produce(
            this.state,
            draft => {
                draft.count = this.state.count + 15
                draft.items.push({name: 15,})
            },
        )
        this.setState(nextState);
        localStorage.setItem("data", JSON.stringify({count: nextState.count, items: nextState.items}))
    };

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.name})
    }

    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('data'));
     
        if (localStorage.getItem('data')) {
            this.setState({
                count: this.userData.count,
                items: this.userData.items,
        })
    } else {
        this.setState({
            count: 0,
            items: [],
        })
    }
    }

    handleUndo = () => {
        const items = JSON.parse(localStorage.getItem('data')).items
        if (this.state.count === 0) return;
        const last = items.pop()
        this.setState({
            count: this.state.count-last.name, 
            items: items
        })
        localStorage.setItem("data", JSON.stringify({count: this.state.count-last.name, items: items}))
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