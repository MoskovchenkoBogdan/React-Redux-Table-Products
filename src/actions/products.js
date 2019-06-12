 export const productsFetchList = user => {
    return dispatch => {
        return fetch("https://gentle-escarpment-19443.herokuapp.com/v1/articles", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: "Bearer "+ user.currentUser.access_token
            },
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    console.error('ERROR: ' + data.message);
                } else {
                    dispatch ({
                        type: 'SET_PRODUCTS',
                        payload: data
                    })
                }
            })
    }
}

