import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class LoginPanel extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            needLogin: true,
            userid: ""
        }
    }

    submitHandler = e => {
        e.preventDefault();
        cookies.set('user_id', this.state.userid, { path: '/' }) //Setting the cookie
        this.checkCookie();
    }

    changeHandler = e => {
        this.setState(
            {
                userid: e.target.value                
            }
        )
    }

    checkCookie() {
        //Check if user_id exists
        if (cookies.get("user_id")) {
            //Check if userid is right - Will do this later using REST API call
            //if it is not, then give the message and stay on the same page
            //if it is right, then change state of needLogin here and display_chats in parent
            
        }
    }

    render() {

        const user_id = this.state.userid;

        if (this.state.needLogin) {
            return (
                <div id="login-dashboard">
                    <form onSubmit={this.submitHandler}>
                        <div id="userid-container">
                            <span>User ID</span>
                            <input type="text" value={user_id} onChange={this.changeHandler} />
                        </div>
                        <input type="submit" />
                    </form>
                </div>
            );
        }
        else {
            return (null);
        }
    }
}

export default LoginPanel;