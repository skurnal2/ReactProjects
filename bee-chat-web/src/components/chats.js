import React from 'react';
import {motion} from "framer-motion";

class Chats extends React.Component {
    render() {

        const list = {
            visible: { opacity: 1 },
            hidden: { opacity: 0 },
          }
          
          const item = {
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: -100 },
          }

        return (
            <motion.div
                id="a-chat"
                variants={list}
                initial="hidden"
                animate="visible"                
            >
                {this.props.chats.map((chat, i) => (
                    <motion.div                     
                        key={i}
                        variants={item}
                        transition={{delay: i * 0.2}}                        
                    >
                        {chat.chat_text}
                    </motion.div>
                ))}
            </motion.div>
        );
    }
}

export default Chats;