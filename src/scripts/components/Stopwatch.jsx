import React, { Component } from 'react';
import Button from './Button';

class Stopwatch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            running: false,
            elapsed: 0,
            lastTick: 0
        };
        this.tick = this.tick.bind(this);
    }
    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }
    tick() {
        if (this.state.running) {
            let now = Date.now();
            let diff = now - this.state.lastTick;
            
            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            });
        }

    }
    handleStart() {
        this.setState({
             running: true,
        lastTick: Date.now()
     });
    }
    handlePause() {
        this.setState({ running: false });
    }
    handleStop() {
        this.setState({ 
            running: false,
            elapsed: 0,
            lastTick:0
         });
    }
    format(milliseconds) {
        let totalSeconds = Math.floor(milliseconds / 1000);
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    }

    render() {
        let time = this.format(this.state.elapsed);
        return (
            <section className="stopwatch">
                <div className="stopwatch-time">{time}</div>
                <div className="stopwatch-controls">
                {this.state.running ? 
                    <Button className="icon pause" icon="" onClick={this.handlePause.bind(this)} />
                    :
                    <Button className="icon play-arrow" icon="" onClick={this.handleStart.bind(this)} />
                }                    
                    <Button className="icon stop" icon="" onClick={this.handleStop.bind(this)}/>
                </div>

            </section>

        );
    }
}
export default Stopwatch;