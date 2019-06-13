export const showChangeForm = (product) => {
    return dispatch => {
        dispatch({
            type: 'SHOW_GHANGE_FORM',
            payload: product
        })
    }
}


