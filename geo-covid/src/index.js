//#region Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
//#endregion
//#region Other Imports
import React from 'react';
import ReactDOM from 'react-dom';
import Reports from './components/reports';
import ReportsMap from './components/reports-map';
import './index.css';
import logo from './covid-icon.png';
//#endregion

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
                    <h1>Geo C<img src={logo} alt="covid icon" />vid - Alberta</h1>                   
                </Jumbotron>
                <a href="https://github.com/skurnal2/ReactProjects/tree/master/geo-covid" id="github-link">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" id="github-link-img"></img>
                    Github 
                </a>
                <Tabs defaultActiveKey="neighbourhood-map" id="menu-manager">
                    <Tab eventKey="neighbourhood-list" title="Neighbourhood List">
                        <Reports reports={this.state.reports} />
                    </Tab>
                    <Tab eventKey="neighbourhood-map" title="Neighbourhood Map">
                      <ReportsMap reports={this.state.reports} />
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
