//#region Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sunshine from './components/sunshine';
import smiley from './images/smiley.png';
import PropPanel from './components/prop-panel';

//#endregion

class App extends React.Component {

    state = {
        chosenColor: "#e3e3e3",
    }    

    render() {
        return (
            <div>            
            <PropPanel val={this.state.chosenColor} />
            <div id="meme-holder">               
                <Sunshine fill={this.state.chosenColor} cssclass="sunshine" />
                <img src={smiley} className="smiley" alt="Sunshine SVG" />
            </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
