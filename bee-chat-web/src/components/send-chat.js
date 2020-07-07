import React from 'react';
import { motion } from "framer-motion";
import axios from 'axios';

class SendChat extends React.Component {
constructor(props)
{
    super(props);

    this.state = {
        chat_text: ''
    }
}
    
    changeHandler = e => {
        this.setState(
            {
                chat_text: e.target.value,
                user_id: 1
            }
        )
    } 

    submitHandler = e => {
        e.preventDefault();
        console.log(this.state);
        axios.post('https://sidprojectsapp.000webhostapp.com/bee-chat-rest-api/api/post/create.php', 
        this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        const send_value = this.state.send_value;

        return (
            <div id="send-space">
                <form onSubmit={this.submitHandler}>
                    <textarea value={send_value} onChange={this.changeHandler} />                    
                    <input type="submit" id="send" value="Send"/>
                </form>
            </div>
        );
    }
}

export default SendChat;