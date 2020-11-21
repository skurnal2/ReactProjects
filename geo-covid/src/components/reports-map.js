import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapContainer from './google-map-component';
import Button from 'react-bootstrap/Button';
import './map-page.css';

class ReportsMap extends React.Component {

    state = {
        sideHeading: "", 
        coordinates: {long:-113.4183021, lat:53.5836081},
        zoom: 10.5    
    }

    buttonSelected = (report) => {
        this.setState({
            sideHeading: report.location,
            coordinates: {
                long: report.polygon.coordinates[0][0][0],
                lat: report.polygon.coordinates[0][0][1]
            },
            zoom: 13
        })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card className="scroll">
                            {this.props.reports.map((report) => (
                                <Card>
                                    <Card.Header>
                                        {report.location}
                                    </Card.Header>
                                    <Card.Body>
                                        <Container>
                                            <Row>
                                                <Col>
                                                    Total: {report.total_cases} <br />
                                                    Active: {report.active_cases} <br />
                                                    Recovered: {report.recovered_cases} <br />
                                                    Deaths: {report.deaths}
                                                </Col>
                                                <Col>
                                                    <Button onClick={() => this.buttonSelected(report)}>Select</Button>
                                                </Col>
                                            </Row></Container>

                                    </Card.Body>

                                </Card>
                            ))}
                        </Card>
                    </Col>
                    <Col>
                        <h3>{this.state.sideHeading}</h3>
                        <h5>Latitude: {this.state.coordinates.lat}</h5>
                        <h5>Longitude: {this.state.coordinates.long}</h5>
                        <MapContainer coordinates={this.state.coordinates} zoom={this.state.zoom} />
                    </Col>
                </Row></Container>
        )
    }
};

export default ReportsMap;