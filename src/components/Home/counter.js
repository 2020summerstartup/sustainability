import React, {Component} from 'react';
import produce from "immer";

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
            <p>You have earned a total of {this.state.count} points!</p>
            <button className='buzzButton' onClick={this.recycle} onChange={this.handleChange}>Recycle Water Bottle</button>
            <button className='buzzButton' onClick={this.walk} onChange={this.handleChange}>Walk to Claremont Village</button>
            <button className='undoButton' onClick={this.handleUndo}>Undo</button>
        </div>
        );
    }
}

export default Counter;