import React, {Component} from 'react';
import produce, { applyPatches } from "immer";

class Counter extends Component{
    userData;
    undo = []
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
                draft.items.push({name: this.state.count,})
            },
            this.handleAddPatch
        )
        this.setState(nextState);
        localStorage.setItem("data", JSON.stringify({count: nextState.count,}))
    };

    walk = (e) =>{
        e.preventDefault()
        const nextState = produce(
            this.state,
            draft => {
                draft.count = this.state.count + 15
                draft.items.push({name: this.state.count,})
            },
            this.handleAddPatch
        )
        this.setState(nextState);
        localStorage.setItem("data", JSON.stringify({count: nextState.count,}))
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

    handleAddPatch = (patch, inversePatches) =>{
        this.undo.push(inversePatches)
    }

    handleUndo = () => {
        const undo = this.undo.pop()
        if (!undo) return;
        this.setState(applyPatches(this.state, undo))
        console.log(undo)
        localStorage.setItem("data", JSON.stringify({count: undo[1].value,}))
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