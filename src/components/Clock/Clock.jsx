import React, {Component} from "react";
import './Clock.css';

export class Clock extends Component {
    state = {
        time: new Date().toLocaleTimeString(),
    };
    intervalId = null;

    componentDidMount() {
        console.log('setInterval');

        this.intervalId = setInterval(
            ()=> this.setState({ time: new Date().toLocaleString() }),
            1000,
        );
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return <div className="Clock__face">{this.state.time}</div>
    }
}

