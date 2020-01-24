import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const search = () => dispatch => {

    dispatch({type: FETCHING_DATA_START});

    axios.get("https://localhost:3333/GET")
        .then(response => {

            console.log("Data from server:", response);

            dispatch({ type: FETCHING_DATA_SUCCESS, payload: response});
        })
        .catch(response => {

            console.log("Error message from server:", response);

            dispatch({ type: FETCHING_DATA_FAILURE, payload: response});
        })
}