//#region Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import back from './images/sunshine-draft.svg';
import smiley from './images/smiley.png';

//#endregion

class App extends React.Component {
    render() {
        return (
            <div>
                <img src={back} className="sunshine" alt="Sunshine SVG" />
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
