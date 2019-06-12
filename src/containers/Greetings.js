import React, { Component } from 'react';
import { connect } from 'react-redux';
import {userPostFetch} from "../actions/authAction";

import './Greetings.css';

class Form extends Component  {
    state = {
        email: "",
        password: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.userPostFetch(this.state)
    }

    render() {
        return (
            <form className="contact-form" action="" method="post" name="contact_form" onSubmit={this.handleSubmit}>

                <ul>
                    <li>
                        <h2>Sign In</h2>
                        <span className="required-notification">* Denotes Required Field</span>
                    </li>
                    <li>
                        <label htmlFor="email">Email: </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="user1@email.com"
                            value={this.state.email}
                            onChange={this.handleChange}
                            required/>
                    </li>
                    <li>
                        <label htmlFor="password">Password: </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="!password!"
                            value={this.state.password}
                            onChange={this.handleChange}
                            required/>
                    </li>
                    <li>
                        <button className="submit" type="submit">Sign In</button>
                    </li>
                </ul>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    userPostFetch: userInfo => dispatch(userPostFetch(userInfo))
});

export default connect(null, mapDispatchToProps)(Form);