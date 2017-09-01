import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import '../style/ComeForm.css';

class ComeForm extends Component {
    render() {
        return (
            <div className="ComeForm">
                <form onSubmit={this.props.onSubmitHandler.bind(this)}>
                    <FormGroup>
                        <ControlLabel htmlFor="time">Введите время прихода:</ControlLabel>
                        <FormControl id="time" type="time" required/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel htmlFor="duration">Введите продолжительность рабочего дня:</ControlLabel>
                        <FormControl id="duration" type="time" defaultValue="08:30" required/>
                    </FormGroup>
                    <FormGroup>
                        <Button bsStyle="default" type="submit">Ок</Button>
                    </FormGroup>
                   
                </form>
            </div>
        )
    }
}

export default ComeForm