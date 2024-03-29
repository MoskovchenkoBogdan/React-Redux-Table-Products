const initialState = {
    currentUser: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                currentUser: action.payload
            };
        case 'LOGOUT_USER':
            console.log("LOGOUT_USER");
            return {
                ...state,
                currentUser: []
            };
        default:
            return state;
    }
}