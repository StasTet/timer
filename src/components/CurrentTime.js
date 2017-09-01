import React, { Component } from 'react';
import moment from 'moment';

class CurrentTime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: '',
            timer: setInterval(() => this.calculateCurrentTime(), 1000)
        }
    }

    componentDidMount() {
        this.calculateCurrentTime()
    }

    calculateCurrentTime() {
        const currTime = moment(new Date()).format('HH:mm:ss');

        this.setState({
            time: currTime
        })

        return currTime;
    }

    render() {
        return <h3>Текущее время { this.state.time }</h3>
    }
}

export default CurrentTime