import axios from "axios";

export const FETCHING_DATA_START = "FETCHING_DATA_START";
export const FETCHING_DATA_SUCCESS = "FETCHING_DATA_SUCCESS";
export const FETCHING_DATA_FAILURE = "FETCHING_DATA_FAILURE";

export const ADDING_DATA_START = "ADDING_DATA_START";
export const ADDING_DATA_SUCCESS = "ADDING_DATA_SUCCESS";
export const ADDING_DATA_FAILURE = "ADDING_DATA_FAILURE";

export const EDITING_DATA_START = "EDITING_DATA_START";
export const EDITING_DATA_SUCCESS = "EDITING_DATA_SUCCESS";
export const EDITING_DATA_FAILURE = "EDITING_DATA_FAILURE";

export const DELETING_DATA_START = "DELETING_DATA_START";
export const DELETING_DATA_SUCCESS = "DELETING_DATA_SUCCESS";
export const DELETING_DATA_FAILURE = "DELETING_DATA_FAILURE";

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

export const editSmurf = (smurfData) => dispatch => {

    dispatch({type: ADDING_DATA_START});

    axios.put("http://localhost:3333/smurfs/" + smurfData.id, smurfData)
        .then(response => {

            console.log("Data from server (ADDING_DATA_SUCCESS):", response.data);

            dispatch({ type: ADDING_DATA_SUCCESS, payload: response.data});
        })
        .catch(response => {

            console.log("error message from server (ADDING_DATA_FAILURE):", response);

            dispatch({ type: ADDING_DATA_FAILURE, payload: response});
        })
}

export const deleteSmurf = (smurfData) => dispatch => {

    dispatch({type: DELETING_DATA_START});

    axios.delete("http://localhost:3333/smurfs/" + smurfData.id)
        .then(response => {

            console.log("Data from server (DELETING_DATA_SUCCESS):", response.data);

            dispatch({ type: DELETING_DATA_SUCCESS, payload: response.data});
        })
        .catch(response => {

            console.log("error message from server (DELETING_DATA_FAILURE):", response);

            dispatch({ type: ADDING_DATA_FAILURE, payload: response});
        })
}