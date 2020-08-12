import React, { createContext, Component } from "react";

export const audioContext = createContext();

const item = window.localStorage.getItem("unmute");

class AudioContextProvider extends Component {
    state = {
        unmute: item ? JSON.parse(item) : true,
    }

    muteAudio = () => {
        this.setState({
            unmute: !this.state.unmute
        })
    }

    render(){
        localStorage.setItem("unmute", this.state.unmute)
        return (
            <audioContext.Provider value={{...this.state, muteAudio: this.muteAudio}}>
                {this.props.children}
            </audioContext.Provider>
        )
    }
}

export default AudioContextProvider;