import React from 'react';
import {motion} from "framer-motion";

class Chats extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            myChats: ''
        }
    }

    render() {

        const list = {
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }
          
          const item = {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }

          const item2 = {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }

        if(this.props.chats)
        {
        
        return (
            <motion.div
                id="a-chat"
                variants={list}
                initial="hidden"
                animate="visible"                
            >
                { this.props.chats.map((chat, i) => (
                     this.props.userid == chat.user_id ? 
                     <motion.div                     
                        key={i}
                        className="user-outgoing" 
                        variants={item2}
                        transition={{delay: (this.props.chats.length - i) * 0.2}}                        
                    >
                        <span>{chat.username}</span>                            
                        <br/>
                        {chat.chat_text}
                    </motion.div>
                    :
                    <motion.div                     
                        key={i}
                        className="user-incoming" 
                        variants={item}
                        transition={{delay: (this.props.chats.length - i) * 0.2}}                        
                    >
                        <span>{chat.username}</span>                            
                        <br/>
                        {chat.chat_text}
                    </motion.div>                                          
                ))}
            </motion.div>
        );
        }
        else {
            return (
                <h4>No Chats to Show</h4>
            );
        }
    }
}

export default Chats;