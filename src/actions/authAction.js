export const userPostFetch = user => {
    return dispatch => {
        console.log(JSON.stringify(user));
        return fetch("https://gentle-escarpment-19443.herokuapp.com/v1/users/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.message) {
                    console.error('ERROR: ' + data.message);
                } else {
                    localStorage.setItem("token", data.access_token);
                    dispatch({
                        type: 'LOGIN_USER',
                        payload: data
                    })
                }
            })
    }
}
