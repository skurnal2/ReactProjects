import React from 'react';
import {motion} from "framer-motion";

class SendChat extends React.Component {
    render() {
        return (
            <div id="send-space">
                <textarea/>
                <div id="send">Send</div>
            </div>
        );
    }
}

export default SendChat;