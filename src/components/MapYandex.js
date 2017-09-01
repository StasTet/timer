import React, { Component } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import { Modal, Button } from 'react-bootstrap';
import '../style/MapYandex.css';

class MapYandex extends Component {
    constructor(props) {
        super(props)

        this.mapState = {
            center: [51.67, 39.28],
            zoom: 10
        };
        this.state = {
            show: false
        }
    }

    renderModal() {
        return (
            <Modal
                show={this.state.show}
                onHide={this.closeModal.bind(this)}
                container={this}
                aria-labelledby="contained-modal-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title">Карта</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                     { this.renderMap() }
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.closeModal.bind(this)}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }

    closeModal() {
        this.setState({ show: false});
    }


    renderMap() {
        return (
            <YMaps>
                <Map state={this.mapState}>
            

            
                </Map>
            </YMaps>
        )
    }

    render() {
        return (
            <div className="MapYandex">
                { this.renderModal() }
                
                <Button
                    bsStyle="primary"
                    onClick={() => this.setState({ show: true})}
                >
                    Показать карту
                </Button>
            </div>
        )
    }
}


export default MapYandex