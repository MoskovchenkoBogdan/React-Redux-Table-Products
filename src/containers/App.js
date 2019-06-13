import React, {Component} from 'react';
import {connect} from 'react-redux';

import ProductTable from './ProductTable';
import Greetings from './Greetings'

class App extends Component {
    render() {
        let getLocalStorage = localStorage.getItem('token');
        const {products, auth} = this.props;
        console.log(products);
        return (
            <div className="container">
                {
                    !getLocalStorage ? <Greetings /> : <ProductTable />
                }
            </div>
        );
    }
}

const mapState = state => ({
    ...state
});

export default connect(mapState)(App);
