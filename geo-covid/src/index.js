import React from 'react';
import ReactDOM from 'react-dom';
import Reports from './components/reports';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './covid-icon.png';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

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
                <Reports reports={this.state.reports} />
            </Container>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
