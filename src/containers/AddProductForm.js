import React, { Component } from 'react';
import { connect } from 'react-redux';
import {userPostFetch} from "../actions/addProduct";

import './Greetings.css';

class AddProductForm extends Component  {
    state = {
        name: "",
        description: "",
        price: "",
        status: 10
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.userPostFetch(this.state, this.props.auth)
    }

    render() {
        return (
            <form className="contact-form" action="" method="post" name="contact_form" onSubmit={this.handleSubmit}>

                <ul>
                    <li>
                        <h2>Add new product</h2>
                    </li>
                    <li>
                        <label htmlFor="name">Name: </label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleChange}
                            required/>
                    </li>
                    <li>
                        <label htmlFor="description">Description: </label>
                        <input
                            type="text"
                            name="description"
                            placeholder="description"
                            value={this.state.password}
                            onChange={this.handleChange}
                            />
                    </li>
                    <li>
                        <label htmlFor="price">Price: </label>
                        <input
                            type="number"
                            name="price"
                            placeholder="price"
                            value={this.state.price}
                            onChange={this.handleChange}
                        />
                    </li>
                    <li>
                        <button className="submit" type="submit">Add product</button>
                    </li>
                </ul>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }

};

const mapDispatchToProps = dispatch => ({
    userPostFetch: (userInfo, auth) => dispatch(userPostFetch(userInfo, auth))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductForm);