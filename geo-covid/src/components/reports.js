import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Reports = ({ reports }) => {
    return (
        <Accordion>
            {reports.map((report, index) => (              
                <div>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey={index}>
                            {report.location}
                        </Accordion.Toggle> 
                    </Card.Header>
                    <Accordion.Collapse eventKey={index}>
                        <Card.Body>
                            Total Cases: {report.total_cases} <br/>
                            Active Cases: {report.active_cases} <br/>
                            Recovered Cases: {report.recovered_cases} <br/>
                            Deaths: {report.deaths}
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                </div>
            ))}
        </Accordion>
    )
};

export default Reports;