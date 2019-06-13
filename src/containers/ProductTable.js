import React, {Component} from 'react';
import {connect} from 'react-redux';

import "./ProductTable.css"
import ChangeProductForm from "./change-product-form"
import AddProductForm from './AddProductForm'
import {productsFetchList} from '../actions/products'
import {showForm} from "../actions/addProduct";
import {showChangeForm} from "../actions/sendPropsToChangeForm";
import {deleteProduct} from "../actions/deleteProduct";
import { logOut } from "../actions/authAction"


class ProductTable extends Component {

    componentDidMount() {
        this.props.productsFetchList(localStorage.getItem("token"));
    }

    render() {
        const {products} = this.props;
        let getLocalStorage = localStorage.getItem("token");

        return (
            <div>
                {
                    !products.showFormAddProduct ?
                        !products.showChangeProductForm ?
                            <div>
                                <div className="ProductList">
                                    <button className="btn left" onClick={() => this.props.showForm()}>
                                        Add product
                                    </button>
                                    <button className="btn left red" onClick={() => this.props.logOut()}>
                                        LOG OUT
                                    </button>
                                </div>

                                <table className="table_price">
                                    <caption> Products&Pricing</caption>
                                    <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Description</th>
                                        <th>Price</th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                    {
                                        products.products ? products.products.map(product => (

                                                product.status ?
                                                    <tr key={product.id}>
                                                        <td>{product.name}</td>
                                                        <td>{product.description}</td>
                                                        <td>{product.price}
                                                            <button
                                                                className="btn"
                                                                onClick={() => this.props.showChangeForm(product)}>
                                                                ChangeProduct
                                                            </button>
                                                            <button
                                                                className="btn"
                                                                onClick={() => this.props.deleteProduct(product,
                                                                    getLocalStorage)}>
                                                                DeleteProduct
                                                            </button>
                                                        </td>
                                                    </tr>

                                                    :
                                                    null
                                            ))
                                            :
                                            null
                                    }

                                    </tbody>

                                </table>


                            </div>

                            : <ChangeProductForm/>

                        : <AddProductForm/>

                }
            </div>

        )
    }
}

const mapState = state => ({
    ...state
});


const mapDispatchToProps = dispatch => ({
    productsFetchList: auth => dispatch(productsFetchList(auth)),
    showForm: () => dispatch(showForm()),
    deleteProduct: (product, auth) => dispatch(deleteProduct(product, auth)),
    showChangeForm: (product) => dispatch(showChangeForm(product)),
    logOut: () => dispatch(logOut())
});


export default connect(mapState, mapDispatchToProps)(ProductTable);