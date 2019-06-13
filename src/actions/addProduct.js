export const showForm = () => {
    return dispatch => {
        dispatch({
            type: 'SHOW_ADD_FORM',
        })
    }
}

export const userPostFetch = (user , auth) => {
    return dispatch => {
        console.log(JSON.stringify(user));
        return fetch("https://gentle-escarpment-19443.herokuapp.com/v1/articles", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                "Authorization":"Bearer " + auth,
            },
            body: JSON.stringify(user)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    console.error('ERROR: ' + data.message);
                } else {
                    dispatch({
                        type: 'ADD_PRODUCTS',
                        payload: data
                    })
                }
            })
    }
}

