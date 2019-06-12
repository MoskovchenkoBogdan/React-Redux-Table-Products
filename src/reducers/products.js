const initalState = {
    products: null,
    showFormAddProduct: false,
    changeProductForm: null,
    showChangeProductForm: false,
};

export default (state = initalState, action) => {

    switch (action.type) {
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.payload
            };
        case 'SHOW_ADD_FORM':
            return {
                ...state,
                showFormAddProduct: true
            };
        case "ADD_PRODUCTS":
            return {
                ...state,
                products: [
                    ...state.products,
                    action.payload
                ],
                showFormAddProduct: false
            };
        case "CHANGE_PRODUCT":
            const {products} = state;
            if (products) {

                let newArr = [];
                for (let i =0; i < products.length; i++){


                    if (products[i].id === action.payload.id){

                        newArr[i] = action.payload
                    } else {
                        newArr[i] = products[i]
                    }
                }

                return {
                    ...state,
                    products: newArr,
                    showChangeProductForm: false
                }
            } else {return {
                ...state,
                showChangeProductForm: false
            }
            }
        case "SHOW_GHANGE_FORM":
                return {
                        ...state,
                    showChangeProductForm: true,
                    changeProductForm: action.payload
                }
        default:
            return state;
    }
};