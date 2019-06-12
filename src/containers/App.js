import React, {Component} from 'react';
import {connect} from 'react-redux';

import ProductTable from './ProductTable';
import Greetings from './Greetings'

class App extends Component {
    render() {
        console.log(this.props);
        const {products, auth} = this.props;
        console.log(products);
        return (
            <div className="container">
                {
                    !auth.currentUser.id ? <Greetings /> : <ProductTable />
                }
            </div>
        );
    }
}

const mapState = state => ({
    ...state
});

export default connect(mapState)(App);
