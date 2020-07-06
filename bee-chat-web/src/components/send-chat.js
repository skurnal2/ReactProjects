import React from 'react';
import { motion } from "framer-motion";

class SendChat extends React.Component {

    state = {
        send_value: ''
    }

    sendPost = () => {     
        fetch('https://sidprojectsapp.000webhostapp.com/bee-chat-rest-api/api/post/create.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: 1,
                chat_text: "My value"
            })
        }).then(response => {
            console.log(response)
        }).catch(error => {
            console.log(error)
        })
    }

    handleChange(event) {
        this.setState({ send_value: event.target.value })
    }

    render() {
        return (
            <div id="send-space">
                <textarea onChange={this.handleChange.bind(this)} />
                <div id="send" onClick={() => this.sendPost()}>Send</div>
            </div>
        );
    }
}

export default SendChat;