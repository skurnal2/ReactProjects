//#region Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sunshine from './sunshine';
import smiley from './images/smiley.png';

//#endregion

class App extends React.Component {
    render() {
        return (
            <div id="meme-holder">               
                <Sunshine fill="#f4f4f4" cssclass="sunshine" />
                <img src={smiley} className="smiley" alt="Sunshine SVG" />
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
