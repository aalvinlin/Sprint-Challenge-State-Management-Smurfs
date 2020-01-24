import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const ADDING_DATA_START = "ADDING_DATA_START";
export const ADDING_DATA_SUCCESS = "ADDING_DATA_SUCCESS";
export const ADDING_DATA_FAILURE = "ADDING_DATA_FAILURE";


export const search = () => dispatch => {

    dispatch({type: FETCHING_DATA_START});

    axios.get("localhost:3333/smurfs")
    // axios.get("https://swapi.co/api/people/1")
        .then(response => {

            console.log("Data from server (FETCHING_DATA_SUCCESS):", response);

            dispatch({ type: FETCHING_DATA_SUCCESS, payload: response});
        })
        .catch(response => {

            console.log("error message from server (FETCHING_DATA_FAILURE):", response);

            dispatch({ type: FETCHING_DATA_FAILURE, payload: response});
        })
}

export const addSmurf = (smurfName) => dispatch => {

    dispatch({type: ADDING_DATA_START});

    axios.push("localhost:3333/smurfs")
    // axios.get("https://swapi.co/api/people/1")
        .then(response => {

            console.log("Data from server (ADDING_DATA_SUCCESS):", response);

            dispatch({ type: ADDING_DATA_SUCCESS, payload: response});
        })
        .catch(response => {

            console.log("error message from server (ADDING_DATA_FAILURE):", response);

            dispatch({ type: ADDING_DATA_FAILURE, payload: response});
        })
}