import React, { Component } from 'react';
import moment from 'moment';

class TimeLeft extends Component {
    constructor(props) {
        super(props)

        this.timeLeft = null;

        this.state = {
            time: '',
            timer: setInterval(() => this.timer(), 1000)
        }
    }

    componentDidMount() {
        this.timer();
    }

    calculateLeftTime() {
        const comeTime = this.props.comeTime.split(':',2);
        const result = this.formatDate(comeTime)
        const timeLeft = new Date(result.year, result.month, result.day, result.h+8, result.m+30, 0);

        this.timeLeft = timeLeft.getHours() + ':' + timeLeft.getMinutes();

        return this.timeLeft

    }

    timer() {
        const time = this.timeLeft.split(':',2);
        const currentTime = moment();
        const result = this.formatDate(time);
        const timeLeft = new Date(result.year, result.month, result.day, result.h, result.m, 0);
        const timer = timeLeft - currentTime;
        const res = moment.utc(timer).format('HH:mm:ss');
        
        this.setState({
            time: res
        });

        return res
    }

    formatDate(time) {
        return {
            h: parseInt(time[0], 0),
            m: parseInt(time[1], 0),
            year: moment().year(),
            month: moment().month(),
            day: moment().date()
        }
    }

    render() {
        return (
            <div>
                <h3>Ты пришел в: { this.props.comeTime }</h3>
                <p>Продолжительность рабочего дня: { this.props.durationTime }</p>
                <h3 className="text-success">Ты можешь уйти с работы в: { this.calculateLeftTime() }</h3>
                <h3 className="text-danger">Осталось времени на работе: { this.state.time }</h3>
            </div>
        )
    }
}

export default TimeLeft;