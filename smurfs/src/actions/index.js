import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const search = () => dispatch => {

    dispatch({type: FETCHING_DATA_START});

    axios.get("localhost:3333/smurfs")
    // axios.get("https://swapi.co/api/people/1")
        .then(response => {

            console.log("Data from server:", response);

            dispatch({ type: FETCHING_DATA_SUCCESS, payload: response});
        })
        .catch(response => {

            console.log("Error message from server:", response);

            dispatch({ type: FETCHING_DATA_FAILURE, payload: response});
        })
}