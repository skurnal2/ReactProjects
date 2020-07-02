import React from 'react';
import ReactDOM from 'react-dom';

//#region Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
//#endregion

import Reports from './components/reports';
import './index.css';
import logo from './covid-icon.png';

class App extends React.Component {

    state = {
        reports: []
    }

    componentDidMount() {
        fetch('https://data.edmonton.ca/resource/ix8f-s9xp.json')
        .then(res => res.json()) //parses the output to JSON
        .then((data) => {
            this.setState({reports: data})
        }) //Sets velue to our state
        .catch(console.log)
    }

    render() {
        return (
            <Container className="p-3">
                <Jumbotron>
                    <h1>Geo Covid - Alberta</h1>
                    <img src={logo} alt="covid icon" />
                </Jumbotron>
                
                <Tabs defaultActiveKey="neighbourhood-list" id="menu-manager">
                    <Tab eventKey="neighbourhood-list" title="Neighbourhood List">
                        <Reports reports={this.state.reports} />
                    </Tab>
                    <Tab eventKey="neighbourhood-map" title="Neighbourhood Map">
                        
                    </Tab>
                </Tabs>
            </Container>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
