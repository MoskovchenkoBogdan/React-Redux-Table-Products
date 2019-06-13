export const changeProduct = (id ,user , auth) => {
    return dispatch => {
        console.log(JSON.stringify(user));
        return fetch("https://gentle-escarpment-19443.herokuapp.com/v1/articles/" + id, {
            method: "PUT",
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
                        type: 'CHANGE_PRODUCT',
                        payload: data
                    })
                }
            })
    }
}