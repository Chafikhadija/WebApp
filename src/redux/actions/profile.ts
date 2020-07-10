import api from "../../api"

export const FETCH_PROFILE="FETCH_PROFILE"
export const CLEAR_PROFILE  = "CLEAR_PROFILE"

export const fetchProfile = () => {

    return (dispatch: any) => {
        api.get(`/users/profile`,)
        .then(response => {
            console.log(response)
            dispatch({ type: FETCH_PROFILE, payload: { data: response.data } })
        })
        .catch(err => {
                console.error(err)
            })

    }
}