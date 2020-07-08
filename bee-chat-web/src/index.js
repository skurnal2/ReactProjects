//#region IMPORTS
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import { motion } from "framer-motion";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Chats from './components/chats';
import SendChat from './components/send-chat';
import Cookies from 'universal-cookie';
import Login from './components/login';
//#endregion

const cookies = new Cookies();

class App extends React.Component {

    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);

        this.state = {
            chats: [],
            run_render: false,
            userid: 2,//cookies.get("user_id")            
        }
    }

    resetUser() {
        this.setState({
            userid: cookies.get("user_id")
        });         
    }

    rerenderParentCallback() {
        this.fetchResults();
    }

    componentDidMount() {
        this.fetchResults();
    }

    fetchResults() {
        setTimeout(function () {
            fetch('http://localhost/30projectsin60days/bee-chat-rest-api/api/post/read.php')
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        chats: data.data,
                        run_render: true
                    })
                })
                .catch(console.log)
        }.bind(this), 500)

    }

    render() {
        
        if (this.state.run_render) {
            return (
                <motion.div className="main-panel shadow"
                    initial="hidden"
                    animate="show"
                    transition={{ delay: .5, duration: .3 }}
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
                            transition: { delay: 1.5 }
                        }}
                    >
                        BeeChat                        
                </motion.h1><br />
                <Login/>
                    <motion.div className="chat-panel">
                        <Chats chats={this.state.chats} />
                    </motion.div>
                    <SendChat rerenderParentCallback={this.rerenderParentCallback}  userid={this.state.userid} />
                </motion.div>
            );
        }
        return (
            <div></div>
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
