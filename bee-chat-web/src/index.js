//#region IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import {motion} from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
//#endregion

class App extends React.Component {

    state = {
        chats: {}
    }

    componentDidMount() {
        fetch('https://sidprojectsapp.000webhostapp.com/bee-chat-rest-api/api/post/read')
            .then(res => res.json())
            .then((data) => {
                this.setState({chats: data})
            })
            .catch(console.log)
    }

    render() {
       
        return(
            <motion.div className="main-panel shadow"
                initial="hidden"
                animate="show"
                transition={{delay: .5, duration: .3}} 
                variants={{
                    hidden: {
                            opacity: 0, 
                            borderRadius: "50%"
                            },
                    show: {
                            y: 20, 
                            opacity: 1,
                            borderRadius: "0%"
                          }
                }}
            >
                <motion.h1 
                whileHover={{
                    rotate: 0,
                    scale: 1,                    
                }}
                
                animate={{                    
                    rotate: -15,
                    scale: 1.2,
                    transition: {delay:2.5}
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
