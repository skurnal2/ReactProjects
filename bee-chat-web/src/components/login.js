import React from 'react';

class Login extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = {
            user_info: {
                username: '',
                user_id: "2"
            },            
        }
    }
    
    componentDidMount() {
        this.fetchUser();        
    }

    fetchUser() {
        setTimeout(function () {
            fetch('http://localhost/30projectsin60days/bee-chat-rest-api/api/post/read_single.php?id='+ this.state.user_info.user_id)
                .then(res => res.json())
                .then((data) => {
                    this.setState({
                        user_info: data,
                    })
                })
                .catch(console.log)
        }.bind(this), 500)
    }

    render() {
        return (
            <div id="login-container">
                <div id="user-label">
                    User
                    <span>{this.state.user_info.username}</span>
                </div>
            </div>
        );
    }
}

export default Login;