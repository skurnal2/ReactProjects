import React from 'react';
import Cards from 'react-bootstrap/Card';
import Card from 'react-bootstrap/Card';

import './slide.scss';

const ReportsMap = ({ reports }) => {
    return (
        <Cards>
            {reports.map((report) => (              
                <div>
                <Card>
                    <Card.Header>                        
                            {report.location}                        
                    </Card.Header>
                   
                        <Card.Body>
                            Total Cases: {report.total_cases} <br/>
                            Active Cases: {report.active_cases} <br/>
                            Recovered Cases: {report.recovered_cases} <br/>
                            Deaths: {report.deaths}
                        </Card.Body>
                    
                </Card>
                </div>
            ))}
        </Cards>
    )
};

export default ReportsMap;