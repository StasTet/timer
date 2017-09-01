import React, { Component } from 'react';
import Buttons from './Button';
import ComeForm from './ComeForm';
import CurrentTime from './CurrentTime';
import TimeLeft from './TimeLeft';
import logo from '../image/time.svg';
import '../style/App.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            come: JSON.parse(localStorage.getItem('come')),
            gone: JSON.parse(localStorage.getItem('gone')),
            showForm: false,
            comeTime: localStorage.getItem('comeTime'),
            durationTime: localStorage.getItem('durationTime')
        }
    }

    componentWillMount() {
        if (this.state.come === null || this.state.gone === null || this.state.comeTime === null || this.state.durationTime === null ) {
            localStorage.setItem('come', false);
            localStorage.setItem('gone', false);
        }
    }

    onActionClick(data) {
        switch (data) {
            case 'come':
                localStorage.setItem('come', true);
                localStorage.setItem('gone', false);
                this.setState({
                    come: localStorage.getItem('come'),
                    gone: localStorage.getItem('gone'),
                    showForm: true
                })
                break;
            
            case 'gone':
                localStorage.setItem('come', false);
                localStorage.setItem('gone', true);
                this.setState({
                    come: localStorage.getItem('come'),
                    gone: localStorage.getItem('gone'),
                    showForm: false
                })
                break;
        
            default:
                break;
        }
    }

    onSubmitHandler(event) {
        event.preventDefault()

        const comeTime = event.target.time.value;
        const durationTime = event.target.duration.value;

        localStorage.setItem('comeTime', comeTime);
        localStorage.setItem('durationTime', durationTime);


        this.setState({
            showForm: false,
            comeTime: comeTime,
            durationTime: durationTime
        })

    }

    renderForm() {
        if (JSON.parse(this.state.come) && JSON.parse(this.state.showForm)) {
            return (
                <ComeForm onSubmitHandler={this.onSubmitHandler.bind(this)}/>
            )
        }

        if (JSON.parse(this.state.gone)) {
            return <h1 className="text-success">Поздравляю! Пора домой.</h1>;
        }

        return null;
    }

    renderLeftTime() {
        if (JSON.parse(this.state.come) && !JSON.parse(this.state.showForm)) {
            return <TimeLeft {...this.state}/>
        }

        return null;
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Добро пожаловать в «Таймер»</h2>
                    <CurrentTime />
                </div>
                <div className="App-intro">
                    <Buttons onActionClick={this.onActionClick.bind(this)} {...this.state} />
                </div>

                { this.renderForm() }
                { this.renderLeftTime() }
                

            </div>
        );
    }
}

export default App;
