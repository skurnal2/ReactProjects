import React from 'react';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user_info: {
                username: '',
                user_id: this.props.userid
            },            
        }
    }
    
    componentDidMount() {
        this.fetchUser();        
    }

    fetchUser() {
     
            fetch('http://localhost/30projectsin60days/bee-chat-rest-api/api/post/read_single.php?id='+ this.state.user_info.user_id)
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        user_info: data,
                    })
                })
                .catch(console.log)
      
    }

    logoutUser = e => {
        cookies.remove('user_id', { path: '/' });
        this.props.rerenderParentDisplayChatsHide();
    }

    render() {
        return (
            <div id="login-container">
                <div id="user-label">
                    User
                    <span>{this.state.user_info.username}</span>
                </div>
                <div id="logout" onClick={this.logoutUser} >
                    Logout
                </div>
            </div>
        );
    }
}

export default Login;