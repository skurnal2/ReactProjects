//#region Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sunshine from './components/sunshine';
import smiley from './images/smiley.png';
//#endregion

class App extends React.Component {

    state = {
        chosenColor: "blue",
    }    

    changeColor(value) {
        this.setState({
            chosenColor: value
        });
    }

    render() {
        return (
            <div>                        
            <input type="text" className="box-shadow-3d" defaultValue={this.state.chosenColor} onChange={e => this.changeColor(e.target.value)} />
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
