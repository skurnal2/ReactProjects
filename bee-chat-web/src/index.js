//#region IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {motion} from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
//#endregion

class App extends React.Component {

    render() {
       
        return(
            <motion.div className="main-panel shadow"
                 animate= {{y: 20}}
            >
                <motion.h1 
                transition={{
                    delay: 1.5,
                    }} 
                animate={{
                    rotate: -15,
                    scale: 1.2
                    }}
                >
                    BeeChat
                </motion.h1><br/>
                
                
                <motion.div className="chat-panel">
                    d
                </motion.div>
                
            </motion.div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Container>
        <App />
    </Container>,
    document.getElementById('root')
);
