import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './slide.scss';

const ReportsMap = ({ reports }) => {
    return (
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
                                        Total Cases: {report.total_cases} <br />
                                        Active Cases: {report.active_cases} <br />
                                        Recovered Cases: {report.recovered_cases} <br />
                                        Deaths: {report.deaths}
                                    </Col>
                                    <Col>
                                        dsa
                                    </Col>
                                </Row>
                            </Container>
                        </Card.Body>

                    </Card>
                </div>
            ))}
        </Card>
    )
};

export default ReportsMap;