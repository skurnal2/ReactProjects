import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapContainer from './google-map-component';

import './slide.scss';
import Button from 'react-bootstrap/Button';

class ReportsMap extends React.Component {

    state = {
        sideHeading: "Side Heading Title"
    }

    buttonSelected = (report) => {
        this.setState({sideHeading: 'Hello'})
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Card>
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
                                                    <Button onClick={this.buttonSelected(report)}>Select</Button>
                                                </Col>
                                            </Row></Container>

                                    </Card.Body>

                                </Card>
                            ))}
                        </Card>
                    </Col>
                    <Col>
                        <h3>{this.state.sideHeading}</h3>
                        <MapContainer />
                    </Col>
                </Row></Container>
        )
    }
};

export default ReportsMap;