import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Settings from './Pages/Settings/Settings';
import About from './Pages/About/About';
import CoolApps from './Pahes/CoolApps/CoolApps';

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.scss';

import Navcustom from './Navbar/Navbar';
import Loader from './Spinner/Loader';
import DropdownBtn from './DropdownBtn/DropdownBtn';
import RenderList from './RenderList/RenderList';
import Pagination from './Pagination/Pagination';

//Libraries
import moment from 'moment';


class App extends React.Component{
    
    state = {
        posts: [
            {
                id: 0,
                title: "React is awesome!",
                url: "www.reactjs.org",
                points: 250,
                user: "Alex Cloudstar",
                date: moment("2010-02-09","DD-MM-YYY")._i,
                comments: "100 comments"
            },
            {
                id: 1,
                title: "Angular is good too!",
                url: "www.angular.io",
                points: 350,
                user: "Alex Cloudstar",
                date: moment("2014-04-06", "DD-MM-YYY")._i,
                comments: '76 comments'
            },
            {
                id: 2,
                title: "One more for filter with date picker",
                url: "NO url present here",
                points: 350,
                user: "Alex Cloudstar",
                date: moment("2014-04-06", "DD-MM-YYY")._i,
                comments: '76 comments'
            },
            {
                id: 3,
                title: "One more for filter with date picker",
                url: "NO url present here",
                points: 350,
                user: "Alex Cloudstar",
                date: moment("2014-04-06", "DD-MM-YYY")._i,
                comments: '76 comments'
            },
            {
                id: 4,
                title: "One more for filter with date picker",
                url: "NO url present here",
                points: 350,
                user: "Alex Cloudstar",
                date: moment("2014-04-06", "DD-MM-YYY")._i,
                comments: '76 comments'
            },
            {
                id: 5,
                title: "One more for filter with date picker",
                url: "NO url present here",
                points: 350,
                user: "Alex Cloudstar",
                date: moment("2014-04-06", "DD-MM-YYY")._i,
                comments: '76 comments'
            },
            {
                id: 6,
                title: "One more for filter with date picker",
                url: "NO url present here",
                points: 350,
                user: "Alex Cloudstar",
                date: moment("2014-04-06", "DD-MM-YYY")._i,
                comments: '76 comments'
            }
        ],
        comments: [
            {
                id: 0,
                text: "Lorem ipsum",
                points: 7,
                user: "someone",
                date: moment("2010-09-02", "DD-MM-YYYY")._i
            }
        ],
        searchTerm: "",
        isLoading: true,
        searchTopic: ['All', 'Stories', "Comments"],
        searchBy: ["Popularity", "Date"],
        searchFor: [
            "All Time",
            "Last 24 Hour",
            "Past Week",
            "Past Month",
            "Past Year",
            "Custom Range"
        ],
        currentList: "Stories",
        currentBy: "Popularity",
        lastPost: "All Time",
        currentPage: 1, 
        hitsPerPage: 10
    };

    componentDidMount() {
        this.setState({
            isLoading: false
        });
    }

    onKeyUp = e => {
        this.setState({
            searchTerm: e.target.value
        })
    }
    
    render() {        
        return <div>App</div>
    }
    
}

export default App;
