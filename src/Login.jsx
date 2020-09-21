import React, { Component } from 'react';
import './Login.css';
import { Input } from 'semantic-ui-react';
import HeaderPage from './Header';
import { Button } from 'semantic-ui-react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fields: {
                username: '',
                password: ''
            },
            isValidForm: true
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        //todo, add all validation logic here before move to next page
        if (this.state.fields['password'] === 'admin' && this.state.fields['username'] === 'admin') {
            this.setState({
                isValidForm: true
            });
            //move to dashboard page
            this.props.history.push('/Welcome#/dashboard');
        }
        else {
            this.setState({
                isValidForm: false
            });
        }
    }

    handleChange(e) {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value;
        this.setState({
            fields
        });
    }

    render() {

        return (
            <div className='login-header-postion'>
                <div >
                    <HeaderPage />
                </div>
                <div className='login-main-section'>
                    {/* <div className='ui info message'>hello</div> */}
                    <form onSubmit={this.onSubmit}>
                    <div className='errorText' name="errorMsg" hidden={this.state.isValidForm} ><h3>Error: Invalid user credentials!</h3></div>
                    <div>
                        <label className='userId-label'>User ID</label>
                        <Input className='userId-input' placeholder='Enter your user ID' name="username" value={this.state.fields.username} onChange={this.handleChange} />
                    </div>

                    <div className="passwordfield">
                        <label className='userId-label'>Password</label>
                        <Input className='userId-input' placeholder='Enter your password' name="password" value={this.state.fields.password} onChange={this.handleChange} />
                    </div>

                    <div className='login-button-field'>
                        {/* <Button className='login-button' onClick={this.onSubmit}>Log In</Button> */}
                         <Button className='login-button' type="submit">Log In</Button>
                    </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default LoginPage;
