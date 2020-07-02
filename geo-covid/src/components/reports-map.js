import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MapContainer from './google-map-component';
import {Button as Btn} from 'react-bootstrap/Button';

import './slide.scss';
import Button from 'react-bootstrap/Button';

const ReportsMap = ({ reports }) => {
    return (
        <Container>
            <Row>
                <Col>
                    <Card>
                        {reports.map((report) => (
                            <div>
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
                                            <Button>Select</Button>
                                        </Col>
                                        </Row></Container>

                                    </Card.Body>

                                </Card>
                            </div>
                        ))}
                    </Card>
                </Col>
                <Col>

                </Col>
            </Row></Container>
    )
};

export default ReportsMap;