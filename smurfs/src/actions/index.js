import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const ADDING_DATA_START = "ADDING_DATA_START";
export const ADDING_DATA_SUCCESS = "ADDING_DATA_SUCCESS";
export const ADDING_DATA_FAILURE = "ADDING_DATA_FAILURE";


export const search = () => dispatch => {

    dispatch({type: FETCHING_DATA_START});

    axios.get("http://localhost:3333/smurfs")
        .then(response => {

            console.log("Data from server (FETCHING_DATA_SUCCESS):", response.data);

            dispatch({ type: FETCHING_DATA_SUCCESS, payload: response.data});
        })
        .catch(response => {

            console.log("error message from server (FETCHING_DATA_FAILURE):", response);

            dispatch({ type: FETCHING_DATA_FAILURE, payload: response});
        })
}

export const addSmurf = (smurfName) => dispatch => {

    dispatch({type: ADDING_DATA_START});

    axios.post("http://localhost:3333/smurfs", smurfName)
        .then(response => {

            console.log("Data from server (ADDING_DATA_SUCCESS):", response.data);

            dispatch({ type: ADDING_DATA_SUCCESS, payload: response.data});
        })
        .catch(response => {

            console.log("error message from server (ADDING_DATA_FAILURE):", response);

            dispatch({ type: ADDING_DATA_FAILURE, payload: response});
        })
}