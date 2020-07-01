import React, {Component} from 'react';
import firebase from "../Firebase"

class Counter extends Component{
    constructor(props){
        super(props)
        this.state = {
            countFive: 0,
            countTen: 0,
            countFifteen: 0,
            totalCount: 0,
        };
    }

    incrementFive = () => {
        this.setState({
            countFive: this.state.countFive + 5,
            totalCount: this.state.totalCount + 5,
        })  
    };

    decrementFive = () => {
        if (this.state.countFive > 5){
            this.setState({
                countFive: this.state.countFive - 5
            })
            }
            else{
                this.setState({
                    countFive: 0
                })
            }
        if (this.state.totalCount > 5){
            this.setState({
                totalCount: this.state.totalCount -5
            })
        }
        else{
            this.setState({
                totalCount: 0
            })
        } 
    };

    incrementTen = () =>{
        this.setState({
            countTen: this.state.countTen + 10,
            totalCount: this.state.totalCount + 10,
        })
    };

    decrementTen = () =>{
        if (this.state.countTen > 10){
            this.setState({
                countTen: this.state.countTen - 10
            })
            }
            else{
                this.setState({
                    countTen: 0
                })
            }
        if (this.state.totalCount > 10){
            this.setState({
                totalCount: this.state.totalCount -10
            })
        }
        else{
            this.setState({
                totalCount: 0
            })
        }
        }

    incrementFifteen = () => {
        this.setState({
            countFifteen: this.state.countFifteen + 15,
            totalCount: this.state.totalCount + 15,
        }) 
    };

    decrementFifteen = () => {
        if (this.state.countFifteen > 15){
            this.setState({
                countFifteen: this.state.countFifeteen - 15
            })
            }
            else{
                this.setState({
                    countFifteen: 0
                })
            }
        if (this.state.totalCount > 15){
            this.setState({
                totalCount: this.state.totalCount -15
            })
        }
        else{
            this.setState({
                totalCount: 0
            })
        }
    }



    writeUserData(email, count) {
        firebase.database().ref('users/' + email).set({
          email: email,
          count: count
        });
      }
    
    render(){
    return (
        <div>
            <div>
            <h4>Congratulations! Being sustainble has earned you a total of {this.state.totalCount} points!</h4>
            </div>
            <p>Click here to recieve five points for recycling a plastic water bottle!</p>
            <p>You have earned {this.state.countFive} points by recycling water bottles!</p>
            <button className='buzzButton' onClick={this.incrementFive}>BUZZ</button>
            <button className='undoButton' onClick={this.decrementFive}>Undo</button>
            <div>
            <p>Click here to recieve ten points by choosing to walk to Claremont Village!</p>
            <p>You have earned {this.state.countTen} points by using reusable water bottles!</p>
            <button className='buzzButton' onClick={this.incrementTen}>BUZZ</button>
            <button className='undoButton' onClick={this.decrementTen}>Undo</button>
            </div>
            <div>
            <p>Click here to recieve fifteen points for using a resusable water bottle!</p>
            <p>You have earned {this.state.countFifteen} points by using reusable water bottles!</p>
            <button className='buzzButton' onClick={this.incrementFifteen}>BUZZ</button>
            <button className='undoButton' onClick={this.decrementFifteen}>Undo</button>
            </div>
            </div>
        );
    }
}

export default Counter;