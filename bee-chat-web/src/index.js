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
import LoginPanel from './components/login-panel';
//#endregion

const cookies = new Cookies();

class App extends React.Component {

    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
        this.rerenderParentDisplayChats = this.rerenderParentDisplayChats.bind(this);
        this.rerenderParentDisplayChatsHide = this.rerenderParentDisplayChatsHide.bind(this);
        
        this.state = {
            chats: [],
            run_render: false,
            userid: cookies.get("user_id"),
            display_chats: false
        }
    }

    updateUser() {
        this.setState({
            userid: cookies.get("user_id")
        });
    }
    

    rerenderParentCallback() {
        this.fetchResults();
    }

    rerenderParentDisplayChats() {
        this.setState({display_chats: true});
        this.updateUser();
    }

    rerenderParentDisplayChatsHide() {
        this.setState({display_chats: false});
        this.updateUser();
    }

    componentDidMount() {
        //Fetching Results for the first time 
        this.fetchResults();

        //Checking user cookie then deciding login user or show chats
        this.updateUser();
        if(this.state.userid) {
            this.rerenderParentDisplayChats();
        }      
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
                    {this.state.display_chats ? <Login userid={this.state.userid} rerenderParentDisplayChatsHide={this.rerenderParentDisplayChatsHide} /> : null}
                    <motion.div className="chat-panel">

                        {this.state.display_chats ? <Chats chats={this.state.chats} userid={this.state.userid} /> : <LoginPanel rerenderParentDisplayChats={this.rerenderParentDisplayChats} />}
                    </motion.div>
                    {this.state.display_chats ? <SendChat rerenderParentCallback={this.rerenderParentCallback} userid={this.state.userid} /> : null}
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
