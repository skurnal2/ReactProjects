import React from 'react';
import {motion} from "framer-motion";

class Chats extends React.Component {
    render() {

        const container = {
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.5
              }
            }
          }
          
          const item = {
            hidden: { opacity: 0 },
            show: { opacity: 1 }
          }

        return (
            <motion.div 
                id="a-chat"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {this.props.chats.map((chat, i) => (
                    <motion.div 
                        key={i}
                        variants={item}
                    >
                        {chat.chat_text}
                    </motion.div>
                ))}
            </motion.div>
        );
    }
}

export default Chats;