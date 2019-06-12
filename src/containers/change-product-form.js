import React , {Component} from 'react';
import { connect } from 'react-redux';

import './Greetings.css';
import {changeProduct} from "../actions/changeProduct";

class ChangeProductForm extends Component  {
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
        this.props.changeProduct(this.props.changeProductForm, this.state, this.props.auth)
    }

    render() {
        return (
            <form className="contact-form" action="" method="post" name="contact_form" onSubmit={this.handleSubmit}>

                <ul>
                    <li>
                        <h2>Change product</h2>
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
                            value={this.state.description}
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
                        <button className="submit" type="submit">Change product</button>
                    </li>
                </ul>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth,
        changeProductForm: state.products.changeProductForm
    }

};

const mapDispatchToProps = dispatch => ({
    changeProduct: (id, userInfo, auth) => dispatch(changeProduct(id, userInfo, auth))
});

export default connect (mapStateToProps, mapDispatchToProps)(ChangeProductForm);