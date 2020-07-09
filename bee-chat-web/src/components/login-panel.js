import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LoginPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            needLogin: true,
        }
    }

    checkCookie() {
        //Check if user_id exists
        if (cookies.get("user_id")) {
            //Check if userid is right
            //if it is not, then give the message and stay on the same page
            //if it is right, then change state of needLogin here and display_chats in parent
        }
    }

    render() {
        if (this.state.needLogin) {
            return (
                <div id="login-dashboard">
                    <div id="username-container">
                        <span>Username</span>
                        <input type="text"/>
                    </div>
                    <input type="submit"/>
                </div>
            );
        }
        else {
            return (null);
        }
    }
}

export default LoginPanel;