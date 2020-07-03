//#region Imports
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Sunshine from './components/sunshine';
import sourceImg from './images/smiley.png';
import { isCompositeComponentWithType } from 'react-dom/test-utils';
//#endregion

class App extends React.Component {

    state = {
        chosenColor: "blue",
        chosenColor2: "#0300b3",
        src: sourceImg
    }

    changeColor(value) {
        this.setState({
            chosenColor: value
        });
    }

    changeColor2(value) {
        this.setState({
            chosenColor2: value
        });
    }

    changeImage = (event) => {

        if (event.target.files[0]) {
            this.setState({
                src: URL.createObjectURL(event.target.files[0])
            });
        }
    }

    render() {
        return (
            <div id="content-holder" style={{ backgroundColor: this.state.chosenColor2 }}>
                <input type="text" placeholder="Color #1" className="box-shadow-3d" defaultValue={this.state.chosenColor} onChange={e => this.changeColor(e.target.value)} /><br /><br />
                <input type="text" placeholder="Color #2" className="box-shadow-3d" defaultValue={this.state.chosenColor2} onChange={e => this.changeColor2(e.target.value)} /><br /><br /><br />
                <input type='file' className="box-shadow-3d" onChange={this.changeImage} />
                <div id="meme-holder">
                    <Sunshine fill={this.state.chosenColor} cssclass="sunshine" />
                    <img src={this.state.src} className="smiley" alt="Center Image" />
                </div>

                <h3>
                    Made by Siddharth Kurnal
            </h3>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
