export const showChangeForm = (id) => {
    return dispatch => {
        dispatch({
            type: 'SHOW_GHANGE_FORM',
            payload: id
        })
    }
}


