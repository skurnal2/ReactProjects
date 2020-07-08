import React from 'react';
import axios from 'axios';

class SendChat extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chat_text: '',
            user_id: this.props.userid
        }
    }

    changeHandler = e => {
        this.setState(
            {
                chat_text: e.target.value                
            }
        )
    }

    submitHandler = e => {
        e.preventDefault();

        if (this.state.chat_text) {

            axios.post('http://localhost/30projectsin60days/bee-chat-rest-api/api/post/create.php',
                this.state)
                .then(response => {
                    console.log(response);
                })
                .catch(error => {
                    console.log(error);
                });

            this.setState(
                {
                    chat_text: ''                    
                });
            this.props.rerenderParentCallback();
        }
    }

    render() {

        const send_value = this.state.chat_text;

        return (
            <div id="send-space">
                <form onSubmit={this.submitHandler}>
                    <textarea value={send_value} onChange={this.changeHandler} />
                    <input type="submit" className="ripple" id="send" value="Send" />
                </form>
            </div>
        );
    }
}

export default SendChat;